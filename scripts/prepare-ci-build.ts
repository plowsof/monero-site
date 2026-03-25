import { execFileSync } from "node:child_process";
import { readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { parseArgs } from "node:util";
import { defaultLocale, locales, rtlLocales } from "../src/i18n/config";

if (!process.env.CI) {
  console.log("Not in CI");
  process.exit(0);
}

const { values: args } = parseArgs({
  options: {
    "limit-posts": { type: "string" },
    "skip-og": { type: "boolean", default: false },
    "limit-locales": { type: "boolean", default: false },
    "base-branch": { type: "string" },
    "base-ref": { type: "string" },
  },
});

if (args["base-branch"] && args["base-ref"]) {
  console.error("Cannot use both --base-branch and --base-ref");
  process.exit(1);
}

const BLOG_DIR = "src/content/blog";
const OG_ROUTE = "src/pages/open-graph/[...route].ts";
const I18N_CONFIG = "src/i18n/config.ts";
const I18N_DIR = "src/i18n/translations";

function git(...gitArgs: string[]): string {
  return execFileSync("git", gitArgs, { encoding: "utf-8" }).trim();
}

function getChangedFiles(
  ref: string,
  useMergeBase: boolean,
  ...dirs: string[]
): string[] {
  try {
    if (git("rev-parse", "--is-shallow-repository") === "true") {
      git("fetch", "--unshallow");
    }

    git("fetch", "origin", ref);

    return git(
      "diff",
      "--name-only",
      ...(useMergeBase ? ["--merge-base"] : []),
      "FETCH_HEAD",
      "HEAD",
      "--",
      ...dirs,
    )
      .split("\n")
      .filter(Boolean);
  } catch (e) {
    console.warn("Could not detect changed files");
    console.warn(e instanceof Error ? e.message : e);
    return [];
  }
}

function changedFilesUnder(dir: string): string[] {
  return changed.filter((f) => f.startsWith(dir + "/"));
}

function serializeI18nConfig(activeLocales: Set<string>): string {
  const entries = Object.entries(locales)
    .filter(([key]) => activeLocales.has(key))
    .map(([key, val]) => `  ${key}: "${val}",`);

  const rtl = rtlLocales.map((l) => `"${l}"`).join(", ");

  return [
    `export const defaultLocale = "${defaultLocale}";`,
    "export const locales = {",
    ...entries,
    "};",
    `export const rtlLocales = [${rtl}];`,
    "",
  ].join("\n");
}

const baseRef = args["base-branch"] ?? args["base-ref"];
const useMergeBase = Boolean(args["base-branch"]);

console.log(
  baseRef
    ? `Diff: ${useMergeBase ? "merge-base" : "direct"} against ${baseRef}`
    : "Diff: skipped",
);

const changed = baseRef
  ? getChangedFiles(baseRef, useMergeBase, BLOG_DIR, I18N_DIR)
  : [];

// Limit blog posts, keeping edited ones
if (args["limit-posts"]) {
  const limit = Number(args["limit-posts"]);
  if (!Number.isFinite(limit) || limit < 1) {
    console.error(`Invalid --limit-posts value: ${args["limit-posts"]}`);
    process.exit(1);
  }

  const isPost = (f: string) => /^\d/.test(f) && f.endsWith(".md");

  const allPosts = readdirSync(BLOG_DIR).filter(isPost).sort().reverse();
  const keep = new Set(allPosts.slice(0, limit));

  for (const file of changedFilesUnder(BLOG_DIR)) {
    if (isPost(basename(file))) keep.add(basename(file));
  }

  let removed = 0;
  for (const file of allPosts) {
    if (keep.has(file)) continue;
    rmSync(join(BLOG_DIR, file));
    removed++;
  }

  console.log(
    `Blog: kept ${allPosts.length - removed} of ${allPosts.length} posts`,
  );
}

// Limit locales
if (args["limit-locales"]) {
  const keepLocales = new Set([defaultLocale]);

  for (const file of changedFilesUnder(I18N_DIR)) {
    const locale = relative(I18N_DIR, file).split("/")[0];
    if (locale && locale !== defaultLocale) keepLocales.add(locale);
  }

  writeFileSync(I18N_CONFIG, serializeI18nConfig(keepLocales));
  console.log(`Locales: building ${Array.from(keepLocales).join(" ")}`);
}

// OpenGraph removal
if (args["skip-og"]) {
  rmSync(OG_ROUTE, { force: true });
  console.log(`OpenGraph: removed ${OG_ROUTE}`);
}

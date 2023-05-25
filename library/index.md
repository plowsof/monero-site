---
layout: custom
title: titles.library
permalink: /library/index.html
---
{% t global.lang_tag %}
<div class="about-monero">
    <div class="center-xs container description">
      <p class="text-center">{% t library.description %}</p>
    </div>
    <section class="container full">
        <div class="info-block text-adapt">
            <h2>{% t library.books %}</h2>
            <div>
                <h3><a href="Zero-to-Monero-2-0-0.pdf">{% t library.zerotomonerov2 %}</a></h3>
                    <p>{% t library.zerotomonerov2p %}</p>
                <h3><a href="Zero-to-Monero-1-0-0.pdf">{% t library.zerotomonerov1 %}</a></h3>
                    <p>{% t library.zerotomonerov1p %}</p>
                <h3><a href="https://masteringmonero.com/free-download.html">Mastering Monero</a></h3>
                    <p>{% t library.masteringmonerop %}</p> 
            </div>
        </div>
    </section>
    <section class="container full">
        <div class="info-block text-adapt">
            <h2>{% t library.cheatsheets %}</h2>
            <div>
                <h3>{% t library.thesalmonseries %}</h3>
                    <p>
                    {% t library.thesalmonseriesp %}
                    <ul><li>
                    <a href="MoneroAddressesCheatsheet20201206.pdf">{% t library.moneroaddressescheatsheet20201206 %}</a> - {% t library.moneroaddressescheatsheet20201206p %}
                    </li><li>
                    <a href="RingsCheatsheet20210301.pdf">{% t library.ringscheatsheet20210301 %}</a> - {% t library.ringscheatsheet20210301p %}
                    </li><li>
                    <a href="RctCheatsheet20210604.pdf">{% t library.rctcheatsheet20210604 %}</a> - {% t library.rctcheatsheet20210604p %}
                    </li><li>
                    <a href="ZKbasicsCheatsheet20220621.pdf">{% t library.zkbasicscheatsheet20220621 %}</a> - {% t library.zkbasicscheatsheet20220621p %}
                    </li></ul>
                    </p>
            </div>
        </div>
    </section>
    <section class="container full">
        <div class="info-block text-adapt">
            <h2>{% t library.newsletters %}</h2>
            <div>
                {% for newsletter_key in site.translations[site.lang].library.newsletterslist %}
                    {% for newsletters_data in site.data.library.newsletters %}
                        {% for newsletter_data in newsletters_data %}
                            {% if newsletter_data[0] == newsletter_key[0] %}
                                <h3><a href="{{ newsletters_data.link }}">{{ newsletters_data.name }}</a></h3>
                                <p>{% t library.newsletterslist.{{ newsletter_data[0] }} %}</p>
                           {% endif %}
                        {% endfor %}
                    {% endfor %}
                {% endfor %}
            </div>
        </div>
    </section>
</div>

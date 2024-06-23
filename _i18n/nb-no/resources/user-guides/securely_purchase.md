{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Step 1: Acquire Monero

Det er flere måter å oppdrive Monero på. Du kan utvinne det, veksle varer
eller tjenester for det, eller du kan veksle andre kryptovalutaer og
fiat-penger til XMR. Hvis du velger det siste, er den enkleste måten å gjøre
det på å bruke en børs.

Det finnes flere børser som støtter Monero. Noen er sentraliserte, som
vanligvis har mye likviditet og rask service, men som krever at du sender
inn personlige opplysninger (KYC) før du kan begynne å handle der. Andre er
desentraliserte og krever ikke identifikasjon, men har vanligvis mindre
volum og kan være vanskeligere å bruke. Det finnes også tjenester som lar
mennesker møte og handle uten at en tredjepart er involvert.

En ufullstendig liste over børser som støtter Monero finnes på vår
[Forhandler-side]({{ site.baseurl }}/community/merchants/#exchanges).

## Step 2: Download and create a Paper Wallet on a secure and air-gapped computer.

Download the @paper-wallet generator at: [getmonero.org/generator]({{
site.baseurl}}/generator) and copy it to a USB stick (direct link:
[wallet-generator.zip]({{ site.baseurl
}}/resources/wallet-generator/wallet-generator.zip)).

Unzip and open the paper wallet generator (wallet-generator.html) into a web
browser on an air-gapped (@airgap) computer that hasn't been used before, or
has had a clean installation of the operative system.

Papirlommeboken din vil inneholde fire viktige elementer:

- Monero Public @Address: The public address is used to receive funds to the
  @wallet. You give this to anyone who will be sending funds to your wallet.

- Monero @Mnemonic-Seed: The mnemonic seed is a method of storing the entire
  wallet that is easily recognizable to humans.  This is all you need to
  restore your wallet at a later date.

- Monero @Spend-Key: The private spend key is used to send funds from the
  wallet.

- Monero @View-Key: The private view key is to view transactions entering
  the wallet. Commonly this is used to setup a view-only wallet which can
  see incoming transactions live on the blockchain as they are sent to a
  cold storage wallet.

På dette stadiet har du mange valg. Du kan skrive ut lommeboken på papir,
lagre den som PDF eller tekst på en USB-minnepinne, brenne den til CD/DVD
osv. Du vil sannsynligvis ha minst to eller tre kopier som lagres sikkert på
ulike steder. Hvis det lagres digitalt, bør alt krypteres med et sterkt
passord. Hvis det lagres på papir, må lommeboken ikke vises til noen andre
som kan lære seg de 25 ordene utenat eller ta bilde av lommeboken uten din
tillatelse. Å sende noen et bilde av lommeboken er det samme som å gi bort
alle pengene dine.

Uansett hvilken metode du velger, må du sørge for at det ikke finnes en kopi
av Monero-lommeboken din på enheten du har brukt. Du må kanskje slette
Monero-lommeboken på en trygg måte hvis du lagret den til en disk eller
sørge for at printeren din ikke lagrer kopier av utskrifter.

*Hvis du mister tilgangen til Monero-papirlommeboken din, vil ikke Moneroene bli tilgjengelig for deg eller noen andre. Du vil ikke kunne gjenvinne dem!*

#### Side Note

Option to encrypt an XMR mnemonic seed: https://xmr.llcoins.net/  
Download the html page and place it on your airgapped computer. Check the
part "Encrypt/Decrypt Mnemonic Seed" and make sure you use "CN Add" with a
decent password. Thanks manicminer5.

## Step 3: Send your Moneroj to the paper wallet

Now that you have everything you need, you are ready to send your XMR to your paper wallet. Simply send the coins to the wallet address you noted earlier. Make sure the address is correct, even if you copy-pasted it! Remember that if you send the coins to a wrong address, there is no way to have them back!  

#### Notes and How to Verify Funds

Fordi Monero-blokkjeden er privat og usporbar, vil du ikke kunne sjekke din
offentlige Monero-adresse og bekrefte at midlene har ankommet slik som med
bitcoin. Dette er bra for personvern, men uheldig med tanke på
bekvemmelighet.

For å sikkert verifisere midlene i lommeboken din, må du sette opp en
visningslommebok. Dette er hvor visningsnøkkelen kommer inn i spill. For å
opprette en visningslommebok, kan du se oppføringen:
[Visningslommebok]({{site.baseurl}}/resources/user-guides/view_only.html)

For å verifisere at midlene *fremdeles* er i lommeboken din og ikke har
blitt brukt, må du opprette en kald lommebok med den mnemoniske nøkkelen din
(alle midlene dine) på en PC som ikke er koblet til internett og som har en
oppdatert kopi av Monero-blokkjeden. Når du er ferdig, må du på en sikker
måte slette lommeboken eller koble den til internett, og da blir det en
«varm» lommebok.

{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monerod

`monerod` er @daemon-programvaren som kommer med Monero-treet. Den er et
konsollprogram og håndterer blokkjeden. Mens en bitcoin-lommebok håndterer
både en konto og blokkjeden, separerer Monero disse: `monerod` håndterer
blokkjeden og `monero-wallet-cli` håndterer kontoen.

Denne guiden antar at du allerede har satt opp VPS-konto og at du bruker
SSH-en til å tunnelere til serverkonsollen.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Make sure that port 18080 is open

`monerod` bruker denne porten til å kommunisere med andre noder i
Monero-nettverket.

Eksempel hvis du bruker `ufw`: `sudo ufw allow 18080` Eksempel hvis du
bruker `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Download the current Monero Core binaries

    wget https://downloads.getmonero.org/linux64

### Make a directory and extract the files.

    mkdir monero
    tar -xjvf linux64 -C monero

### Launch the daemon

    cd monero
    ./monerod

### Options:

For å vise en liste over alle valgene og innstillingene:

    ./monerod --help

For å starte opp daemon som bakgrunnsprosess:

    ./monerod --detach

For å overvåke utdataene til `monerod` hvis den kjører som daemon:

    tail -f ~/.bitmonero/bitmonero.log

Hold VPS-en sikker med autooppdateringer:

https://help.ubuntu.com/community/AutomaticSecurityUpdates



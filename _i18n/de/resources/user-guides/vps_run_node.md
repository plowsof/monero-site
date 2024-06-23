{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monerod

`monerod` ist die Hintergrunddienst-Software, die mit der
Monero-Basissoftware einhergeht. Es ist ein Konsolenprogramm, das die
Blockchain managt. Während ein Bitcoin-Wallet gleichzeitig das Konto wie
auch die Blockchain managt, ist dies bei Monero separiert: `monerod`
bewerkstelligt die Blockchain und `monero-wallet-cli` das Konto.

Diese Anleitung setzt voraus, dass du bereits einen VPS-Account angelegt
hast und dich via SSH-Tunnel zur Server-Konsole verbinden kannst.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Make sure that port 18080 is open

`monerod` nutzt diesen Port zur Kommunikation mit anderen Nodes innerhalb
des Monero-Netzwerks.

Beispiel bei Verwendung von `ufw`: `sudo ufw allow 18080` Beispiel bei
Verwendung von `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j
ACCEPT`

### Download the current Monero Core binaries

    wget https://downloads.getmonero.org/linux64

### Make a directory and extract the files.

    mkdir monero
    tar -xjvf linux64 -C monero

### Launch the daemon

    cd monero
    ./monerod

### Options:

Zeige eine Liste aller Optionen und Einstellungen an:

    ./monerod --help

Starte den Hintergrunddienst als Hintergrundprozess:

    ./monerod --detach

Überwache den Output von `monerod`, sofern als Hintergrunddienst betrieben:

    tail -f ~/.bitmonero/bitmonero.log

Erhalte die Sicherheit des VPS durch automatische Aktualisierungen:

https://help.ubuntu.com/community/AutomaticSecurityUpdates



{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monerod

`monerod` es el software daemon que viene con el árbol de Monero. Es un
programa de consola, y administra la blockchain. Mientras bitcoin administra
tanto cuenta como blockchain, Monero lo separa en: `monerod` se encarga de
la blockchain, y `monero-wallet-cli` de la cuenta.

Esta guía asume que ya has preparado una cuenta VPS y que estás utilizando
SSH para dirigirte a la consola del servidor.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Make sure that port 18080 is open

`monerod` usa este puerto para comunicarse con otros nodos en la red de
Monero.

Ejemplo si se usa `ufw`: `sudo ufw allow 18080` Ejemplo si se usa
`iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Download the current Monero Core binaries

    wget https://downloads.getmonero.org/linux64

### Make a directory and extract the files.

    mkdir monero
    tar -xjvf linux64 -C monero

### Launch the daemon

    cd monero
    ./monerod

### Options:

Muestra la lista de todas las opciones y ajustes:

    ./monerod --help

Abre el daemon como un proceso de segundo plano:

    ./monerod --detach

Monitorea la salida de `monerod` si se ejecuta como daemon:

    tail -f ~/.bitmonero/bitmonero.log

Mantén el VPS seguro con autoactualizaciones:

https://help.ubuntu.com/community/AutomaticSecurityUpdates



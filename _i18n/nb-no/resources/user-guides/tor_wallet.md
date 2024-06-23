{% include disclaimer.html translated="yes" translationOutdated="no" %}

Under viser vi deg et eksempel på konfigurasjon som lar deg kjøre en Monero
@daemon (f.eks. på en hjemmeserver eller VPS) som du kan koble til fra en
annen PC som kjører lommeboken din. Vi gjør dette over Tor-nettverket for å
gjenfinne informasjon om transaksjoner som lommeboken din trenger. Fordelene
ved denne tilnærmingen er at daemon (`monerod`) kan være på hele tiden mens
blokker sendes/mottas mens lommeboken kan kobles til ved behov og få tilgang
til hele blokkjeden. [Monerujo](https://www.monerujo.io/) bør også fungere
via [Orbot](https://guardianproject.info/apps/org.torproject.android/).
Fordi Tor-nettverket gir kryptering og autentisering, kan du være sikker på
at RPC-akkreditivene dine ikke lekkes. Tor løser også ofte problemer som man
kan se på hjemmeservere tilknyttet port-videresending, endring av
IP-adresser osv. – det bare virker. Dette oppsettet vil også tilsløre det
faktum at du kobler deg til en ekstern Monero-node. Det er testet med Monero
`v0.15.0.1`, der en lommebok fra en bærbar MAC kobles til en ekstern
Linux-node (Ubuntu 18.04.2).

## Create a Tor hidden service for RPC

Sørg for at [Tor er
installert](https://community.torproject.org/relay/setup/bridge/debian-ubuntu/)
og kjører på riktig måte før du fortsetter.

Vi trenger kun å konfigurere RPC-tjenesten til å kjøre som en skjult
tjeneste her på `18081`.

Fil: `/etc/torrc`

```
HiddenServiceDir /var/lib/tor/monero-service/
HiddenServicePort 18081 127.0.0.1:18081
```
Restart Tor:
```
sudo systemctl restart tor@default
```

Make sure Tor started correctly:
```
sudo systemctl status tor@default.service
```

If everything looks good, make a note of the hidden service (onion address)
name:
```
sudo cat /var/lib/tor/monero-service/hostname
```
It will be something like 4dcj312uxag2r6ye.onion -- use this for
`HIDDEN_SERVICE` below.

### Configure Daemon to allow RPC

I dette eksempelet bruker vi ikke Tor til å samhandle med p2p-nettverket,
men kun for å koble til en Monero-node, så det er kun RPC-skjulte tjenester
som trengs.

Fil: `~/.bitmonero/bitmonero.conf` (i hjemkatalogen til Monero-brukeren)

```
no-igd=1
restricted-rpc=1
rpc-login=USERNAME:PASSWORD
```
(Make up a USERNAME and PASSWORD to use for RPC)

Start daemon på nytt: `monerod stop_daemon; sleep 10; monerod --detach`

Make sure the daemon started correctly:
```
tail -f ~/.bitmonero/bitmonero.log
```

## Connecting to your node from a local wallet

Sørg for at du har Tor som kjører lokalt slik at du kan koble til
Tor-nettverket. En enkel måte på Macen er å bare starte Tor-nettleseren og
bruke Tor dens daemon.

Then test a simple RPC command, eg:
```
curl --socks5-hostname 127.0.0.1:9150 -u USERNAME:PASSWORD --digest -X POST http://HIDDEN_SERVICE.onion:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'
```
Replace `USERNAME`, `PASSWORD`, and `HIDDEN_SERVICE` with values from
above.  Change `9150` to another port if needed by your local Tor daemon.

Når du utfører kommandoen, bør du få litt informasjon om den eksterne
daemonen hvis alt fungerer som det skal. Hvis ikke, kan du legge til en ` -v
` i begynnelsen og prøve å feilsøke hvorfor den ikke kobler seg til. Sjekk
brannmurer, passord osv.

Once it is working, you can connect using your cli wallet:
```
./monero-wallet-cli --proxy 127.0.0.1:9150 --daemon-host HIDDEN_SERVICE.onion --trusted-daemon --daemon-login USERNAME:PASSWORD --wallet-file ~/PATH/TO/YOUR/WALLET
```
Replace values above as needed.

## GUI

If you are interested in experimenting with the GUI over Tor, you can try
`torsocks` (note this may leak info -- do not rely on it if your life
depends on maintaining anonymity).  Here is an example on MacOS, adjust as
needed for the Linux GUI:
```
torsocks --port 9150 /Applications/monero-wallet-gui.app/Contents/MacOS/monero-wallet-gui
```

This will allow the GUI to communicate with the Tor network.  Once the GUI is open and a wallet loaded, you must configure it to connect to your Tor hidden service by adding your onion address to:  "Settings > Node > Remote node > Address".

I fremtidige versjoner av GUI-en forventer vi å legge til direkte støtte for
Tor/I2P slik at `torsocks` + kommandolinjen ikke trengs.

# Additional resources

* [ANONYMITY_NETWORKS.md](https://github.com/monero-project/monero/blob/master/docs/ANONYMITY_NETWORKS.md)
* [Hvordan bruke Tor](https://github.com/monero-project/monero#using-tor)
  (Monero README)

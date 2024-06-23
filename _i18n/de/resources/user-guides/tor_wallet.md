{% include disclaimer.html translated="yes" translationOutdated="no" %}

Unten findest du eine beispielhafte Konfiguration, mit welcher es dir
möglich ist, einen Monero-Hintergrunddienst (etwa auf einem Heim-Server oder
VPS) zu betreiben, zu dem du dich von einem anderen Rechner, auf welchem
dein Wallet läuft, verbinden kannst. Über das Anonymitätsnetzwerk Tor werden
die für dein Wallet benötigten Transaktionsinformationen
wiederhergestellt. Das Gute an dieser Herangehensweise ist, dass der
Hintergrunddienst (`monerod`) allzeit betrieben werden und damit dauerhaft
Blöcke senden/empfangen kann, während das Wallet lediglich bei Bedarf - wenn
es Zugriff auf die gesamte Blockchain benötigt - zu diesem verbunden werden
kann. [Monerujo](https://www.monerujo.io/) sollte auch via
[Orbot](https://guardianproject.info/apps/org.torproject.android/)
laufen. Da Tors versteckte Dienste Verschlüsselung und Authentifizierung
bieten, kannst du dir sicher sein, dass deine RPC-Anmeldedaten nicht ins
"Clear(net)" gesendet werden. Tor behebt außerdem Probleme (etwa im
Zusammenhang mit Portweiterleitungen oder IP-Adressenwechseln), die häufig
bei Privatservern auftreten - es funktioniert einfach. Diese Einrichtung
verschleiert zudem den Umstand, dass du dich zu einem Monero-Remote-Node
verbindest. Getestet wurde die Verbindung eines Mac-Laptops zu einem
Linux-Remote-Node (Ubuntu 18.04.2) mit der Monero-Version `v0.15.0.1`.

## Create a Tor hidden service for RPC

Stelle sicher, dass [Tor installiert
ist](https://community.torproject.org/relay/setup/bridge/debian-ubuntu/) und
richtig läuft. Fahre erst dann fort.

Der RPC-Server muss lediglich so eingerichtet werden, dass er als
versteckter Dienst, hier auf Port `18081`, läuft.

Datei: `/etc/torrc`

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

In diesem Beispiel wird Tor nicht zur Interaktion mit dem P2P-Netzwerk
genutzt, sondern lediglich, um sich zum Monero-Node zu verbinden; dadurch
wird nur der versteckte RPC-Dienst benötigt.

Datei: `~/.bitmonero/bitmonero.conf` (im Home-Verzeichnis des
Monero-Nutzers)

```
no-igd=1
restricted-rpc=1
rpc-login=USERNAME:PASSWORD
```
(Make up a USERNAME and PASSWORD to use for RPC)

Starte den Hintergrunddienst neu: `monerod stop_daemon; sleep 10; monerod
--detach`

Make sure the daemon started correctly:
```
tail -f ~/.bitmonero/bitmonero.log
```

## Connecting to your node from a local wallet

Stelle sicher, dass Tor lokal bei dir läuft, sodass du dich zum Tor-Netzwerk
verbinden kannst. Auf dem Mac ist ein einfacher Weg dazu das simple Starten
des Tor-Browsers und die Nutzung des Tor-Hintergrunddienstes.

Then test a simple RPC command, eg:
```
curl --socks5-hostname 127.0.0.1:9150 -u USERNAME:PASSWORD --digest -X POST http://HIDDEN_SERVICE.onion:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'
```
Replace `USERNAME`, `PASSWORD`, and `HIDDEN_SERVICE` with values from
above.  Change `9150` to another port if needed by your local Tor daemon.

Wenn alles korrekt läuft, solltest du nach dem Ausführen des Befehls Infos
zum Remote-Hintergrunddienst erhalten. Falls dem nicht so ist, füge ` -v `
an den Anfang an und teste dann, aus welchem Grund keine Verbindung
hergestellt wird; überprüfe Firewalls, das Passwort etc.

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

Wir rechnen damit, dass in zukünftigen Versionen des GUI eine direkte
Tor/I2P-Unterstützung eingebunden wird, sodass `torsocks` + Befehlszeile
nicht benötigt werden.

# Additional resources

* [ANONYMITY_NETWORKS.md](https://github.com/monero-project/monero/blob/master/docs/ANONYMITY_NETWORKS.md)
* [Using Tor](https://github.com/monero-project/monero#using-tor) (Monero
  README)

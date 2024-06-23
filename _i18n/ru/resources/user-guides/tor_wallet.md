{% include disclaimer.html translated="yes" translationOutdated="no" %}

Ниже нами приводится пример конфигурации, позволяющей запустить демон Monero
(например, на домашнем сервере или VPS), к которому вы могли бы
подсоединиться с другого компьютера, на котором будет запущен ваш
кошелёк. Для получения информации транзакций, необходимой для вашего
кошелька, мы используем анонимную сеть Tor. Преимущество данного подхода
заключается том, что демон (`monerod`) может постоянно осуществлять
передачу/приём блоков, в то время как кошелёк будет подсоединяться по
необходимости и иметь доступ к полному
блокчейну. [Monerujo](https://www.monerujo.io/) также должен работать через
[Orbot](https://guardianproject.info/apps/org.torproject.android/).
Поскольку скрытые службы Tor обеспечивают возможность шифрования и
аутентификации, вы можете быть уверены в том, что ваши данные RPC не будут
передаваться в открытую. Tor также решает проблемы, зачастую характерные для
домашних серверов и связанные с пробросом портов, изменением IP-адресов и
т. д. Всё это просто работает. Данная настройка также позволит скрыть тот
факт, что вы подсоединяетесь к удалённому узлу Monero. Она была
протестирована с версией Monero `v0.15.0.1` В ходе тестирования кошелёк,
установленный на ноутбук Mac, соединялся с удалённым узлом Linux (Ubuntu
18.04.2).

## Create a Tor hidden service for RPC

Убедитесь в том, что [Tor
установлен](https://community.torproject.org/relay/setup/bridge/debian-ubuntu/)
и работает надлежащим образом. После этого можно двигаться дальше.

Необходимо только конфигурировать сервер RPC так, чтобы он использовал
скрытую службу на порте `18081`.

Файл: `/etc/torrc`

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

В этом примере мы не используем Tor для взаимодействия с p2p сетью, а просто
соединяемся с узлом Monero, поэтому нам необходима только скрытая служба
RPC.

Файл: `~/.bitmonero/bitmonero.conf` (в домашней директории пользователя
Monero)

```
no-igd=1
restricted-rpc=1
rpc-login=USERNAME:PASSWORD
```
(Make up a USERNAME and PASSWORD to use for RPC)

Перезапустите демон: `monerod stop_daemon; sleep 10; monerod --detach`

Make sure the daemon started correctly:
```
tail -f ~/.bitmonero/bitmonero.log
```

## Connecting to your node from a local wallet

Убедитесь в том, что Tor работает локально, после чего можно подсоединиться
к сети Tor. Одним из простых способов, в случае с Mac, является простой
запуск браузера Tor и использование демона Tor.

Then test a simple RPC command, eg:
```
curl --socks5-hostname 127.0.0.1:9150 -u USERNAME:PASSWORD --digest -X POST http://HIDDEN_SERVICE.onion:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'
```
Replace `USERNAME`, `PASSWORD`, and `HIDDEN_SERVICE` with values from
above.  Change `9150` to another port if needed by your local Tor daemon.

Когда выполняется команда, и если всё работает надлежащим образом, вы должны
получить некоторую информацию об удалённом демоне. Если это не так, следует
добавить ` -v ` в начале и попытаться выяснить, почему соединение
отсутствует, проверить средства сетевой защиты (firewall), правильность
пароля и т. д.

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

Мы надеемся, что в следующих версиях GUI будет добавлена прямая поддержка
Tor / I2P, и необходимость в использовании командной строки и `torsocks`
отпадёт.

# Additional resources

* [ANONYMITY_NETWORKS.md](https://github.com/monero-project/monero/blob/master/docs/ANONYMITY_NETWORKS.md)
* [Используем Tor](https://github.com/monero-project/monero#using-tor)
  (Monero README)

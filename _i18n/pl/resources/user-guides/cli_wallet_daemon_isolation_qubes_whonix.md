{% include disclaimer.html translated="no" translationOutdated="no" %}

Z [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) możesz mieć
portfel Monero, który jest odłączony od sieci i działa na wirtualnie
izolowanym systemie gdzie cały ruch jest wymuszany przez
[Tor](https://torproject.org).

Qubes daje możliwość łatwego tworzenia oddzielnych maszyn wirtualnych dla
różnych celów. Najpierw musisz stworzyć stację roboczą Whonix dla portfela
bez dostępu do sieci. Następnie, kolejną stację roboczą dla @daemon, który
użyje bramki Whonix-a jako NetVM. Do komunikacji między portfelem, a daemon
możesz użyć Qubes[qrexec](https://www.qubes-os.org/doc/qrexec3/).

Jest to bezpieczniejsze niż inne sposoby, które kierują rpc portfela przez
ukrytą usługę Tor, lub które używają fizycznej izolacji, ale nadal są
podłączone do sieci. W ten sposób nie potrzebujesz żadnego połączenia z
siecią, zachowujesz dostęp do Tor-a i masz mniejsze opóźnienia.

## 1. [Create Whonix AppVMs](https://www.whonix.org/wiki/Qubes/Install):

+ Using a Whonix workstation template, create two workstations as follows:

  - Pierwsza stacja robocza będzie używana dla Twojego portfela, będzie ona
    określana jako `monero-wallet-ws`. Będziesz miał `NetVM` ustawiony na
    `none`.

  - Druga stacja robocza będzie przeznaczona dla demona `monerod`, będzie
    ona określana jako `monerod-ws`. Będziesz miał `NetVM` ustawiony na
    bramę Whonixa `sys-whonix`. Zanim przejdziesz dalej, upewnij się, że ta
    stacja robocza ma wystarczającą ilość prywatnej pamięci masowej. Możesz
    oszacować, ile miejsca potrzebujesz, sprawdzając rozmiar [surowego
    blockchaina]({{ site.baseurl }}/downloads/#blockchain). Należy pamiętać,
    że blockchain z czasem będzie zajmował coraz więcej miejsca.

## 2. In the AppVM `monerod-ws`:

+ Create a `systemd` file.

```
user@host:~$ sudo nano /home/user/monerod.service
```

Wklej następującą treść:

```
[Unit]
Description=Monero Full Node
After=network.target

[Service]
User=user
Group=user

Type=forking
PIDFile=/home/user/.bitmonero/monerod.pid

ExecStart=/usr/bin/monerod --detach --data-dir=/home/user/.bitmonero \
    --no-igd --pidfile=/home/user/.bitmonero/monerod.pid \
    --log-file=/home/user/.bitmonero/bitmonero.log --p2p-bind-ip=127.0.0.1

Restart=always
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

+ Make `monerod` daemon run on startup by editing the file
  `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
```

Dodaj te linie na samym dole:

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Zezwól na uruchamianie pliku.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Create rpc action file.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo nano /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Dodaj linię:

```
socat STDIO TCP:localhost:18081
```

+ Shutdown `monerod-ws`.

## 3. In the AppVM `monero-wallet-ws`:

+ Edit the file `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
```

Dodaj następującą linię na samym dole:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Zezwól na uruchamianie pliku.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Shutdown `monero-wallet-ws`.

## 4. In `dom0`:

+ Create the file `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Dodaj następującą linię:

```
monero-wallet-ws monerod-ws allow
```

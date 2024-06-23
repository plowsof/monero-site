{% include disclaimer.html translated="yes" translationOutdated="no" %}

Manchmal kann es passieren, dass dein Geld feststeckt - du hast gesperrtes
Guthaben, das niemals freigegeben wird. So löst du das Problem:

- Load your wallet in monero-wallet-cli.

- Type

> seed

in die Befehlszeile ein. Falls noch nicht geschehen, schreibe deinen
25-Wort-Seed nieder. Dies ist der beste Weg um sicherzustellen, dass du den
Zugriff auf dein Vermögen nicht verlierst.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Du kannst dies tun, indem du die Dateien in einen neuen Ordner kopierst.

Beim Erstellen deines Wallets könntest du einen Namen ohne das
".bin"-Element gewählt haben. In diesem Fall wird sich die Wallet-Datei
schlicht "yourwalletname" (ohne ".bin") nennen.

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked
  funds will now become unlocked.


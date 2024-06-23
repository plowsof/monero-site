{% include disclaimer.html translated="yes" translationOutdated="no" %}

Algunas veces, tus fondos estarán estancados - tendrás fondos bloqueados que
nunca se podrán desbloquear. Esta es la forma de arreglarlo.

- Load your wallet in monero-wallet-cli.

- Type

> seed

en la consola. Escribe tu semilla de 25 palabras si aún no lo has
hecho. Esta es la mejor forma de asegurar que no pierdas acceso a tus
fondos.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Esto se logra copiando los archivos a una nueva carpeta.

Algunas veces, cuando creas un monedero, la pudiste haber llamado de alguna
forma sin el final como .bin. En ese caso, el archivo del monedero será
llamado nombredetumonedero sin .bin al final.

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked
  funds will now become unlocked.


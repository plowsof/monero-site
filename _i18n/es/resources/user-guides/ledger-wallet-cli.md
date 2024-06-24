{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Table of Content

* [Windows](#windows)
* [Mac OS X](#mac-os-x)
* [Linux](#linux)
* [Notas finales](#notas-finales)

### Windows

Primero necesitamos asegurarnos de estar suficientemente preparados. Esto
implica lo siguiente:

- This guide assumes you have already initialized your Ledger wallet and
  thus generated a 24 word mnemonic seed.

- You need to run / use CLI v0.12.2.0, which can be found <a
  href="{{site.baseurl}}/downloads/">here</a>.

- You need to install the Ledger Monero app and configure your
  system. Instructions can be found
  [here](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf)
  (sections 3.1.1 and 3.2.3 in particular). In addition, make sure to set
  the network to `Mainnet`

- Your Ledger needs to be plugged in and the Ledger Monero app should be
  running.

- Either your @daemon (`monerod.exe`) should be running and preferably be
  fully synced or you should connect to a remote node.

Ahora que estamos lo suficientemente preparados, ¡comencemos!

- Go to the directory / folder monerod.exe and monero-wallet-cli.exe are
  located.

- Open a new command prompt / powershell. This is done by first making sure
  your cursor isn't located on any of the files and subsequently doing SHIFT
  + right click. It will give you an option to "Open command window
  here". If you're using Windows 10 in latest version, it'll give you an
  option to "open the PowerShell window here".

- Now type:

```monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200``` (Win 7 + 8)

```.\monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200``` (Win 10)

Ten en cuenta que es simplemente un marcador para el nombre actual del
monedero. Si, por ejemplo, deseas llamar a tu monedero `MoneroWallet`, el
comando sería como se muestra a continuación:

```monero-wallet-cli.exe --generate-from-device MoneroWallet
--subaddress-lookahead 3:200``` (Win 7 + 8)

```.\monero-wallet-cli.exe --generate-from-device MoneroWallet
--subaddress-lookahead 3:200``` (Win 10)

- The CLI will, after executing aforementioned command, prompt your for a
  password. Make sure to set a strong password and confirm it thereafter.

- The Ledger will ask whether you want to export the private view key or
  not. First and foremost, your funds cannot be compromised with merely the
  private view key. Exporting the private view key enables the client (on
  the computer - Monero v0.12.2.0) to scan blocks looking for transactions
  that belong to your wallet / address. If this option is not utilized, the
  device (Ledger) will scan blocks, which will be significantly
  slower. There is, however, one caveat. That is, if your system gets
  compromised, the adversary will potentially be able to compromise your
  private view key as well, which is detrimental to privacy. This is
  virtually impossible when the private view key is not exported.

- You may have to hit confirm twice before it proceeds.

- Your Ledger Monero wallet will now be generated. Note that this may take
  up to 5-10 minutes. Furthermore, there will be no immediate feedback in
  the CLI nor on the Ledger.

- `monero-wallet-cli` will start refreshing. Wait until it has fully
  refreshed.

Felicidades, ahora puedes utilizar tu monedero Ledger Monero en conjunto con
monero-wallet-cli.

### Mac OS X

Primero necesitamos asegurarnos de estar suficientemente preparados. Esto
implica lo siguiente:

- This guide assumes you have already initialized your Ledger wallet and
  thus generated a 24 word mnemonic seed.

- You need to run / use CLI v0.12.2.0, which can be found <a
  href="{{site.baseurl}}/downloads/">here</a>.

- You need to install the Ledger Monero app and configure your
  system. Instructions can be found
  [here](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf)
  (sections 3.1.1 and 3.2.2 in particular). In addition, make sure to set
  the network to `Mainnet`

- Note that the instructions for system configuration (section 3.2.2) on Mac
  OS X are quite elaborate and can be perceived as slightly
  convoluted. Fortunately, tficharmers has created a guide
  [here](https://monero.stackexchange.com/questions/8438/how-do-i-make-my-macos-detect-my-ledger-nano-s-when-plugged-in)
  that you can use for assistance.

- Your Ledger needs to be plugged in and the Ledger Monero app should be
  running.

- Either your daemon (`monerod`) should be running and preferably be fully
  synced or you should connect to a remote node.

Ahora que estamos lo suficientemente preparados, ¡comencemos!

- Use Finder to browse to the directory / folder `monero-wallet-cli` (CLI
  v0.12.2.0) is located.

- Go to your desktop.

- Open a new terminal (if don't know how to open a terminal, see
  [here](https://apple.stackexchange.com/a/256263)).

- Drag `monero-wallet-cli` in the terminal. It should add the full path to
  the terminal. Do not hit enter.

- Now type:

```--generate-from-device <new-wallet-name> --subaddress-lookahead 3:200```

Ten en cuenta que es simplemente un marcador para el nombre actual del
monedero. Si, por ejemplo, deseas llamar a tu monedero `MoneroWallet`, el
comando sería como se muestra a continuación:

```--generate-from-device MoneroWallet --subaddress-lookahead 3:200```

Ten en cuenta que el texto anteriormente mencionado se adjuntará a la
dirección de `monero-wallet-cli`. Así, antes de que presiones Enter, tu
terminal se debería ver como:

```/full/path/to/monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200```

Donde la dirección completa es, intuitivamente, la dirección actual en tu
Mac OS X.

- The CLI will, after executing aforementioned command, prompt you for a
  password. Make sure to set a strong password and confirm it thereafter.

- The Ledger will ask whether you want to export the private view key or
  not. First and foremost, your funds cannot be compromised with merely the
  private view key. Exporting the private view key enables the client (on
  the computer - Monero v0.12.2.0) to scan blocks looking for transactions
  that belong to your wallet / address. If this option is not utilized, the
  device (Ledger) will scan blocks, which will be significantly
  slower. There is, however, one caveat. That is, if your system gets
  compromised, the adversary will potentially be able to compromise your
  private view key as well, which is detrimental to privacy. This is
  virtually impossible when the private view key is not exported.

- You may have to hit confirm twice before it proceeds.

- Your Ledger Monero wallet will now be generated. Note that this may take
  up to 5-10 minutes. Furthermore, there will be no immediate feedback in
  the CLI nor on the Ledger.

- `monero-wallet-cli` will start refreshing. Wait until it has fully
  refreshed.

- Felicidades, ahora puedes utilizar tu monedero Ledger Monero en conjunto
  con monero-wallet-cli.

### Linux

Primero necesitamos asegurarnos de estar suficientemente preparados. Esto
implica lo siguiente:

- This guide assumes you have already initialized your Ledger wallet and
  thus generated a 24 word mnemonic seed.

- You need to run / use CLI v0.12.2.0, which can be found <a
  href="{{site.baseurl}}/downloads/">here</a>.

- You need to install the Ledger Monero app and configure your
  system. Instructions can be found
  [here](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf)
  (sections 3.1.1 and 3.2.1 in particular). In addition, make sure to set
  the network to `Mainnet`

- Your Ledger needs to be plugged in and the Ledger Monero app should be
  running.

- Either your daemon (`monerod`) should be running and preferably be fully
  synced or you should connect to a remote node.

Ahora que estamos lo suficientemente preparados, ¡comencemos!

- Go to the directory / folder monero-wallet-cli and monerod are located.

- Open a new terminal

- Now type:

```./monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200```

Ten en cuenta que es simplemente un marcador para el nombre actual del
monedero. Si, por ejemplo, deseas llamar a tu monedero `MoneroWallet`, el
comando sería como se muestra a continuación:

```./monero-wallet-cli --generate-from-device MoneroWallet
--subaddress-lookahead 3:200```

- The CLI will, after executing aforementioned command, prompt your for a
  password. Make sure to set a strong password and confirm it thereafter.

- The Ledger will ask whether you want to export the private view key or
  not. First and foremost, your funds cannot be compromised with merely the
  private view key. Exporting the private view key enables the client (on
  the computer - Monero v0.12.2.0) to scan blocks looking for transactions
  that belong to your wallet / address. If this option is not utilized, the
  device (Ledger) will scan blocks, which will be significantly
  slower. There is, however, one caveat. That is, if your system gets
  compromised, the adversary will potentially be able to compromise your
  private view key as well, which is detrimental to privacy. This is
  virtually impossible when the private view key is not exported.

- You may have to hit confirm twice before it proceeds.

- Your Ledger Monero wallet will now be generated. Note that this may take
  up to 5-10 minutes. Furthermore, there will be no immediate feedback in
  the CLI nor on the Ledger.

- `monero-wallet-cli` will start refreshing. Wait until it has fully
  refreshed.

Felicidades, ahora puedes utilizar tu monedero Ledger Monero en conjunto con
monero-wallet-cli.

### A few final notes

- We'd strongly advise to test the full process first. That is, send a small
  amount to the wallet and subsequently restore it (using aforementioned
  guide) to verify that you can recover the wallet. Note that, upon
  recreating / restoring the wallet, you ought to append the
  `--restore-height` flag (with a block height before the height of your
  first transaction to the wallet) to the command in step 3 (Windows), step
  5 (Mac OS X), or step 3 (Linux). More information about the restore height
  and how to approximate it can be found
  [here](https://monero.stackexchange.com/questions/7581/what-is-the-relevance-of-the-restore-height).

- If you use a remote node, append the `--daemon-address host:port` flag to
  the command in step 3 (Windows), step 5 (Mac OS X), or step 3 (Linux).

- If desired, you can manually tweak the `--subaddress-lookahead` value. The
  first value is the number of accounts and the second value is the number
  of subaddresses per account. Thus, if you, for instance, want to
  pregenerate 5 accounts with 100 subaddresses each, use
  `--subaddress-lookahead 5:100`. Bear in mind that, the more subaddresses
  you pregenerate, the longer it takes for the Ledger to create your wallet.

- Sólo tienes que utilizar el marcador `--generate-from-device` una vez
  (e.g. sobre creación de monedero). Después de eso, básicamente lo
  utilizarás de manera similar a como normalmente utilizas la consola de
  comandos. Esto es:
   - Asegúrate de que tu Ledger está conectada y la aplicación Monero está
     en ejecución.
   - Abre `monero-wallet-cli`.
   - Ingresa el nombre de tu monedero Ledger Monero.
   - Ingresa la contraseña para abrir el monedero.

   Si los archivos del monedero Ledger no se encuentran en la misma dirección que `monero-wallet-cli`, debes abrir `monero-wallet-cli` con el marcador `--wallet-file /path/to/wallet.keys/file`. De manera alternativa, puedes copiar los archivos del monedero Ledger al mismo directorio de `monero-wallet-cli`.

- If you have any further questions or need assistance, please leave a
  comment to the original
  [StackExchange](https://monero.stackexchange.com/questions/8503/how-do-i-generate-a-ledger-monero-wallet-with-the-cli-monero-wallet-cli)
  answer.

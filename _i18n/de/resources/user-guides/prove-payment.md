{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Prove payments

Sollte jemand bestreiten, eine von dir gesendete Zahlung erhalten zu haben,
musst du in der Lage sein, nachzuweisen, dass diese Zahlung tatsächlich
getätigt wurde.

Bei Bitcoin überprüft man üblicherweise die Transaktions-ID, in welcher
Ursprungs- und Zieladressen gemeinsam mit dem transferierten Betrag
angezeigt werden.

Demgegenüber ist Monero privat. Diese Informationen sind nicht öffentlich in
der Blockchain abrufbar, sodass es einige Schritte zum Zahlungsnachweis
benötigt.

Um Charlie zu beweisen, dass sie eine Zahlung an Bob gesendet hat, muss
Alice Charlie drei Informationen bereitstellen:

- the transaction ID, as is done in Bitcoin
- Bob's address, as is done with Bitcoin
- the transaction's key, which is new with Monero and other CryptoNote
  currencies

Als Alice die Transaktion getätigt hat, wurde automatisch ein
Einmalschlüssel erstellt, der nur für diese Transaktion gilt.

#### CLI

Alice kann diesen im monero-wallet-cli (neuer Name des veralteten
Simplewallets) abrufen:

> get_tx_key TXID

Hier würde Alice ihre tatsächliche Transaktions-ID anstelle des
TXID-Platzhalters einfügen. Wenn alles gut geht, wird anschließend der
Einmal-Transaktionsschlüssel angezeigt.

Beachte, dass dies nur funktioniert, wenn monero-wallet-cli so eingestellt
ist, dass es die Transaktionsschlüssel abspeichert. Um die Einstellung
gegenzuprüfen:

> set

Wenn dies bei 0 steht, ändere es in 1 ab:

> set store-tx-info 1

#### GUI

Alice kann ihr monero-wallet-gui öffnen und die Details ihrer Transaktionen
auf der Verlaufsseite einsehen:

![History](/img/resources/user-guides/en/prove-payment/history.png)

Sie kann hier sowohl die Transaktions-ID als auch Bobs Adresse durch
jeweiliges Anklicken kopieren.  Anschließend erhält sie durch Klicken auf
`P` einen Zahlungsnachweis (den Transaktionsschlüssel):

![Payment
proof](/img/resources/user-guides/en/prove-payment/payment-proof.png)


---

Alice kann diesen Transaktionsschlüssel nun zusammen mit der Transaktions-ID
und Bobs Adresse an Charlie senden.

Info: Wenn mehrere Transaktionen getätigt wurden, muss dieser Vorgang für
jede einzelne dieser Transaktionen wiederholt werden.

### Check payments

Charlie hat nun alle drei Infos erhalten und möchte jetzt - in einer
aktualisierten Blockchain - überprüfen, ob Alice die Wahrheit sagt.

#### CLI

Im monero-wallet-cli gibt er also Folgendes ein:

> check_tx_key TXID TXKEY ADDRESS

Anstelle der Platzhalter werden die von Alice bereitgestellten Informationen
passend eingefügt. monero-wallet-cli nutzt nun den Transaktionsschlüssel, um
die Transaktion zu entschlüsseln und anzuzeigen, wie viel mit genau dieser
Transaktion an die Adresse gesendet wurde.

Natürlich wird Charlie - ebenso wie er es bei Bitcoin tun würde - nochmal
mit Bob gegenprüfen, ob es sich tatsächlich um dessen Adresse handelt.

#### GUI

Charlie will open his monero-wallet-gui and go to the Advanced > Prove/Check page to fill the Check section with the informations provided by Alice:

![Check
payment](/img/resources/user-guides/en/prove-payment/check-payment.png)

Durch Klicken auf "Überprüfen" wird Charlie erfahren, wie viel mit genau
dieser Transaktion an die Adresse gesendet wurde und wie viele Bestätigungen
die Transaktion hatte:

![Payment
checked](/img/resources/user-guides/en/prove-payment/payment-checked.png)


---

Natürlich wird Charlie - ebenso wie er es bei Bitcoin tun würde - nochmal
mit Bob gegenprüfen, ob es sich tatsächlich um dessen Adresse handelt.

Info: Wenn mehrere Transaktionen getätigt wurden, muss dieser Vorgang für
jede einzelne dieser Transaktionen wiederholt werden.

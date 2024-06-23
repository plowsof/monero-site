{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Step 1: Acquire Monero

Es gibt verschiedene Möglichkeiten, mit welchen du du Monero bekommen
kannst. Du kannst Coins minen, sie gegen Güter oder Dienstleistungen
eintauschen oder andere Kryptowährungen und Fiatgeld gegen XMR
tauschen. Wenn du dich für Letzteres entscheidest, ist es wohl am
praktischsten, dies an einer Börse zu machen.

Viele Börsen unterstützen Monero. Manche sind zentralisiert und haben in der
Regel eine gute Liquidität und schnellen Service, benötigen von dir aber
Angaben persönlicher Informationen, bevor der Handel stattfinden kann (KYC,
zu deutsch: "Kenne deinen Kunden"). Einige Börsen sind dezentralisiert und
benötigen keinerlei Identifikation, haben allerdings im Regelfall ein
kleineres Volumen und können komplizierter zu nutzen sein. Es gibt außerdem
Services, die es Personen erlauben, sich ohne Einbindung Dritter zur
Abwicklung eines Handels zu treffen.

Eine unvollständige Liste von Börsen, die Monero unterstützen, findet sich
auf unserer [Händlerseite]({{ site.baseurl
}}/community/merchants/#exchanges).

## Step 2: Download and create a Paper Wallet on a secure and air-gapped computer.

Download the @paper-wallet generator at: [getmonero.org/generator]({{
site.baseurl}}/generator) and copy it to a USB stick (direct link:
[wallet-generator.zip]({{ site.baseurl
}}/resources/wallet-generator/wallet-generator.zip)).

Unzip and open the paper wallet generator (wallet-generator.html) into a web
browser on an air-gapped (@airgap) computer that hasn't been used before, or
has had a clean installation of the operative system.

Dein Paper-Wallet hat vier wichtige Dinge:

- Monero Public @Address: The public address is used to receive funds to the
  @wallet. You give this to anyone who will be sending funds to your wallet.

- Monero @Mnemonic-Seed: The mnemonic seed is a method of storing the entire
  wallet that is easily recognizable to humans.  This is all you need to
  restore your wallet at a later date.

- Monero @Spend-Key: The private spend key is used to send funds from the
  wallet.

- Monero @View-Key: The private view key is to view transactions entering
  the wallet. Commonly this is used to setup a view-only wallet which can
  see incoming transactions live on the blockchain as they are sent to a
  cold storage wallet.

An dieser Stelle hast du einige Möglichkeiten: Du kannst das Wallet auf
Papier ausdrucken, es als PDF oder im Textdateiformat auf einem USB-Stick
sichern, es auf eine CD oder DVD brennen etc. Sehr wahrscheinlich wirst du
mindestens zwei oder drei Ausfertigungen an verschiedenen Orten aufbewahren
wollen. Solltest du es in digitaler Form sichern, verschlüssele alles mit
einem starken Passwort. Wenn du dein Wallet in Papierform aufbewahrst, zeige
es niemandem, der sich die 25 Wörter - also deinen Seed - merken oder ohne
dein Einverständnis ein Foto davon machen könnte. Jemandem ein Foto deines
Wallets zu schicken ist das Gleiche, als würdest du dein gesamtes Guthaben
verschenken.

Egal, welche Methode du wählst: Stelle sicher, dass keine Kopie deines
Monero-Wallets auf dem von dir genutzten Gerät verbleibt. Eventuell musst du
das Wallet sicher löschen, solltest du es auf einer Festplatte oder einem
anderen Speichermedium gespeichert haben; auch solltest du sichergehen, dass
dein Drucker keine Kopie in seinem Speicher sichert.

*Wenn du den Zugriff auf dein Monero-Paper-Wallet verlierst, werden die in ihm liegenden Monero niemals wieder dir oder irgendjemandem sonst zur Verfügung stehen.*

#### Side Note

Option to encrypt an XMR mnemonic seed: https://xmr.llcoins.net/  
Download the html page and place it on your airgapped computer. Check the
part "Encrypt/Decrypt Mnemonic Seed" and make sure you use "CN Add" with a
decent password. Thanks manicminer5.

## Step 3: Send your Moneroj to the paper wallet

Now that you have everything you need, you are ready to send your XMR to your paper wallet. Simply send the coins to the wallet address you noted earlier. Make sure the address is correct, even if you copy-pasted it! Remember that if you send the coins to a wrong address, there is no way to have them back!  

#### Notes and How to Verify Funds

Weil Moneros Blockchain privat und nicht nachverfolgbar ist, wirst du nicht
in der Lage sein, deine öffentliche Monero-Adresse darin ausfindig zu machen
und zu bestätigen, dass etwaige Gelder eingegangen sind, so wie es dir bei
Bitcoin möglich ist. Das ist zwar gut für deine Privatsphäre, aber schlecht
für den Bedienkomfort.

Damit du deine empfangenen Gelder sicher verifizieren kannst, musst du ein
View-Only-Wallet einrichten. Hier kommt der View-Key ins Spiel. Im Eintrag
über
[View-Only-Wallets]({{site.baseurl}}/resources/user-guides/view_only.html)
finden sich mehr Informationen zu ihrer Erstellung.

Um diejenigen Gelder zu überprüfen, welche sich *noch immer in* deinem
Wallet befinden und nicht ausgegeben wurden, musst du mit deinem
mnemonischen Seed (mit deinem gesamten Guthaben) auf deinem Airgap-Computer
(mit aktueller Kopie der Monero-Blockchain) ein Spar-Wallet erstellen. Wenn
du fertig bist, musst du dieses Wallet sicher entfernen. Du kannst es
stattdessen aber auch mit dem Internet verbinden und so zu einem
Zahlungs-Wallet ("Hot-Wallet") werden lassen.

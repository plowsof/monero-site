{% include disclaimer.html translated="no" translationOutdated="no" %}

## Step 1: Acquire Monero

Существует множество способов получить Monero: можно заняться майнингом,
можно принимать оплату за оказание услуг или за товары в Monero, или же
просто обменять другие криптовалюты или фиатные деньги на XMR. Если вы
решите выбрать последний вариант, то удобнее всего будет сделать это,
прибегнув к услугам какой-либо биржи.

Есть много бирж, поддерживающих торговлю Monero. Некоторые из них являются
централизованными, и для них, как правило, характерна высокая ликвидность и
скорость оказания услуг. Но в этом случае перед тем, как начать торговлю,
вам придётся предоставить свою личную информацию (правило KYC (Знай своего
клиента)). Некоторые биржи являются децентрализованными и не требуют никакой
идентификации личности, но обычно объём торгов на них меньше, и ими сложнее
пользоваться. Также существуют сервисы, позволяющие пользователям
встречаться и торговать без посредничества третьих сторон.

Неполный список бирж, поддерживающих Monero, можно найти на нашей [Странице
предпринимателей]({{ site.baseurl }}/community/merchants/#exchanges).

## Step 2: Download and create a Paper Wallet on a secure and air-gapped computer.

Download the @paper-wallet generator at: [getmonero.org/generator]({{
site.baseurl}}/generator) and copy it to a USB stick (direct link:
[wallet-generator.zip]({{ site.baseurl
}}/resources/wallet-generator/wallet-generator.zip)).

Unzip and open the paper wallet generator (wallet-generator.html) into a web
browser on an air-gapped (@airgap) computer that hasn't been used before, or
has had a clean installation of the operative system.

У бумажного кошелька есть четыре важных элемента:

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

На этом этапе у вас есть множество опций. Вы можете распечатать кошелёк на
бумаге, сохранить его в формате PDF или в текстовом формате на
USB-накопителе, записать его на CD/DVD и так далее. Наиболее вероятно, вы
захотите создать, по крайней мере, две или три копии, которые будут
храниться по-отдельности в различных безопасных местах. Если вы решите
хранить его в цифровом формате, следует зашифровать всё, используя надёжный
пароль.  Если вы сделаете это на бумаге, не показывайте кошелёк кому-либо
ещё, способному запомнить ваш ключ, состоящий из 25 слов, или просто
сфотографировать кошелёк без вашего разрешения.  Отправить кому-то снимок
вашего кошелька будет означать обеспечить получателю полный доступ к вашим
средствам.

Какой бы из способов вы ни выбрали, обязательно убедитесь в том, что на
устройстве, которые вы использовали не осталось ни одной копии кошелька
Monero. Возможно, вам придётся удалить кошелёк Monero, если вы сохранили его
на диск, или же убедиться в том, что принтер не сохранил копию в своей
памяти.

*Если вы потеряете доступ к своему бумажному кошельку, то ни вы, ни кто-либо другой уже никогда не сможет получить ваши monero. Вы никак не сможете восстановить их!*

#### Side Note

Option to encrypt an XMR mnemonic seed: https://xmr.llcoins.net/  
Download the html page and place it on your airgapped computer. Check the
part "Encrypt/Decrypt Mnemonic Seed" and make sure you use "CN Add" with a
decent password. Thanks manicminer5.

## Step 3: Send your Moneroj to the paper wallet

Now that you have everything you need, you are ready to send your XMR to your paper wallet. Simply send the coins to the wallet address you noted earlier. Make sure the address is correct, even if you copy-pasted it! Remember that if you send the coins to a wrong address, there is no way to have them back!  

#### Notes and How to Verify Funds

Поскольку блокчейн Monero является анонимным и неотслеживаемым, вы не
сможете найти свой публичный адрес Monero и убедиться в том, что вы
действительно получили средства, как это можно было бы сделать в случае с
Bitcoin. Это хорошо с точки зрения анонимности, но неудобно.

Чтобы безопасным образом убедиться в том, что средства пришли на ваш
кошелёк, вам понадобится создать специальный кошелёк для просмотра. Вот
здесь нам и понадобится ключ просмотра. Как создать такой кошелёк написано в
разделе [Кошельки для
просмотра]({{site.baseurl}}/resources/user-guides/view_only.html)

Чтобы убедиться в том, что средства *по-прежнему* находятся в вашем кошельке
и не были потрачены, необходимо, воспользовавшись вашей мнемонической
фразой, создать на вашем изолированном компьютере холодный кошелёк (со всеми
вашими средствами) с актуальной версией блокчейна Monero. После этого вам
будет необходимо удалить этот кошелёк, или же вы можете подключить
устройство к интернету, после чего кошелёк станет горячим.

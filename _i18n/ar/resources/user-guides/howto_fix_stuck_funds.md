{% include disclaimer.html translated="yes" translationOutdated="no" %}

في بعض الأحيان سوف تتعلق أموالك - سيكون لديك بعض الأموال المغلقه. هذه هي
طريقة إصلاحها.

- Load your wallet in monero-wallet-cli.

- Type

> seed

في سطر الأوامر قم بكتابه ال25 كلمه المخصصه لإستعاده محفظتك. هذه هي أأمن
طريقه للحفاظ علي أموالك من الضياع.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

يمكن القيام بذلك عن طريق نسخ الملفات إلى مجلد جديد.

في بعض الأحيان عند إنشائك للمحفظه قد تكون أسميتها بدون .bin . في هذه الحاله
سيكون إسم محفظتك بدون .bin في اﻵخر.

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked
  funds will now become unlocked.


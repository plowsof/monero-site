{% include disclaimer.html translated="no" translationOutdated="no" %}

### Prove payments

Se você enviou dinheiro para alguém, e essa pessoa precisa que você confirme
para ela que o pagamento foi feito, você precisa ser capaz de provar isso.

No Bitcoin, para comprovar uma transação, normalmente se envia o ID da
transação, que, ao ser pesquisado na blockchain, informará quais os
endereços de origem e de destino, assim como a quantia transacionada.

O Monero, entretanto, é uma moeda privada: essas informações não estão
disponíveis publicamente na blockchain. Em função disso, os passos
necessários para comprovar a transação são um pouco mais complexos.

Para provar para Charlie que ela fez um pagamento para Bob, Alice precisa
fornecer a Charlie três informações:

- the transaction ID, as is done in Bitcoin
- Bob's address, as is done with Bitcoin
- the transaction's key, which is new with Monero and other CryptoNote
  currencies

Quando a Alice faz uma transação, uma chave de uso único é gerada
automaticamente para cada transação.

#### CLI

Alice pode requisitar a chave da transação (tx_key) na monero-wallet-cli:

> get_tx_key TXID

A ID da transação deve ser inserida no lugar de ID_DA_TRANSAÇÃO. Se tudo der
certo, a chave da transação será exibida.

Note que isso só irá funcionar se a monero-wallet-cli estiver configurada
para salvar as chaves de transação. Para verificar, digite:

> set

Se o salvamento das chaves de transação (store-tx-info) estiver configurado
para 0 (desativado), então você terá que configurá-lo para 1 (ativado):

> set store-tx-info 1

#### GUI

Alice pode abrir sua monero-wallet-gui e ir para a página Histórico para ver
os detalhes da transação:

![History](/img/resources/user-guides/en/prove-payment/history.png)

Nesta página ela pode copiar o ID da transação e o endereço do Bob (endereço
de destino), clicando em cada um deles.  Então ela pode clicar em `P` para
obter uma prova de pagamento (chave da transação):

![Payment
proof](/img/resources/user-guides/en/prove-payment/payment-proof.png)


---

Agora Alice pode enviar para Charlie a ID da transação, a chave da transação
e o endereço do Bob.

Nota: se várias transações forem feitas, o procedimento precisa ser repetido
para cada transação.

### Check payments

Agora que Charlie recebeu essas três informações, ele pode verificar se a
Alice está falando a verdade: em uma blockchain atualizada,

#### CLI

Charlie digita na monero-wallet-cli:

> check_tx_key TXID TXKEY ADDRESS

As informações que a Alice forneceu devem ser substituídas nos campos
ID_DA_TRANSAÇÃO, CHAVE_DA_TRANSAÇÃO e ENDEREÇO. A monero-wallet-cli irá usar
a chave da transação para decodificar a transação, exibindo quantos XMR essa
transação enviou para o endereço.

Logicamente, Charlie deverá verificar com Bob se o endereço realmente é
dele, assim como seria necessário com Bitcoin.

#### GUI

Charlie will open his monero-wallet-gui and go to the Advanced > Prove/Check page to fill the Check section with the informations provided by Alice:

![Check
payment](/img/resources/user-guides/en/prove-payment/check-payment.png)

Ao clicar em Verificar, Charlie ficará sabendo quantos XMR essa transação
enviou para este endereço e quantas confirmações a transação já teve:

![Payment
checked](/img/resources/user-guides/en/prove-payment/payment-checked.png)


---

Logicamente, Charlie deverá verificar com Bob se o endereço realmente é
dele, assim como seria necessário com Bitcoin.

Nota: se várias transações forem feitas, o procedimento precisa ser repetido
para cada transação.

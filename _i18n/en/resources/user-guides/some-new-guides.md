{% include disclaimer.html translated="no" translationOutdated="no" %}

## Steps:

1. Download and unzip the latest (GUI) version of I2P-zero: https://github.com/i2p-zero/i2p-zero/releases
2. Run I2P-zero by entering the i2p-zero unzipped directory and  typing: `router/bin/i2p-zero`
3. (optional) Find out your randomly assigned I2P port by looking at the `Help` tab shown below. 
![I2P-zero port](/img/resources/user-guides/en/some-new-guides/user_guide_5_rnd.png)    
For privacy reasons, do not disclose this port number to other people. Tell your firewall to forward traffic through to this port so that your I2P node is publicly reachable. If you have no ability to allow incoming connections, everything will still work, but your I2P node will not be helping the I2P network as much as it could.
4. Create a socks tunnel for outgoing I2P connections: `Tunnels -> Add` (port 8060)
![I2P-zero socks tunnel](/img/resources/user-guides/en/some-new-guides/user_guide_rnd_7.png)
5. Create a server tunnel for incoming I2P connections: `Tunnels -> Add` (port 8061)
![I2P-zero server tunnel](/img/resources/user-guides/en/some-new-guides/user_guide_rnd_8.png)
6. The `Server public address` is your new I2P address. To copy the entire address, right click, select all, then copy.
7. In the Monero GUI, go to `Settings -> Node` and click `Stop node`. Now paste the text below into the `Daemon startup flags` box: (replace `XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p` with your own I2P address that you copied in step 6)    

`
--tx-proxy i2p,127.0.0.1:8060 --anonymous-inbound XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p,127.0.0.1:8061
`    

8. If done correctly, it will look like the image below and you can now click `Start daemon`    
![Monero GUI daemon flags](/img/resources/user-guides/en/some-new-guides/user_guide_rnd_9.png)    

## Benefits 

- Remove associations between a particular txid and your IP address
- Contribute to the I2P network 
- ... ? highlight / then link to https://github.com/monero-project/monero/blob/master/docs/ANONYMITY_NETWORKS.md#privacy-limitations


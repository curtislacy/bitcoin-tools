Usage
=============

To Generate xprv and xpub keys, along with a set of HD addresses derived from each:

```
crispin:bitcoin-tools cmlacy$ npm install
crispin:bitcoin-tools cmlacy$ node ./generate-hd.js UseAStrongPasswordHereFromACryptographicallySecureSource 10
Base58 private key: xprv9s21ZrQH143K3ppjj531c14S1mjDCH5wyhUN8mHHrJ8K3RFt2Vp28gDNukoDJsu8crc4bXDSsavMhD6bPZKuyB8qcedDbsykyLtwS5TfzCp
Base58 public key:  xpub661MyMwAqRbcGJuCq6a1y91AZoZhbjooLvPxw9guQdfHvDb2a38GgUXrm19HZNDbSu3tQWpz1nCZyi8hwFwQc6SdPuTzBFdNb1rSGMWrxib

*** Here are your private keys and their corresponding addresses:
Key: L3xP3Mgvoc65yYycPU4HNLFvyfmTFToTawYVVe58Sh9zGRSGhVXT   Addr: 1CAfdwutKwB5GsdxivKSwnCodd6NATkL9R
Key: L5d52fwY4394dW1V4bJY8hq73Jv5EXY7S5rC3mjThQ3TYWa3cHxc   Addr: 1PDB9KxUmyYhXxACHBsRmMPrXDcYW1jGpA
Key: L4fMNSuTZ7jvPPBKiwhRC1sSJQ2MfSeUT4vz875aFhwmrmxNbmXB   Addr: 18tEsxexeYk84JBErCbhf6nvdvwoxhyP8b
Key: L2et2Xb5fJTGFocV44bg7VvuXe544dp5f5PurZV5EBiX4ct9Vrfp   Addr: 1G6bkL1CucaeqQWTnuvjJbN1RMQs6GnFog
Key: Kzfood1cYjfc9JLE8RcJ9177931J1iMDD9QaU1HSxZ7oa4EXG8Xh   Addr: 1CxiF36r9eNFxYbrwBQTDuxS2293qp6ny6
Key: L2bm2Te28311AJLtz1WHq3rJNrENYdCm7zJ7TPxsUE3hCyej7LH5   Addr: 1NU9QcBXNhxVcvATg6nopfyWmWNnpJddMU
Key: L5S772tBK7G4gU11qA5kqj4PMuW1Qhgdzg56utMt3imyufW5ZAb4   Addr: 13ZbLYpVzJ3yxP9NQssEvBExRWa6ckVbML
Key: Kz8m4Fdrn8zxpTq1PcoBszeXK2c5xZCVXWVatRY3uMgZJ2xqPJPM   Addr: 1LupS3y7qQogxx9etLrBRhR7SoADpjbhxF
Key: KzHRQpSe4QVfFWkoC9GBwu68kk6AuTbmpurQXnXnsetofsXFQ8pD   Addr: 1LwGCmGqfkfLV5eeFT4KRerRr1ZCEAfafF
Key: L1ZGHWTPd224b7LTPwod7ygmxmBHW7fbMeaASfDDfdFv6U28puWR   Addr: 13xKGLcmtsJ2YqJ6XabqcjX38KCyNqmYoq

*** Now, some derived addresses from the public key only (just to make sure they match):
Addr: 1CAfdwutKwB5GsdxivKSwnCodd6NATkL9R
Addr: 1PDB9KxUmyYhXxACHBsRmMPrXDcYW1jGpA
Addr: 18tEsxexeYk84JBErCbhf6nvdvwoxhyP8b
Addr: 1G6bkL1CucaeqQWTnuvjJbN1RMQs6GnFog
Addr: 1CxiF36r9eNFxYbrwBQTDuxS2293qp6ny6
Addr: 1NU9QcBXNhxVcvATg6nopfyWmWNnpJddMU
Addr: 13ZbLYpVzJ3yxP9NQssEvBExRWa6ckVbML
Addr: 1LupS3y7qQogxx9etLrBRhR7SoADpjbhxF
Addr: 1LwGCmGqfkfLV5eeFT4KRerRr1ZCEAfafF
Addr: 13xKGLcmtsJ2YqJ6XabqcjX38KCyNqmYoq
crispin:bitcoin-tools cmlacy$ 
```
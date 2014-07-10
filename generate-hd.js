var bitcoin = require( 'bitcoinjs-lib' );

if( process.argv.length < 3 )
	console.log( 'Usage: node generate-hd.js <seed string>' );
else
{
	var seedBuffer = new Buffer( process.argv[ 2 ] );
	var number = process.argv.length > 3 ? parseInt( process.argv[3] ) : 10;
	var hdWallet = bitcoin.HDNode.fromSeedBuffer( seedBuffer );

	console.log( 'Base58 private key: ' + hdWallet.toBase58( true ) );
	console.log( 'Base58 public key:  ' + hdWallet.toBase58( false ) );
	console.log();


	for( var number = 10; number <= 100000000; number *= 10 )
	{
		var startTime = new Date().getTime();
		console.log( '- Deriving private keys at depth ' + number );
		for( var i=1; i<=100; i++ )
		{
			var derivedPrivate = hdWallet.derive( number );
		}
		var endTime = new Date().getTime();
		console.log( 'Total time to calculate a private key at depth ' + number + ': ' + ( endTime - startTime )/100.0 + 'ms.' );


		startTime = new Date().getTime();
		var fromPub = bitcoin.HDNode.fromBase58( hdWallet.toBase58( false ) );
		console.log( '- Deriving public keys at depth ' + number );
		for( var i=1; i<=100; i++ )
		{
			var derived = fromPub.derive( number );
		}
		var endTime = new Date().getTime();
		console.log( 'Total time to calculate a public key at depth ' + number + ': ' + ( endTime - startTime )/100.0 + 'ms.' );
		
		console.log();

	}
}

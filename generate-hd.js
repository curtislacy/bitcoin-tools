var bitcoin = require( 'bitcoinjs-lib' );

if( process.argv.length < 3 )
	console.log( 'Usage: node generate-hd.js <seed string> [<number of keys to generate>]' );
else
{
	var seedBuffer = new Buffer( process.argv[ 2 ] );
	var number = process.argv.length > 3 ? parseInt( process.argv[3] ) : 10;
	var hdWallet = bitcoin.HDNode.fromSeedBuffer( seedBuffer );

	console.log( 'Base58 private key: ' + hdWallet.toBase58( true ) );
	console.log( 'Base58 public key:  ' + hdWallet.toBase58( false ) );
	console.log();

	var prvAddresses = {};
	var pubAddresses = {};
	var fromPub = bitcoin.HDNode.fromBase58( hdWallet.toBase58( false ) );

	for( var i=1; i<=number; i++ )
	{
		var derivedPrivate = hdWallet.derive( i );
		prvAddresses[ derivedPrivate.getAddress().toString() ] = true;
		if( pubAddresses[ derivedPrivate.getAddress().toString() ] )
			console.log( 'Repeated Address at: ' + i + ': ' + derivedPrivate.getAddress().toString() );

		var derived = fromPub.derive( i );
		pubAddresses[ derived.getAddress().toString() ] = true;

		if( derivedPrivate.getAddress().toString() != derived.getAddress().toString() )
			console.log( 'Addresses mismatch for ' + i + ': ' + derived.getAddress().toString() );


		if( i % 10000 == 0 )
			console.log( i );
	}
}

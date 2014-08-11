var bitcore = require( 'bitcore' );

for( var i=0; i<10; i++ )
{
	seed = bitcore.BIP39.mnemonic(bitcore.BIP39WordlistEn, 128);
	console.log( i + ': "' + seed + '"' );	
}

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember smile include clock bone gaze'; 
let testAccounts = [
"0x6e386708f1bfcfae252bc4d89ce278cff1298bb92c9695f9e0e32bae0fe151a5",
"0x2cabeafc9156d5ee91a84f60453a56d73b6ef5d9a01e38cad878bf46022cb2c1",
"0x0f7ef4f0d476c05709cf05a73967618fc1a61af886a0f5eb4728f589dac34e73",
"0x0a4c5e2ae81caf4b67669483413e81d05f0e87a7f9e9bb7f53fe6c51912dfa64",
"0x47c9d34da69dcce458793e9036999f0b9ee993a5b13f3e0fc662568a97ac0441",
"0x2df5c0fb7d14d72a3b00b0c0d849355194b697b7c12484946a4777ae2e57ef22",
"0x1f3746cbd81dd48c7eae7fd893389106d233bca195d71bc3d591043b6e4c9e77",
"0x926f7462f4e39c2f979dbec4f1ea4bfb33a92ee2d620543da6ecf5858afef97b",
"0xea8ab4fe9d9ff60add6d37b8c9af8ce2207ddf2897dc72eb2441aff8db850176",
"0x74cb7f5e296d557c4fb4a7f9e907c28d44f4a027bbf0d9917f23c5752ec961b4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



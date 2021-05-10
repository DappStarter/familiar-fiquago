require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain snake imitate prison flush that'; 
let testAccounts = [
"0xe3c7212cc1ea315faf3a5971c41469b13087ecbffb3f70afd74859cf4948460e",
"0xb82619b75488c19496b8dbb92266d30686f8816a6b93b4c109aadf96972fd5fb",
"0x4259fbd3eccd331660698858ddc8bc61a17674037e83b932d676e6bf62b93e48",
"0xd8bbf14b4eaf43b81ec44f4191d92b0885e31edab3ffc5d87a50dd05187888d4",
"0x77171c9f310fda5ac808e4a318661e45189f8b2f029e4ec3fb4526ca08a341dd",
"0x83ada2433058777fbcbea323e06bce77931eb0533e6426a193463f6129163439",
"0x1769bd950a2a239fdf3cd9fe4e43fc7b3fe1558d8d871ef359b00c80202f56f1",
"0xb36d92507f64f36fe254929e29332baf0d5e168d6d22970783c18a19ddc655fe",
"0xb68d36a9c542970ac06da68de5cde4746c5e5b5319ac165bf8f1b431264e9d8d",
"0xa1cb85708858d7f325b5997f828028c22e244ed4193b68e8e2308cf3c8583d50"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

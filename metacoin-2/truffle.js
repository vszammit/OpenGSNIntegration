// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require('truffle-hdwallet-provider')
var mnemonic = 'give cancel discover junk point despair woman piece cart typical void bench hub tenant winter'
/*
function readFile (name) {
  const fs = require('fs')
  // if (fs.existsSync(secretMnemonicFile)) {
  return fs.readFileSync('.secret-mnemonic.txt', { encoding: 'utf8' })
  // }
}
*/
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      skipDryRun: true,
      network_id: '*' // Match any network id
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://kovan.infura.io/v3/c3422181d0594697a38defe7706a1e5b')
      },
      skipDryRun: true,
      network_id: 42
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/c3422181d0594697a38defe7706a1e5b')
      },
      skipDryRun: true,
      network_id: 4
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/c3422181d0594697a38defe7706a1e5b')
      },
      network_id: 3,
      skipDryRun: true,
      gasLimit: 2.8e6
    },
    kotti: {
      provider: function () {
        const wallet = new HDWalletProvider(mnemonic, 'https://www.ethercluster.com/kotti')
        return wallet
      },
      skipDryRun: true,
      network_id: 6
    },
    ethereum_classic_mainnet: {
      provider: function () {
        const wallet = new HDWalletProvider(mnemonic, 'https://www.ethercluster.com/etc')
        return wallet
      },
      skipDryRun: true,
      network_id: 61
    }
  },
  compilers: {
    solc: {
      version: '0.8.6'
    }
  }
}

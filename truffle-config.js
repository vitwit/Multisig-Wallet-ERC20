var configs = require('./configs/config')

var privateKey = configs.wallet.privateKey
const infuraKey = configs.infuraKey

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, `https://rinkeby.infura.io/${infuraKey}`),
      network_id: 4,       // Ropsten's id
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
    },

    live: {
      provider: new HDWalletProvider(privateKey, `${configs.rpcNetwork.mainnet}${infuraKey}`),
      network_id: 1
    },
    ropsten: {
      provider: new HDWalletProvider(privateKey, `${configs.rpcNetwork.ropsten}${infuraKey}`),
      network_id: 3,
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false
    }
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.0"
    }
  }
}

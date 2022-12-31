/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: "goerli",
    networks: {
       goerli: {
        hardhat: {},
          url: 'https://eth-goerli.g.alchemy.com/v2/b6UPO44nOt2Ky1fqBJnuPhLUGKROYa9z',
          accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`]
       }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

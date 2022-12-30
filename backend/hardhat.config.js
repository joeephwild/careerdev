/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: "goerli",
    networks: {
       goerli: {
        hardhat: {},
          url: 'https://polygon-mumbai.infura.io/v3/98ce9bdb13f74397b89d7ff5eea50318',
          accounts: [`0x${process.env.PRIVATE_KEY}`]
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

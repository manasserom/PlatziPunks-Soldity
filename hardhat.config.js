require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const projectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia:{
      url: `https://sepolia.infura.io/v3/${projectId}`,
      accounts: [privateKey],     
    },
    // goerli:{
    //   url: `https://goerli.infura.io/v3/${projectId}`,
    //   accounts: [privateKey],     
    // }
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${projectId}`,
    //   accounts: [privateKey],
    // },
  },
};
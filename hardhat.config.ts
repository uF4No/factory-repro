import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@matterlabs/hardhat-zksync-solc';
import '@matterlabs/hardhat-zksync-deploy';

export default {
  solidity: {
    version: '0.7.1',
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  networks: {
    zkTestnet: {
      zksync: true,
      ethNetwork: 'goerli',
      url: 'https://zksync2-testnet.zksync.dev',
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
    },
  },
  zksolc: {
    version: '1.3.8',
    compilerSource: 'binary',
    compilerPath: '/usr/local/bin/zksolc',
  },
};

require("dotenv").config()
const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')

// Set Provider
const provider = new HDWalletProvider({
    privateKeys: [process.env.PRIVATE_KEY],
    providerOrUrl: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
})

const web3 = new Web3(provider)

// Set Transaction Variables
const NONCE = 0

const main = async () => {
    const [account] = await web3.eth.getAccounts()

    try {

        const tx = await web3.eth.sendTransaction({
            from: account,
            to: account,
            value: 0,
            nonce: NONCE,
        })

        console.log(`Transaction Completed\n`)
        console.log(`Transaction Hash: ${tx.transactionHash}`)

    } catch (error) {

        console.log(error)

    }
}

main()
require("dotenv").config()
const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')

// Set Provider
const provider = new HDWalletProvider({
    privateKeys: [process.env.PRIVATE_KEY],
    providerOrUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
})

const web3 = new Web3(provider)

// Set Transaction Variables
const NONCE = 0

const main = async () => {
    try {
        const [account] = await web3.eth.getAccounts()

        const limit = await web3.eth.estimateGas({
            from: account,
            to: account,
            value: web3.utils.toWei("0")
        })

        console.log(`Estimated Gas needed: ${limit}\n`)

        const txObject = {
            from: account,
            to: account,
            value: web3.utils.toWei("0"),
            gas: web3.utils.toHex(limit),
            nonce: NONCE,
            chainId: 1,
            type: 0x2
        }

        const tx = await web3.eth.sendTransaction(txObject)

        console.log(`Transaction Completed\n`)
        console.log(`Transaction Hash: ${tx.transactionHash}`)
    } catch (error) {
        console.log(error)
    }
}

main()
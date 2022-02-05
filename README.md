# Simple Pending Transaction Solver
The goal of the project is to help resolve pending transactions on the mainnet.

## Setting Up
### 1. Create .env file
Refer to the .env.example file, and create a .env file with the following parameters:

- **PRIVATE_KEY**: Private key of the account that has the stuck pending transaction
- **INFURA_API_KEY**

### 2. Edit transaction parameters inside of index.js
- **NONCE**: You'll want to use the same nonce of the stuck pending transaction, default is 0 

### 3. Run the script
`$ node index.js`
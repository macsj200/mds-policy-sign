const crypto = require('asymmetric-crypto')
const fs = require('fs')
const chalk = require('chalk')

// const keyPair = crypto.keyPair()
const keyPair = {
  secretKey: 'bF6D93oF4p+clbA1CTbSHy67LNjoFwUpWapj9eDYgHmVeCb6/6ZdRS7WJXqtnDLRhatPYdaAMojIq9PvSmJmOQ==',
  publicKey: 'lXgm+v+mXUUu1iV6rZwy0YWrT2HWgDKIyKvT70piZjk='
}

const sign = (policy) => {
  return crypto.sign(JSON.stringify(policy), keyPair.secretKey)
}

const verify = (policy, signature) => {
  return crypto.verify(JSON.stringify(policy), signature, keyPair.publicKey)
}

const { policies } = JSON.parse(fs.readFileSync(process.argv[3]))
let policySignatures

switch(process.argv[2]) {
  case 'sign':
    policySignatures = {}
    for (const policy of policies) {
      const { policy_id } = policy
      policySignatures[policy_id] = sign(policy)
    }
    fs.writeFileSync(process.argv[4], JSON.stringify(policySignatures))
    break
  case 'verify':
    policySignatures = JSON.parse(fs.readFileSync(process.argv[4]))

    let success = true
    for (const policy of policies) {
      const { policy_id } = policy
      if (!verify(policy, policySignatures[policy_id])) {
        console.log(chalk.red(`Policy ${chalk.blue(policy_id)} has an invalid signature...🤔`))
        success = false
      }
    }
    if (success) {
      console.log(chalk.green('Policies check out!'))
    } else {
      console.log(chalk.red('Policy verification failed'))
    }
    break
  default:
    console.error('Must specify "sign" or "verify"')
}
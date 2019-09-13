const crypto = require('asymmetric-crypto')
const fs = require('fs')

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
    // do stuff
    policySignatures = {}
    for (const policy of policies) {
      const { policy_id } = policy
      policySignatures[policy_id] = sign(policy)
    }
    fs.writeFileSync(process.argv[4], JSON.stringify(policySignatures))
    break
  case 'verify':
    // verify
    policySignatures = JSON.parse(fs.readFileSync(process.argv[4]))

    for (const policy of policies) {
      const { policy_id } = policy
      if (!verify(policy, policySignatures[policy_id])) {
        throw new Error('Invalid policy signature encountered')
      }
    }
    console.log('Policies check out!')
    break
  default:
    console.error('Must specify "sign" or "verify"')
}
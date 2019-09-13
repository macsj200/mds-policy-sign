const crypto = require('asymmetric-crypto')
const fs = require('fs')
const chalk = require('chalk')

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
Meteor.methods({
  sign(policiesText) {
    console.log('Signing')
    const { policies } = JSON.parse(policiesText)
    const policySignatures = {}
    for (const policy of policies) {
      const { policy_id } = policy
      policySignatures[policy_id] = sign(policy)
    }
    console.log(policySignatures)
    return policySignatures
  },
  verify(policiesText, policiesSignaturesText) {
    policies = JSON.parse(policiesText)
    policySignatures = JSON.parse(policiesSignaturesText)
    const messages = []

    let success = true
    for (const policy of policies) {
      const { policy_id } = policy
      if (!verify(policy, policySignatures[policy_id])) {
        messages.push(chalk.red(`Policy ${chalk.blue(policy_id)} has an invalid signature...🤔`))
        success = false
      }
    }
    if (success) {
      messages.push(chalk.green('Policies check out!'))
    } else {
      messages.push(chalk.red('Policy verification failed'))
    }
    return messages
  }
})
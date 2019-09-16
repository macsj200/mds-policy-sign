import crypto from 'asymmetric-crypto'

const { SECRET_KEY, PUBLIC_KEY } = process.env

const sign = (policy) => {
  return crypto.sign(JSON.stringify(policy), SECRET_KEY)
}

const verify = (policy, signature) => {
  return crypto.verify(JSON.stringify(policy), signature, PUBLIC_KEY)
}

export { sign, verify }
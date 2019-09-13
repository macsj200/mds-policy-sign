# MDS Policy Signing Tool
## About
This tool signs and verifies [Mobility Data Specification](https://github.com/CityOfLosAngeles/mobility-data-specification) policies using RSA public/private keys.
## Getting started
- Install node `v8.10.0` via `nvm`
- Clone this repo & `cd` in
- Run `npm install`
## Usage
### Sign
`node index.js sign ./sample-policies.json ./sample-signatures.json`
### Verify
`node index.js verify ./sample-policies.json ./sample-signatures.json`
## How it works
### Sign
We iterate over the `policies` array in a `policies.json` file. For each `policy`, we `JSON.stringify()` it and sign it with the private key.
Then, we map the `policy_id` to the signature.
### Verify
We iterate over the `policy_id`s in the `signatures.json` file. For each `policy_id`, we look up the corresponding `policy` in `policies.json`.
We then `JSON.stringify()` the policy and check it against the signature and public key.
## TODO
- DON'T HARDCODE KEYS IN SOURCE!
- Move to `CityOfLosAngeles` GitHub org
- Make CLI argument passing more robust
- Allow passing in keys via args or env vars
- Discuss key management/distribution infrastructure (via [Vault](https://www.vaultproject.io), 1Password, or maybe AWS KMS)
- Vet [asymmetric-crypto](https://www.npmjs.com/package/asymmetric-crypto) npm package
- Write tests
- Convert to TypeScript
- Determine what portion of the `policy` needs to be signed, the whole thing or just the set of `rules`?
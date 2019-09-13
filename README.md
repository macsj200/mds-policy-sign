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
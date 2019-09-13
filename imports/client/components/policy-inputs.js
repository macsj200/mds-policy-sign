import React, { useState } from 'react';
import InputField from './input-field';
import { Meteor } from 'meteor/meteor';
import { normalize, schema } from 'normalizr'

// Define a users schema
const policy = new schema.Entity('policies', undefined, {
  idAttribute: (entity, parent) => {
    return entity.policy_id
  }
});

const PolicyInputs = () => {
  const [publicKey, setPublicKey] = useState()
  const [privateKey, setPrivateKey] = useState()
  const [policies, setPolicies] = useState()
  const [signedPolicies, setSignedPolicies] = useState()
  const [parsedPolicies, setParsedPolicies] = useState()

  const handleSign = () => {
    Meteor.call('sign', policies, (err, res) => {
      const parsedPolicies = JSON.parse(policies)
      const normalizedData = normalize(parsedPolicies, { policies: [policy] });
      setParsedPolicies(normalizedData)
      setSignedPolicies(res)
    })
  }

  const handleVerify = () => {

  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '0.75rem' }}>
      <InputField fieldLabel="public key" setField={setPublicKey} />
      <InputField fieldLabel="private key" setField={setPrivateKey} />
      <InputField fieldLabel="policies" setField={setPolicies} />
      <InputField fieldLabel="signed policy" setField={setSignedPolicies} />
      {signedPolicies && <div style={{ marginTop: '0.75rem' }}>
        {Object.keys(signedPolicies).map(policyId => {
          return (
            <div key={policyId} style={{
              display: 'flex',
              marginBottom: '0.75rem',
              justifyContent: 'space-between'
            }}>
              <span
                style={{
                  width: '15rem', wordWrap: 'break-word',
                }}
              >{parsedPolicies.entities.policies[policyId].name}</span>
              <span
                style={{
                  width: '40rem', wordWrap: 'break-word',
                }}
              >{signedPolicies[policyId]}</span>
            </div>
          )
        })}
      </div>}
      <button
        style={{
          marginTop: '0.75rem'
        }}
        onClick={handleSign}
      >Sign</button>

      <button
        style={{
          marginTop: '0.75rem'
        }}
        onClick={handleVerify}
      >Verify</button>

    </div>
  )
}

export default PolicyInputs
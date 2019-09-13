import React from 'react';

const inputLabel = {
  fontSize: '1.5rem', fontWeight: 700, marginTop: '0.75rem',
  textTransform: 'capitalize',
  marginBottom: '0.375rem'
}

const InputField = ({ setField, fieldLabel }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', marginTop: '0.75rem' }}>
      <h2 style={inputLabel}>{fieldLabel}</h2>
      <input onChange={(e) => setField(e.target.value)} type="text" />
    </div>
  )
}

export default InputField
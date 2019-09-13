import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import PolicyInputs from '../imports/client/components/policy-inputs';

const App = () => {
  return (
    <div
      style={{
        padding: '0 10rem 2rem'
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', flexDirection: 'column',
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, marginTop: '0.75rem' }}>MDS Policy Signing Tool</h1>
      </div>
      <PolicyInputs />
    </div>
  )
}
 
Meteor.startup(() => {
  render(<App />, document.getElementById('react-root'));
});
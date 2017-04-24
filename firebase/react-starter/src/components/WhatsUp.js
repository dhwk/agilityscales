import React from 'react';
import TextField from 'material-ui/TextField';

const WhatsUpTextField = () => (
  <div style={{padding:'20px', fontSize:'large', display:'block', textAlign:'center'}}>
    <span>What's up?</span>
    <br />
    <TextField
      id='txtfd-whatsup'
      placeholder="Today I brought my team ice cream."
      multiLine={true}
      rows={3}
      rowsMax={20}
    />
  </div>
);

export default WhatsUpTextField;

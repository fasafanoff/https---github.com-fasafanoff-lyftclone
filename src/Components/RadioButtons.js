import React from 'react';
import RadioButton from './RadioButton';
import './RadioButtons.css'
const RadioButtons = () => {
    return (
      <div className="radiobuttons">
        <div style={{ flex:1}}>
          <RadioButton label="I have a car" name="hascar" checked/>
        </div>
            <div style={{ flex:1}}>
          <RadioButton label="I need a car" name="hascar" />
        </div>
      </div>
    );
}

export default RadioButtons;

import './Emails.css';
import React from 'react';
import { useState } from "react";

const Emails = () => {
  const placeholder = "  Your e-mail address";
  const [isRegistered, setIsRegistered] = useState(false);
  const [value, setValue] = useState('');

  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = () => {
    console.log(value.length);
    if (value.length > 0) {
      setIsRegistered(true);
    }
  }
  return (
    <div>
      {isRegistered ? <div className='thank-you'>Thank You</div> :
        <div>
          <forms>
            <input value={value} type="email" id='emailblock' placeholder={placeholder} onChange={handleValue} />
            <button onClick={handleSubmit} className="Submit-btn">Register Now</button>
          </forms>
        </div>}
    </div>
  );


}

export default Emails;
//https://bigfrontend.dev/react/phone-number-input

import React, { ChangeEvent, useState } from 'react';
export function PhoneNumberInput() {
  const [number, setNumber] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length >= 10) value = value.slice(0, 10);
    if (value.length > 6) value = `${value.slice(0, 6)}-${value.slice(6)}`;
    if (value.length > 3) value = `(${value.slice(0, 3)})${value.slice(3)}`;

    setNumber(value);
  };

  return (
    <>
      <input
        data-testid="phone-number-input"
        onChange={handleChange}
        value={number}
      />
    </>
  );
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  return <PhoneNumberInput />;
}

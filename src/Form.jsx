import React, { useState } from 'react';

const defaultState = {
  nickname: '',
  email: '',
  password: '',
};

const Form = () => {
  const [state, setState] = useState(defaultState);

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: post your data to api
  };

  const handleChange = fieldName => fieldValue => {
    setState({
      [fieldName]: fieldValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Enter your nickname"
        value={state.nickname}
        onChange={handleChange('nickname')}
      />
      <InputField
        label="Enter your email"
        value={state.email}
        onChange={handleChange('email')}
      />
      <InputField
        label="Enter your password"
        value={state.password}
        onChange={handleChange('password')}
      />
      <button>Submit</button>
    </form>
  );
};

const InputField = ({ label, value, onChange }) => (
  <label>
    {label}
    <input value={value} onChange={e => onChange(e.target.value)} />
  </label>
);

export default Form;

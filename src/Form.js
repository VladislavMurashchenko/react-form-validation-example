import React, { useState } from "react";

const defaultState = {
  name: "Vasya",
  surname: "Pupkin"
};

const defaultErrors = {
  name: "",
  surname: ""
};

const Form = () => {
  const [state, setState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultErrors);

  const validate = () => {
    const errors = {};
    const isValid = false;
    // some imperative validation code
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validate()) {
      // post data to server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state.name}
        onChange={e => setState({ ...state, name: e.target.value })}
      />
      <p>{errors.name}</p>
      <input
        value={state.surname}
        onChange={e => setState({ ...state, surname: e.target.value })}
      />
      <p>{errors.surname}</p>
      <button>Submit</button>
    </form>
  );
};

const validate = {
  // some code
};

const isValidateSucceed = () => {
  // some code
};

const Form2 = () => {
  const [state, setState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultErrors);

  const handleSubmit = () => {
    const errors = validate();

    if (isValidateSucceed(errors)) {
      // do some request
      return;
    }

    setErrors(errors);
  };

  const handleChange = createHandler(setState);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={state.name}
        onChange={handleChange("name")}
        error={errors.name}
      />
      <Input
        value={state.surname}
        onChange={handleChange("surname")}
        error={errors.surname}
      />
      <FormBasket
        basket={state.basket}
        onBasketChange={handleChange("basket")}
        basketErrors={errors.basket}
      />
      <button />
    </form>
  );
};

const FormBasket = ({
  basket,
  onBasketChange,
  basketErrors,
  onBasketError
}) => {
  const handleChange = createHandler(onBasketChange);

  return (
    <div>
      <Input
        budget={basket.budget}
        onChange={handleChange("budget")}
        error={basketErrors.surname}
      />
    </div>
  );
};

const Input = (value, onChange, error, onError) => {
  return (
    <div>
      <input value={value} handleChange={e => onChange(e.target.value)} />
      <p>{error}</p>
    </div>
  );
};

const createHandler = setState => fieldName => fieldValue => {
  setState({
    [fieldName]: fieldValue
  });
};

export default Form;

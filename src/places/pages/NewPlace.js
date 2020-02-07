import React from 'react';

import Input from 'shared/components/FormElements/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from 'shared/util/validators';

import {useForm} from 'shared/hooks/form-hook';

import Button from 'shared/components/FormElements/Button';

import './NewPlace.css';

const NewPlace = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    },
    address: {
      value: '',
      isValid: false,
    },
  });

  const submitHandler = event => {
    event.preventDefault();
    if (formState.isValid) {
      console.log(formState.inputs);
    }
  };

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(20)]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        type="text"
        rows="10"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
      <Button type="submit" onClick={submitHandler}>
        {' '}
        ADD PLACE{' '}
      </Button>
    </form>
  );
};

export default NewPlace;

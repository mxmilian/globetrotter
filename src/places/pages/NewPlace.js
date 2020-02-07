import React, { useCallback, useReducer } from 'react';

import Input from 'shared/components/FormElements/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from 'shared/util/validators';

import Button from 'shared/components/FormElements/Button';

import './NewPlace.css';

const INPUT_CHANGE = 'INPUT_CHANGE';

const formReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      let formIsValid = true;
      for (const inputID in state.inputs) {
        if (inputID === action.inputID) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputID].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputID]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

const NewPlace = () => {

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: INPUT_CHANGE, value: value, isValid: isValid, inputID: id });
  }, []);

  const submitHandler = event => {
    event.preventDefault();
    if(formState.isValid) {
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

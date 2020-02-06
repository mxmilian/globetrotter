import React, { useCallback, useReducer } from 'react';

import Input from 'shared/components/FormElements/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from 'shared/util/validators';

import './NewPlace.css';

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {
      console.log(id, value, isValid);
  }, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH(20)]}
        errorText="Please enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        type="text"
        rows="10"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Please enter a valid description"
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;

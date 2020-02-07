import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { DUMMY_PLACES } from 'places/pages/UserPlaces';
import Button from 'shared/components/FormElements/Button';
import Input from 'shared/components/FormElements/Input';
import { useForm } from 'shared/hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from 'shared/util/validators';

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeID = useParams().placeID;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeID);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true,
        setIsLoading(false),
    );
  }, [setFormData, identifiedPlace]);

  const submitHandler = event => {
    event.preventDefault();
    if (formState.isValid) {
      console.log(formState.inputs);
    }
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Place enter a valid title"
        onInput={inputHandler}
        initializeValue={formState.inputs.title.value}
        initializeValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        type="text"
        label="description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
        errorText="Place enter a valid description"
        onInput={inputHandler}
        initializeValue={formState.inputs.description.value}
        initializeValid={formState.inputs.description.isValid}
      />
      <Button>update</Button>
    </form>
  );
};

export default UpdatePlace;

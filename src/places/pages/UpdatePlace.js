import React from 'react';
import { useParams } from 'react-router-dom';
import { DUMMY_PLACES } from 'places/pages/UserPlaces';
import Button from 'shared/components/FormElements/Button';
import Input from 'shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from 'shared/util/validators';

const UpdatePlace = () => {
  const placeID = useParams().placeID;
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeID);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Place enter a valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        type="text"
        label="description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
        errorText="Place enter a valid description"
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button>update</Button>
    </form>
  );
};

export default UpdatePlace;

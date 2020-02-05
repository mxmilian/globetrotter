import React from 'react';
import { useParams } from 'react-router-dom';
import PlacesList from 'places/components/PlacesList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    imageURL:
      'data:image/jpeg;base64,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',
    title: 'Empire state building',
    description: 'This is empire state building',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    imageURL:
      'data:image/jpeg;base64,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',
    title: 'Empire state building',
    description: 'This is empire state building',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userID = useParams().userID;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userID);
  return <PlacesList items={loadedPlaces} />;
};

export default UserPlaces;

import React, { useState } from 'react';
import Button from 'shared/components/FormElements/Button';

import Card from 'shared/components/UIElements/Card';
import Modal from 'shared/components/UIElements/Modal';
import Map from 'shared/components/UIElements/Map';
import './PlaceItem.css';

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const handlersEventMap = () => setShowMap(!showMap);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={handlersEventMap}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-action"
        footer={<Button onClick={handlersEventMap}>close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={handlersEventMap}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;

import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Button } from "../Button";
import { Modal } from "../Modal";

import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: -7.344868868143532, lng: -39.230212787016974 };
const DefaultZoom = 10;

export function AddressModal() {
  const { handleChangeShowMapModal } = useContext(GlobalContext);

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }
  return (
    <Modal changeModalVisible={handleChangeShowMapModal}>
      <div>
        <MapPicker
          defaultLocation={defaultLocation}
          className={styles.map}
          zoom={zoom}
          style={{ height: "25rem" }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
        />
      </div>
      <div className={styles.textContainer}>
        <div>
          <h4>Latitute:</h4>
          <p>{location.lat}</p>
        </div>
        <div>
          <h4>Longitute:</h4>
          <p>{location.lng}</p>
        </div>
        <div>
          <button
            onClick={handleResetLocation}
            className={styles.secondaryButton}
          >
            Reset Location
          </button>
        </div>
        <Button>Save Address</Button>
      </div>
    </Modal>
  );
}

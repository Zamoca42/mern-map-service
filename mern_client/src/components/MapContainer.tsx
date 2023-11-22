import React from "react";
import Map from "./common/map";
import { useSetAtom } from "jotai";
import { mapAtom } from "../atoms/map";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(map);
    naver.maps.Event.addListener(map, "click", () => {
    });
  };

  return <Map width="100%" height="100%" initMap={initMap} />;
}

export default MapContainer;

import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import MapContainer from "../../components/MapContainer";
import { useSetAtom } from "jotai";
import { infosAtom } from "../../atoms/info";
import { infos } from "../../data/info";
import MarkersContainer from "../../components/MarkersContainer";

function Home() {
  const setInfos = useSetAtom(infosAtom);

  useEffect(() => {
    if (infos) {
      setInfos(infos);
    }
  }, []);

  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default Home;

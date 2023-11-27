import { useAtom, useAtomValue } from "jotai";
import React, { useCallback } from "react";
import { mapAtom } from "../atoms/map";
import { Info } from "../types/info";
import { infosAtom, selectInfoAtom } from "../atoms/info";
import Marker from "./common/marker";
import InfoWindow from "./common/info-window";

interface MarkersContainerProps {
  type?: "home" | "upload";
}

function MarkersContainer({ type = "home" }: MarkersContainerProps) {
  const map = useAtomValue(mapAtom);
  const infos = useAtomValue(infosAtom);
  const [selectInfo, setSelectInfo] = useAtom(selectInfoAtom);

  const onSubmit = useCallback(() => {
    console.log("제출!!");
  }, []);

  if (!map || !infos) return null;

  return (
    <>
      {infos.map((info: Info) => (
        <Marker
          key={info.id}
          map={map}
          position={info.position}
          content={'<div class="marker" />'}
          onClick={() => {
            setSelectInfo(info);
            map.panTo(info.position);
          }}
        />
      ))}
      {selectInfo && (
        <Marker
          key={selectInfo.id}
          map={map}
          position={selectInfo.position}
          content={'<div class="marker select" />'}
          onClick={() => {
            setSelectInfo(null);
          }}
        />
      )}
      <InfoWindow
        map={map}
        selectInfo={selectInfo}
        onSubmit={type === "upload" ? onSubmit : undefined}
      />
    </>
  );
}

export default MarkersContainer;

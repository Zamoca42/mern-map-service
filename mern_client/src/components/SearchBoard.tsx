import React, { useCallback } from "react";
import styled from "styled-components";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { selectAtom } from "../atoms/search";
import { infosAtom, selectInfoAtom } from "../atoms/info";
import { Info } from "../types/info";
import ResultBox from "./ResultBox";

const StyledSearchBoard = styled.div`
  width: 100%;
  max-width: 436px;
  height: 100%;
  position: absolute;
  background: #ffffff;
  top: 0px;
  padding: 74px 16px 16px 16px;
`;

function SearchBoard() {
  const [select, setSelect] = useAtom(selectAtom);
  return <>{select && <StyledSearchBoard></StyledSearchBoard>}</>;
}

export default SearchBoard;

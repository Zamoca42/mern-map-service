import React, { useCallback, useState } from "react";
import ShadowBox from "./common/ShadowBox";
import Button from "./common/Button";
import Span from "./common/Span";
import Divider from "./common/Divider";
import Block from "./common/Block";
import { GoPlus } from "react-icons/go";
import { useAtom } from "jotai";
import { selectAtom } from "../atoms/search";
import { FiArrowLeft } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Input from "./common/Input";

interface NavigationProps {
  type?: "home" | "upload";
}

function Navigation({ type = "home" }: NavigationProps) {
  const [select, setSelect] = useAtom(selectAtom);

  const onChangeSelect = useCallback(() => {
    setSelect(!select);
  }, [select, setSelect]);

  return (
    <ShadowBox>
      {type === "upload" && select ? (
        <Button onClick={onChangeSelect}>
          <FiArrowLeft size={20} />
        </Button>
      ) : (
        <Button type="link" url="/">
          <Span size="title">Mern</Span>
        </Button>
      )}
      <Divider />
      {select ? (
        <Input />
      ) : (
        <Block
          height="28px"
          onClick={type === "upload" ? onChangeSelect : undefined}
        />
      )}
      {type === "upload" ? (
        <Button onClick={onChangeSelect}>
          <BiSearch size={20} />
        </Button>
      ) : (
        <Button type="link" url="/upload">
          <GoPlus size={20} />
        </Button>
      )}
    </ShadowBox>
  );
}

export default Navigation;

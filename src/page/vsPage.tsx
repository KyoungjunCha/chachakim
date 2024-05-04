import React from 'react';
import Menu from "../base/BaseMenu";
import Header from "../base/BaseHeader";
import { VSItem } from '../interface/VSItem'; // VSItem 인터페이스를 가져옵니다.
import { VS_LIST } from "./ListDummy"; // 이 배열은 VSItem[] 타입이라고 가정합니다.

const VsPage: React.FC = () => {
  const createList = (items: VSItem[]) => {
    return items.map((item, index) => (
      <div key={index}
        style={{
          width: "85vw",
          display: "flex",
          borderBottom: "1px solid",
          padding: "10px 0",
          textAlign: "center",
          margin: "0 2px"
        }}
      >
        <div style={{ width: "10vw" }}><label>{index + 1}</label></div>
        <div style={{ width: "25vw" }}><label>{item.vs이름}</label></div>
        <div style={{ width: "10vw" }}><label>{item.작성자}</label></div>
        <div style={{ width: "10vw" }}><label>{item.게시일}</label></div>
        <div style={{ width: "10vw" }}><label>{item.조회수}</label></div>
        <div style={{ width: "10vw" }}><label>{item.참가수}</label></div>
      </div>
    ));
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ fontSize: "25px", marginRight: "100px", position: "absolute", top: "140px", left: "250px" }}>
        {createList(VS_LIST)}
      </div>
    </>
  );
};

export default VsPage;

import React from 'react';
import Menu from "../base/BaseMenu";
import Header from "../base/BaseHeader";
import { SurveyItem } from '../interface/SurveyItem'; // SurveyItem 인터페이스를 가져옵니다.
import { SURVEY_LIST } from "./ListDummy"; // 이 배열은 SurveyItem[] 타입이라고 가정합니다.

const SurveyPage: React.FC = () => {
  const createList = (items: SurveyItem[]) => {
    return items.map((item, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          width: "85vw",
          bottom: "100px",
          left: "250px",
          borderBottom: "1px solid",
          margin: "0 2px",
          textAlign: "center"
        }}
      >
        <div style={{ width: "10vw" }}>
          <label>{index + 1}</label>
        </div>
        <div style={{ width: "25vw" }}>
          <label>{item.설문}</label>
        </div>
        <div style={{ width: "10vw" }}>
          <label>{item.작성자}</label>
        </div>
        <div style={{ width: "10vw" }}>
          <label>{item.게시일}</label>
        </div>
        <div style={{ width: "10vw" }}>
          <label>{item.조회수}</label>
        </div>
        <div style={{ width: "10vw" }}>
          <label>{item.참가수}</label>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ fontSize: "25px", marginTop: "100px", width: "85vw", left: "250px", position: "absolute" }}>
        {createList(SURVEY_LIST)}
      </div>
    </>
  );
};

export default SurveyPage;

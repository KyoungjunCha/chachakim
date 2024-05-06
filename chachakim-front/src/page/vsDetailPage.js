import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import PropType from "prop-types";
import {useLocation} from "react-router-dom"
import {VS_LIST} from "./ListDummy.js"

const VsDetailPage = () => {

  const location = useLocation();
  const key = location.state.id;
  const [vsList, setVSList] = React.useState(VS_LIST[key]);

  const renderBody = () => {
    console.log("vsList",vsList)
    return(
      <div style={{
        position: "absolute",
        marginTop: "100px",
        top: "0px",
        width: "85vw",
        left: "50vw",
        }}>
        <div style={{display : "flex"}}>
          <div style={{
            border : "1px solid", 
            width : "150px", 
            textAlign : "center"
            }}>VS이름</div>
          <div style={{
            border : "1px solid",
            width : "400px"
          }}
          >{vsList["vs이름"]}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderBody()}
      <Menu />
      <Header />
    </div>
  );
};

export default VsDetailPage;

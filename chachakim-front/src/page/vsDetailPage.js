import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import {useLocation} from "react-router-dom"
import {VS_LIST} from "./ListDummy.js"
import "./VsDetailPage.css"

const VsDetailPage = () => {

  const location = useLocation();
  const key = location.state.id;
  const [vsList, setVSList] = React.useState(VS_LIST[key]);
  const [isDisplay, setIsDisplay] = React.useState(false);
  const [frontPersent, setFrontPersent] = React.useState()
  const [backPersent, setBackPersent] = React.useState()

  const changeWidth = (e, place, width) => {
    if(place = "front"){
      setFrontPersent(e.target.value);
    }
  }

  const renderBody = () => {

    return(
      <div style={{
        position: "absolute",
        marginTop: "100px",
        top: "0px",
        width: "85vw",
        left: "30vw",
        }}>
        <div style={{display : "flex"}}>
          <div style={{
            border : "1px solid", 
            width : "150px", 
            textAlign : "center"
            }}>VS이름</div>
          <div style={{
            border : "1px solid",
            width : "400px",
            textAlign : "center"
          }}
          >{vsList["vs이름"]}
          </div>
          <div style={{
            border : "1px solid",
            width : "150px",
            textAlign : "center"
          }}>작성자
          </div>
          <div style={{
            border : "1px solid",
            width : "150px",
            textAlign : "center"
          }}>
            {vsList["작성자"]}
          </div>
          
        </div>
        <div style={{display : "flex"}}>
          <div style={{
              border : "1px solid",
              width : "150px",
              textAlign : "center"
            }}>
            게시일
          </div>
          <div style={{
            border : "1px solid",
            width : "400px",
            textAlign : "center"
          }}>
            {vsList["게시일"]}
          </div>
          <div style={{
            border : "1px solid",
            width : "150px",
            textAlign : "center"
          }}>
            조회수
          </div>
          <div style={{
            border : "1px solid",
            width : "150px",
            textAlign : "center"
          }}>
            {vsList["조회수"]}
          </div>
        </div>
        <div style={{position : "absolute",  top : "300px"}}>
          <div style={{display : "flex"}}>
            <button style={{
              border : "1px solid",
              width : "200px"
            }}
              onClick={()=>{setIsDisplay(true); }}
            >{vsList["vs이름"][0]}</button>
            <div style={{fontSize : "30px", margin : "0 210px"}}>vs</div>
            <button style={{
              border : "1px solid",
              width : "200px"
            }}
              onClick={()=>{setIsDisplay(true)}}
            >{vsList["vs이름"][5]}
            </button>
          </div>
        </div>
        <div style={{position : "absolute", top : "350px", left : "-10px"}}>
          {isDisplay?
            <div style={{display : "flex"}}>
              <div style={{backgroundColor : "skyblue", textAlign :"center", fontSize : ".8rem", fontWeight : "600", padding : ".5rem", borderRadius : ".5rem"}}> 
                <div style={{display : "flex", justifyContent : "space-between"}}>
                  <dvi>{vsList["vs이름"][0]}의 투표율</dvi>
                  <div>72%</div>
                </div>
                <div className="vsDetail_persent_bar">
                  <div className="vsDetail_persent_progress">
                  </div>
                </div>
              </div>
              <div style={{marginLeft : "435px", backgroundColor : "skyblue", textAlign :"center", fontSize : ".8rem", fontWeight : "600", padding : ".5rem", borderRadius : ".5rem"}}>
                <div style={{display : "flex", justifyContent : "space-between"}}>
                  <div>{vsList["vs이름"][5]}의 투표율</div>
                  <div>28%</div>
                </div>
                <div className="vsDetail_persent_bar">
                  <div className="vsDetail_persent_progress">
                  </div>
                </div>
              </div>
            </div>
          :null}
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

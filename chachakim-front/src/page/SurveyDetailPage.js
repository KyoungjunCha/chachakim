import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import {useLocation} from "react-router-dom"
import {SURVEY_LIST} from "./ListDummy.js"
import "./SurveyDetailPage.css"

const SurveyDetailPage = () => {

  const location = useLocation();
  const key = location.state.id;
  const [surveyList, setSurveyList] = React.useState(SURVEY_LIST[key]);
  const [isDisplay, setIsDisplay] = React.useState(false);

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
          >{surveyList["설문"]}
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
            {surveyList["작성자"]}
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
            {surveyList["게시일"]}
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
            {surveyList["조회수"]}
          </div>
        </div>
        {surveyRender()}
      </div>
    );
  };

  const surveyRender = () => {
    const mkSurveyList = () => {
      const list = [];
      const surveyQustionList = ["1번", "2번", "3번", "4번"]
      for (let i = 0; i < surveyQustionList.length; i++){
        console.log(surveyQustionList.length)
        if(i === (surveyQustionList.length - 1)){
          console.log(i)
          list.push(
            <div style={{boxSizing : "border-box"}}>
              <div style={{paddingLeft : "10px", cursor : "pointer"}}
                onClick={()=>{}}
              >{surveyQustionList[i]}</div>
            </div>
          )
        }else{
          console.log(i)
          list.push(
            <div style={{borderBottom : "1px solid", boxSizing : "border-box"}}>
              <div style={{paddingLeft : "10px", cursor : "pointer"}}>{surveyQustionList[i]}</div>
            </div>
          )
        }
      };
      return list;
    }
    

    return (
      <div style={{
        position : "absolute",
        top : "350px", 
        left : "60px", 
        border : "1px solid",
        width : "750px", 
        justifyContent : "center",
        borderRadius : ".5rem",
      }}>
        <div>
          {mkSurveyList()}
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderBody()}
      <Menu />
      <Header />
    </div>
  );
};

export default SurveyDetailPage;

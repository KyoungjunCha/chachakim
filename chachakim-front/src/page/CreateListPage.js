import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
<<<<<<< HEAD
import {Navigate, useLocation} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {BOARD_NAME} from "./ListDummy.js"
=======
import {useLocation} from "react-router-dom"
>>>>>>> gwanho


const CreateListPage = () => {

    const location = useLocation();
    const page_name = location.state.pageName;
<<<<<<< HEAD
    const [pageTitle, setPageTitle] = React.useState({vsPage : "VS", SurveyPage : "설문", NoticePage : "공지사항", EventPage : "Event"})
    const [listCount, setListCount] = React.useState(3)
    const navigate = useNavigate();

    const renderBody = () => {
        return(
            <div>
                <div style={{ 
                    position : "relative", 
                    // border : "1px solid", 
                    boxSizing : "border-box",
                    left : "400px", 
                    bottom : "300px", 
                    width : "1200px",
                    height : "25px",
                    fontSize : "18px"
                    }}>
                    <div>
                        {page_name === BOARD_NAME.VS?renderVsCreate():null}
                        {page_name === BOARD_NAME.SURVEY?renderSurveyCreate():null}
                        {page_name === BOARD_NAME.NOTICE?renderNoticeCreate():null}
                        {page_name === BOARD_NAME.EVENT?renderEventCreate():null}
                    </div>
                    <div style={{position : "relative", display : "flex", justifyContent : "space-around", top : "100px"}}>
                        <button style={{border : "1px solid", borderRadius : ".5rem"}}>저장</button>
                        <button style={{border : "1px solid", borderRadius : ".5rem"}}
                            onClick={()=>{navigate(`/${page_name}`)}}>취소</button>
                    </div>
=======
    console.log(page_name)
    const renderBody = () => {
        return(
            <div>
                <div>
                    <label>inside</label>
>>>>>>> gwanho
                </div>
            </div>
        )
    }
<<<<<<< HEAD

    const renderVsCreate = () => {
        return(
            <div style={{border : "1px solid"}}>
                <div style={{display : "flex", height : "40px"}}>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>{pageTitle[page_name]}제목</label>
                    <input type = "text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "1000px", fontSize : "18px"}}></input>
                </div>
                <div style={{display : "flex", height : "40px"}}>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>작성자</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "400px", fontSize : "18px"}}></input>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>작성일</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "400px", fontSize : "18px"}}></input>
                </div>
                <div style={{display : "flex", height : "100px"}}>
                    <div style={{width : "200px", border : "1px solid", textAlign : "center", boxSizing : "border-box", height : "100px", lineHeight : "100px"}}>
                        <label>설명</label>
                    </div>
                    <textarea  style={{border : "1px solid", boxSizing : "border-box", height : "100px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "1000px", fontSize : "18px", resize : "none"}}></textarea>
                </div>
                <div style={{display : "flex", height : "40px"}}>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>버튼 1 이름</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "400px", fontSize : "18px"}}></input>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>버튼 2 이름</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "400px", fontSize : "18px"}}></input>
                </div>
            </div>
        );  
    }

    const renderSurveyCreate = () => {
        return(
        <div>
            <div style={{border : "1px solid"}}>
                <div style={{display : "flex", height : "40px"}}>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>{pageTitle[page_name]}제목</label>
                    <input type = "text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "1000px", fontSize : "18px"}}></input>
                </div>
                <div style={{display : "flex", height : "40px"}}>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>작성자</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "400px", fontSize : "18px"}}></input>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>작성일</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "400px", fontSize : "18px"}}></input>
                </div>
                <div style={{display : "flex", height : "100px"}}>
                    <div style={{width : "200px", border : "1px solid", textAlign : "center", boxSizing : "border-box", height : "100px", lineHeight : "100px"}}>
                        <label>설명</label>
                    </div>
                    <textarea  style={{border : "1px solid", boxSizing : "border-box", height : "100px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "1000px", fontSize : "18px", resize : "none"}}></textarea>
                </div>
                <div>
                    {createSurveyList()}
                </div>
                <div style={{display : "flex", justifyContent : "center", border : "1px solid"}}>
                    <button
                        style={{margin : "30px", border : "1px solid"}}
                        onClick={()=>{setListCount(listCount + 1)}}>설문 추가</button>
                    <button 
                        style={{margin : "30px", border : "1px solid"}}
                        onClick={()=>{if(listCount === 3){return}else{setListCount(listCount - 1)}}}>설문 삭제</button>
                </div>
            </div>
        </div>
        );
    }

    const renderNoticeCreate = () => { 
        return(
        <div>
            <div style={{border : "1px solid"}}>
                <div style={{display : "flex", height : "40px"}}>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>{pageTitle[page_name]}제목</label>
                    <input type = "text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "1000px", fontSize : "18px"}}></input>
                </div>
                <div style={{display : "flex", height : "40px"}}>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>작성자</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "400px", fontSize : "18px"}}></input>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>작성일</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "400px", fontSize : "18px"}}></input>
                </div>
                <div style={{display : "flex", height : "200px"}}>
                    <div style={{width : "200px", border : "1px solid", textAlign : "center", boxSizing : "border-box", height : "200px", lineHeight : "200px"}}>
                        <label>설명</label>
                    </div>
                    <textarea  style={{border : "1px solid", boxSizing : "border-box", height : "200px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "1000px", fontSize : "18px", resize : "none"}}></textarea>
                </div>
            </div>
        </div>
        );
    }

    const renderEventCreate = () => {
        return(
        <div>
            <label>eventPage</label>
        </div>
        );
    }

    const createSurveyList = () => {
        const surveyList=[];
        for(let i = 1; i <= listCount; i++){
            surveyList.push(
                <div style={{display : "flex", height : "40px"}}>
                    <label style={{border : "1px solid", textAlign : "center", width : "200px", lineHeight : "40px", boxSizing : "border-box"}}>설문{i}</label>
                    <input type="text" style={{border : "1px solid", boxSizing : "border-box", height : "40px", paddingTop : "7px", padding : "6px 5px", outline : "none", width : "1000px", fontSize : "18px"}}></input>
                </div>
            )
        }
        return surveyList
    }



=======
>>>>>>> gwanho
    return (
    <div>
        {renderBody()}    
        <Menu />
        <Header />
      </div>
    );
}

export default CreateListPage;
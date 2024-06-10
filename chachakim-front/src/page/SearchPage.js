import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import {Navigate, useLocation} from "react-router-dom"
import { BOARD_NAME } from "./ListDummy.js";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const location = useLocation();
    const display = location.state.display;
    const SEARCH = "searchPage"
    const [displayPage, setDisplayPage] = React.useState(display);



    const renderBody = () =>{

        return(
            <div>
                {displayPage === SEARCH?defaultSearchPage():null}
                {displayPage === BOARD_NAME.VS?searchVSPage():null}
                {displayPage === BOARD_NAME.SURVEY?searchSurveyPage():null}
                {displayPage === BOARD_NAME.NOTICE?searchNoticePage():null}
                {displayPage === BOARD_NAME.EVENT?searchEventPage():null}
            </div>
        );
    }

    const defaultSearchPage = () => {
        return(
            <div style={{position : "absolute", left : "250px", fontSize : "20px", top : "100px"}}>
                <div style={{marginBottom : "20px"}}>
                    <div style={{borderBottom : "1px solid", width : "80vw", display : "flex", justifyContent : "space-between"}}>
                        <label style={{paddingLeft : "10px"}}>VS</label>
                        <button 
                            onClick={()=>{setDisplayPage(BOARD_NAME.VS)}}
                            style={{fontSize : "14px"}}>더보기</button>
                    </div>
                    <div style={{display : "grid", marginLeft : "10px"}}>
                        <label>검색결과</label>
                        <label>검색결과</label>
                    </div>
                </div>
                <div style={{marginBottom : "20px"}}>
                    <div style={{borderBottom : "1px solid", width : "80vw", display : "flex", justifyContent : "space-between"}}>
                        <label style={{paddingLeft : "10px"}}>설문</label>
                        <button 
                            onClick={()=>{setDisplayPage(BOARD_NAME.SURVEY)}}
                            style={{fontSize : "14px"}}>더보기</button>
                    </div>
                    <div style={{display : "grid", marginLeft : "10px"}}>
                        <label>검색결과</label>
                        <label>검색결과</label>
                        <label>검색결과</label>
                        <label>검색결과</label>
                        <label>검색결과</label>
                    </div>
                </div>
                <div style={{marginBottom : "20px"}}>
                    <div style={{borderBottom : "1px solid", width : "80vw", display : "flex", justifyContent : "space-between"}}>
                        <label >공지사항</label>
                        <button 
                            onClick={()=>{setDisplayPage(BOARD_NAME.NOTICE)}}
                            style={{fontSize : "14px"}}>더보기</button>
                    </div>
                    <div style={{display : "grid", marginLeft : "10px"}}>
                        <label>검색결과</label>
                    </div>
                </div>
                <div style={{marginBottom : "20px"}}>
                    <div style={{borderBottom : "1px solid", width : "80vw", display : "flex", justifyContent : "space-between"}}>
                        <label >Event</label>
                        <button 
                            onClick={()=>{setDisplayPage(BOARD_NAME.EVENT)}}
                            style={{fontSize : "14px"}}>더보기</button>
                    </div>
                    <div style={{display : "grid", marginLeft : "10px"}}>
                        <label>검색결과</label>
                    </div>
                </div>
            </div>
        );
    }

    const searchVSPage = () => {
        return(
            <div style={{position : "absolute", left : "250px", fontSize : "20px", top : "100px"}}>
                <label>vs</label>
            </div>
        );
    }

    const searchSurveyPage = () => {
        return(
            <div style={{position : "absolute", left : "250px", fontSize : "20px", top : "100px"}}>
                <label>survey</label>
            </div>
        );
    }

    const searchNoticePage = () => {
        return(
            <div style={{position : "absolute", left : "250px", fontSize : "20px", top : "100px"}}>
                <label>Notice</label>
            </div>
        );
    }

    const searchEventPage = () => {
        return(
            <div style={{position : "absolute", left : "250px", fontSize : "20px", top : "100px"}}>
                <label>event</label>
            </div>
        );
    }

    return(
        <>
        {renderBody()}
        <Menu />
        <Header />
      </>
    );
}

export default SearchPage;
import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import { BOARD_NAME } from "./ListDummy.js";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const [displayPage, setDisplayPage] = React.useState("searchPage");


    const renderBody = () =>{

        return(
            <div style={{border : "1px solid", position : "relative", bottom : "100", left : "250px"}}>
                <div>
                    <div>
                        <label>VS</label>
                    </div>
                    <div>
                        <label>list</label>
                    </div>
                </div>
            </div>
        );
    }

    const searchVSPage = () => {
        return(
            <div>
                <label>vs</label>
            </div>
        );
    }

    const searchSurveyPage = () => {
        return(
            <div>
                <label>survey</label>
            </div>
        );
    }

    const searchNoticePage = () => {
        return(
            <div>
                <label>Notice</label>
            </div>
        );
    }

    const searchEventPage = () => {
        return(
            <div>
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
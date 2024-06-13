import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import {useLocation} from "react-router-dom"


const CreateListPage = () => {

    const location = useLocation();
    const page_name = location.state.pageName;
    console.log(page_name)
    const renderBody = () => {
        return(
            <div>
                <div>
                    <label>inside</label>
                </div>
            </div>
        )
    }
    return (
    <div>
        {renderBody()}    
        <Menu />
        <Header />
      </div>
    );
}

export default CreateListPage;
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./BaseHeader.css";

const Header = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = React.useState("");

  const renderBody = () => {
    return (
      <div className="BaseHeader-container">
        <label
          className="BaseHeader-Title"
          onClick={() => {
            navigate("/main");
          }}
        >
          설문조사 사이트
        </label>
        <div className="BaseHeader-search-container">
          <input 
            placeholder="검색" 
            className="BaseHeader-search-input"
            value={searchData}
            onChange={(e)=>{setSearchData(e.target.value)}}></input>
          <button 
            onClick={()=>{navigate(`/search/${searchData}`)}}
            className="BaseHeader-search-button">검색</button>
        </div>
        <label className="BaseHeader-username">name</label>
        <label className="BaseHeader-signup" onClick={() => { navigate("/LoginPage");}} >Login</label> {/* 관호 작성  */}
        <label className="BaseHeader-login" onClick={() => { navigate("/SignupPage");}} >SignUp</label> {/* 관호 작성  */}
      </div>
    );
  };

  return renderBody();
};

export default Header;

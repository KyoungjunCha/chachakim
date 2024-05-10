import "./App.css";
import MAIN_PAGE from "./page/MainPage.js";
import VS_PAGE from "./page/VsPage.js";
import SURVEY_PAGE from "./page/SurveyPage.js";
import VS_PAGE_DETAIL from "./page/VsDetailPage.js";
import SURVEY_PAGE_DETAIL from "./page/SurveyDetailPage.js";
import SIGN_UP_PAGE from "./page/SingUpPage"; // 관호 작성
import LOGIN_PAGE from "./page/LoginPage"; // 관호 작성
import FIND_ID_PAGE from "./page/FindIdPage"; // 관호 작성

// import LoginPage from './pages/login/LoginPage_test';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MAIN_PAGE />} />
        <Route path="/vsPage" element={<VS_PAGE />} />
        <Route path="/surveyPage" element={<SURVEY_PAGE />} />
        <Route path="/vsPage/:page_id" element={<VS_PAGE_DETAIL />} />
        <Route path="/surveyPage/:page_id" element={<SURVEY_PAGE_DETAIL />} />
        <Route path="/SignupPage" element={<SIGN_UP_PAGE/>} /> {/*회원가입 페이지 이동 관호 작성*/}
        <Route path="/LoginPage" element={<LOGIN_PAGE/>} /> {/* 로그인 페이지 이동 관호 작성*/}
        <Route path="/FindIdPage" element={<FIND_ID_PAGE/>} /> {/* 아이디 찾기 페이지 이동 관호 작성*/}
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

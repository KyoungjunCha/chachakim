import "./App.css";
import MAIN_PAGE from "./page/MainPage.js";
import VS_PAGE from "./page/VsPage.js";
import SURVEY_PAGE from "./page/SurveyPage.js";
import VS_PAGE_DETAIL from "./page/VsDetailPage.js";
import SURVEY_PAGE_DETAIL from "./page/SurveyDetailPage.js";
import CREATE_LIST_PAGE from "./page/CreateListPage.js"
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
        <Route path="/main" element={<MAIN_PAGE />} /> {/*제일 처음 나오는 화면 (정현)*/}
        <Route path="/vsPage" element={<VS_PAGE />} /> {/*VS 페이지 (정현)*/}
        <Route path="/:page_name/registration" element={<CREATE_LIST_PAGE />} /> 
        <Route path="/vsPage/:page_id" element={<VS_PAGE_DETAIL />} /> {/*VS 내용 페이지 (정현)*/}
        <Route path="/surveyPage" element={<SURVEY_PAGE />} /> {/*설문 페이지 (정현)*/}
        <Route path="/surveyPage/:page_id" element={<SURVEY_PAGE_DETAIL />} /> {/*설문 내용 페이지 (정현)*/}
        <Route path="/SignupPage" element={<SIGN_UP_PAGE/>} /> {/*회원가입 페이지 이동 관호 작성*/}
        <Route path="/LoginPage" element={<LOGIN_PAGE/>} /> {/* 로그인 페이지 이동 관호 작성*/}
        <Route path="/FindIdPage" element={<FIND_ID_PAGE/>} /> {/* 아이디 찾기 페이지 이동 관호 작성*/}
        <Route path="*" element={<Navigate to="/main" replace />} />  {/*정의된 url 이외의 url을 입력 시 메인 페이지로 이동 (정현)*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

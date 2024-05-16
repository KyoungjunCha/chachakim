import "./App.css";
import MAIN_PAGE from "./page/MainPage.js";
import VS_PAGE from "./page/vsPage.js";
import SURVEY_PAGE from "./page/SurveyPage.js";
import VS_PAGE_DETAIL from "./page/vsDetailPage.js";
import SURVEY_PAGE_DETAIL from "./page/SurveyDetailPage.js";
import CREATE_LIST_PAGE from "./page/CreateListPage.js";
import SIGN_UP_PAGE from "./page/SingUpPage"; // 관호 작성
import LOGIN_PAGE from "./page/LoginPage"; // 관호 작성
import FIND_ID_PAGE from "./page/FindIdPage"; // 관호 작성
import FIND_PW_PAGE from "./page/FindPwPage"; // 관호 작성
import CHANGE_PW_PAGE from "./page/ChangePwPage"; // 관호 작성
import MY_PAGE from "./page/MyPage"; // 관호 작성
import MY_TAKE_PAGE from "./page/MyTakePage"; // 관호 작성
import NOTICE_PAGE from "./page/notice/NoticePage"; //차경준 공지사항 작성
import NOTICE_DETAIL from "./page/noticeDetail/noticeDetail"; //차경준 공지사항 디테일 작성

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
        <Route path="/:page_name/registration" element={<CREATE_LIST_PAGE />} />
        <Route path="/vsPage/:page_id" element={<VS_PAGE_DETAIL />} />
        <Route path="/surveyPage/:page_id" element={<SURVEY_PAGE_DETAIL />} />
        <Route path="/SignupPage" element={<SIGN_UP_PAGE />} />{" "}
        {/*회원가입 페이지 이동 관호 작성*/}
        <Route path="/LoginPage" element={<LOGIN_PAGE />} />{" "}
        {/* 로그인 페이지 이동 관호 작성*/}
        <Route path="/FindIdPage" element={<FIND_ID_PAGE />} />{" "}
        {/* 아이디 찾기 페이지 이동 관호 작성*/}
        <Route path="/FindPwPage" element={<FIND_PW_PAGE />} />{" "}
        {/* 비밀번호 찾기 페이지 이동 관호 작성*/}
        <Route path="/ChangePwPage" element={<CHANGE_PW_PAGE />} />{" "}
        {/* 비밀번호 변경 페이지 이동 관호 작성*/}
        <Route path="/MyPage" element={<MY_PAGE />} /> {/* 내정보 페이지 이동 관호 작성*/}
        <Route path="/MyTakePage" element={<MY_TAKE_PAGE />} />{" "}
        {/* 내가 참여한 게시물 리스트 페이지 이동 관호 작성*/}
        <Route path="*" element={<Navigate to="/main" replace />} />
        {/* 05.11 공지사항 페이지 author:차경준 */}
        <Route path="/NoticePage" element={<NOTICE_PAGE />} />
        {/* 05.13 공지사항 세부 페이지 author:차경준 */}
        <Route path="/NoticeDetail/:id" element={<NOTICE_DETAIL />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

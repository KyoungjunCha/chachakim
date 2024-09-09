import "./App.css";
import MAIN_PAGE from "./page/MainPage.js";
import SURVEY_PAGE from "./page/SurveyPage.js";
import SURVEY_PAGE_DETAIL from "./page/SurveyDetailPage.js";
import CREATE_LIST_PAGE from "./page/CreateListPage.js";
import SEARCH_PAGE from "./page/SearchPage"; //정현 검색 버튼 클릭 시, 표시 되는 페이지
import SIGN_UP_PAGE from "./page/SingUpPage"; // 관호 작성
import LOGIN_PAGE from "./page/LoginPage"; // 관호 작성
import FIND_ID_PAGE from "./page/FindIdPage"; // 관호 작성
import FIND_PW_PAGE from "./page/FindPwPage"; // 관호 작성
import CHANGE_PW_PAGE from "./page/ChangePwPage"; // 관호 작성
import MY_PAGE from "./page/MyPage"; // 관호 작성
import NOTICE_PAGE from "./page/notice/js/NoticePage"; //차경준 공지사항 작성
import NOTICE_DETAIL from "./page/notice/js/noticeDetail"; //차경준 공지사항 디테일 작성
import MY_TAKE_VS_PAGE from "./page/MyTakeVSPage"; // 관호 작성 및 수정(05.12)
import MY_TAKE_SURVEY_PAGE from "./page/MyTakeSurveyPage"; // 관호 작성(05.12)
import FIND_RESULT_ID_PAGE from "./page/FindResultIdPage"; // 관호 작성(05.12)
import MY_TAKE_VS_PAGE_TEST from "./page/MyTakeVSPageTest" // 관호 작성(06.14)
import NOTICE_CREATE_PAGE from "./page/notice/js/NoticeCreatePage"; // 관호 작성(07.04)
import NOTICE_UPDATE_PAGE from "./page/notice/js/NoticeUpdatePage"; // 관호 작성(07.04)
import EVENT_PAGE from "./page/event/js/EventPage"; //차관호 이벤트 작성(08.30)
import EVENT_DETAIL from "./page/event/js/eventDetail"; //차관호 이벤트 작성(08.30)
import EVENT_UPDATE_PAGE from "./page/event/js/EventUpdatePage"; // 차관호 이벤트 작성(08.30)
import EVENT_CREATE_PAGE from "./page/event/js/EventCreatePage"; //차관호 이벤트 작성(08.30)
import VS_PAGE from "./page/vs/js/VsPage";  //차관호 vs 작성(09.02)
import VS_DETAIL from "./page/vs/js/vsDetail"; //차관호 vs 작성(09.02)
import VS_CREATE_PAGE from "./page/vs/js/VsCreatePage"; //차관호 vs 작성(09.09)

// import LoginPage from './pages/login/LoginPage_test';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MAIN_PAGE />} />
        <Route path="/search/:searchData" element={<SEARCH_PAGE />} />
        <Route path="/surveyPage" element={<SURVEY_PAGE />} />
        <Route path="/:page_name/registration" element={<CREATE_LIST_PAGE />} />
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
        {/* 내가 참여한 게시물 리스트 페이지 이동 관호 작성*/}
        {/* 05.11 공지사항 페이지 author:차경준 */}
        <Route path="/NoticePage" element={<NOTICE_PAGE />} />
        {/* 05.13 공지사항 세부 페이지 author:차경준 */}
        <Route path="/NoticeDetail/:id" element={<NOTICE_DETAIL />} />
        <Route path="/SignupPage" element={<SIGN_UP_PAGE/>} /> {/*회원가입 페이지 이동 관호 작성*/}
        <Route path="/LoginPage" element={<LOGIN_PAGE/>} /> {/* 로그인 페이지 이동 관호 작성*/}
        <Route path="/FindIdPage" element={<FIND_ID_PAGE/>} /> {/* 아이디 찾기 페이지 이동 관호 작성*/}
        <Route path="/FindResultIdPage" element={<FIND_RESULT_ID_PAGE/>} /> {/* 아이디 찾기 결과 페이지 이동 관호 작성(05.12) */}
        <Route path="/FindPwPage" element={<FIND_PW_PAGE/>} /> {/* 비밀번호 찾기 페이지 이동 관호 작성*/}
        <Route path="/ChangePwPage" element={<CHANGE_PW_PAGE/>} /> {/* 비밀번호 변경 페이지 이동 관호 작성*/}
        <Route path="/MyPage" element={<MY_PAGE/>} /> {/* 내정보 페이지 이동 관호 작성*/}
        <Route path="/MyTakeVSPage" element={<MY_TAKE_VS_PAGE/>} /> {/* 내가 참여한 게시물 VS 페이지 이동 관호 작성*/}
        <Route path="/MyTakeSurveyPage" element={<MY_TAKE_SURVEY_PAGE/>} /> {/* 내가 참여한 설문 리스트 페이지 이동 관호 작성(05.12)*/}
        <Route path="/MyTakeVSPageTest" element={<MY_TAKE_VS_PAGE_TEST/>} /> {/* 내가 참여한 게시물 VS 페이지 테스트 작성 이동 관호 작성(05.24)*/}
        <Route path="/NoticeCreatePage" element={<NOTICE_CREATE_PAGE/>} /> {/* 공지사항 작성 페이지 관호 작성(07.04)*/}
        <Route path="/NoticeUpdatePage/:id" element={<NOTICE_UPDATE_PAGE/>} /> {/* 공지사항 수정 페이지 관호 작성(07.04)*/}
        <Route path="/EventPage" element={<EVENT_PAGE />} />{/*이벤트 리스트 페이지 관호 작성(08.30)*/}
        <Route path="/EventDetail/:id" element={<EVENT_DETAIL />} /> {/*이벤트 상세 페이지 관호 작성(08.30)*/}
        <Route path="/EventUpdatePage/:id" element={<EVENT_UPDATE_PAGE/>} /> {/* 이벤트 수정 페이지 관호 작성(08.30)*/}
        <Route path="/EventCreatePage" element={<EVENT_CREATE_PAGE/>} /> {/* 이벤트 작성 페이지 관호 작성(08.30)*/}
        <Route path="/VsPage" element={<VS_PAGE />} />  {/* VS 리스트 페이지 관호 작성(09.02)*/}
        <Route path="/vsDetail/:id" element={<VS_DETAIL />} />  {/* VS 상세보기 페이지 관호 작성(09.02)*/}
        <Route path="/VsCreatePage" element={<VS_CREATE_PAGE />} />  {/* VS 등록 페이지 관호 작성(09.09)*/}

        <Route path="*" element={<Navigate to="/main" replace />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

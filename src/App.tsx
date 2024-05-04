import "./App.css";
import MAIN_PAGE from "./page/MainPage";
import VS_PAGE from "./page/vsPage";  // .tsx 확장자 제거
import SURVEY_PAGE from "./page/SurveyPage";  // .tsx 확장자 제거
import VS_PAGE_DETAIL from "./page/vsDetailPage";  // .tsx 확장자 제거
import SURVEY_PAGE_DETAIL from "./page/SurveyDetailPage";  // .tsx 확장자 제거

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
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

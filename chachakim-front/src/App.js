import "./App.css";
import MAIN_PAGE from "./page/MainPage.js";
import VS_PAGE from "./page/vsPage.js";
import SURVEY_PAGE from "./page/SurveyPage.js";
import VS_PAGE_DETAIL from "./page/vsDetailPage.js";
import SURVEY_PAGE_DETAIL from "./page/SurveyDetailPage.js";

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

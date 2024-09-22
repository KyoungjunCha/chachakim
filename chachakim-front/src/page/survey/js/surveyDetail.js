import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from '../../../base/BaseMenu.js';
import Header from "../../../base/BaseHeader.js";
import { useParams, useNavigate } from "react-router-dom";
import '../css/surveyDetail.css'; // 새로운 CSS 파일을 추가

const SurveyDetail = () => {
    const { id } = useParams();
    const [survey, setSurvey] = useState(null); // survey 데이터 상태
    const navigate = useNavigate();

    useEffect(() => {
        // 서버에서 설문 데이터를 가져옴
        axios.get(`http://localhost:4000/surveys/${id}`)
            .then(response => {
                setSurvey(response.data);
                console.log("Fetched survey data:", response.data); // 디버깅용 로그
            })
            .catch(error => {
                console.error("Error fetching survey:", error);
            });
    }, [id]);

    const handleDelete = () => {
        // 설문 삭제 요청
        axios.delete(`http://localhost:4000/surveys/${id}`)
            .then(response => {
                console.log("Survey deleted successfully:", response.data);
                navigate("/surveyPage"); // 목록 페이지로 이동
            })
            .catch(error => {
                console.error("There was an error deleting the survey:", error);
            });
    };

    if (!survey) {
        // 데이터가 로딩 중일 때
        return <div>Loading...</div>;
    }

    return (
        <>
            <Menu /> {/* 메뉴 컴포넌트 */}
            <Header /> {/* 헤더 컴포넌트 */}

            <div className="survey-container">
                <div className="survey-card">
                    {/* 큰 타이틀과 설명 */}
                    <div className="survey-header">
                        <h1 className="survey-title">{survey.title}</h1> {/* 큰 타이틀 */}
                        <p className="survey-content">{survey.content}</p> {/* 작은 설명 */}
                    </div>

                    {/* 설문 메타 정보 */}
                    <div className="survey-meta">
                        <div>작성일: {survey.write_datetime}</div>
                        <div>종료일: {survey.endDate}</div>
                        <div>조회수: {survey.take_count}</div>
                    </div>

                    {/* 질문 및 선택지 출력 */}
                    {survey.questions && survey.questions.length > 0 ? (
                        <div className="survey-questions">
                            {survey.questions.map((question, index) => (
                                <div key={index} className="survey-question">
                                    <h3 className="question-text">{question.question_text}</h3> {/* 질문 텍스트 */}
                                    <div className="choices">
                                        {question.choices.map((choice, idx) => (
                                            <div key={idx} className="choice">
                                                <label>
                                                    <input type="radio" name={`question-${index}`} value={choice.choice_id} />
                                                    {choice.choice_text}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>질문과 선택지가 없습니다.</div>
                    )}

                    {/* 버튼들 */}
                    <div className="button-group">
                        <button className="back-button" onClick={() => navigate("/surveyPage")}>
                            목록으로
                        </button>
                        <button className="edit-button" onClick={() => navigate(`/SurveyUpdatePage/${id}`)}>
                            수정
                        </button>
                        <button className="delete-button" onClick={handleDelete}>
                            삭제
                        </button>
                        <button className="submit-button">
                            제출
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SurveyDetail;

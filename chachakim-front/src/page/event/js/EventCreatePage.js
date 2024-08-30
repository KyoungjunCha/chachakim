import React, { useState } from "react";
import Menu from "../../../base/BaseMenu.js";
import Header from "../../../base/BaseHeader.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/EventCreatePage.css'; // 스타일을 위한 CSS 파일

const EventCreatePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSave = () => {
        const event = { title, content };
        axios.post("http://localhost:4000/events", event)
            .then(response => {
                console.log("Event saved successfully:", response.data);
                navigate("/events");
            })
            .catch(error => {
                console.error("There was an error saving the event:", error);
            });
    };

    return (
        <div className="event-create-page">
            <Menu /> {/* 메뉴 컴포넌트 */}
            <Header /> {/* 헤더 컴포넌트 */}

            <div className="create-event-container">
                <h2>공지사항 작성</h2>
                <div className="form-section">
                    <FormRow label="공지사항 제목" inputProps={{ type: "text", value: title, onChange: e => setTitle(e.target.value) }} />
                    <FormRow label="내용" inputProps={{ type: "textarea", value: content, onChange: e => setContent(e.target.value), className: "textarea" }} />
                    <div className="button-group">
                        <button className="save-button" onClick={handleSave}>저장</button>
                        <button className="cancel-button" onClick={() => navigate("/events")}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FormRow = ({ label, inputProps }) => (
    <div className="form-row">
        <label className="form-label">{label}</label>
        {inputProps.type === "textarea" ? (
            <textarea className={`form-input ${inputProps.className}`} {...inputProps}></textarea>
        ) : (
            <input className="form-input" {...inputProps} />
        )}
    </div>
);

export default EventCreatePage;

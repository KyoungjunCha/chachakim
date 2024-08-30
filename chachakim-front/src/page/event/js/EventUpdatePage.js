import React, { useState, useEffect } from "react";
import Menu from "../../../base/BaseMenu.js";
import Header from "../../../base/BaseHeader.js";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/EventUpdatePage.css'; // 스타일을 위한 CSS 파일

const EventUpdatePage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/events/${id}`)
            .then(response => {
                const event = response.data;
                setTitle(event.title);
                setContent(event.content);
            })
            .catch(error => {
                console.error("Error fetching event:", error);
            });
    }, [id]);

    const handleSave = () => {
        const event = { title, content };
        axios.put(`http://localhost:4000/events/${id}`, event)
            .then(response => {
                console.log("Event updated successfully:", response.data);
                navigate("/eventPage");
            })
            .catch(error => {
                console.error("There was an error updating the event:", error);
            });
    };

    return (
        <div className="event-update-page">
            <Menu /> {/* 메뉴 컴포넌트 */}
            <Header /> {/* 헤더 컴포넌트 */}

            <div className="update-event-container">
                <h2>공지사항 수정</h2>
                <div className="form-section">
                    <FormRow label="공지사항 제목" inputProps={{ type: "text", value: title, onChange: e => setTitle(e.target.value) }} />
                    <FormRow label="내용" inputProps={{ type: "textarea", value: content, onChange: e => setContent(e.target.value), className: "textarea" }} />
                    <div className="button-group">
                        <button className="save-button" onClick={handleSave}>저장</button>
                        <button className="cancel-button" onClick={() => navigate("/eventPage")}>취소</button>
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

export default EventUpdatePage;

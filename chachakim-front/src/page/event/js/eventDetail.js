import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from '../../../base/BaseMenu.js';
import Header from "../../../base/BaseHeader.js";
import { useParams, useNavigate } from "react-router-dom";
import '../css/EventDetail.css'; // 새로운 CSS 파일을 추가

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/events/${id}`)
            .then(response => {
                setEvent(response.data);
            })
            .catch(error => {
                console.error("Error fetching event:", error);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/events/${id}`)
            .then(response => {
                console.log("Event deleted successfully:", response.data);
                navigate("/eventPage");
            })
            .catch(error => {
                console.error("There was an error deleting the event:", error);
            });
    };

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Menu /> {/* 메뉴 컴포넌트 */}
            <Header /> {/* 헤더 컴포넌트 */}

            <div className="event-container">
                <div className="event-card">
                    <div className="event-header">
                        <h3>{event.title}</h3>
                        <div className="event-meta">
                            <div>작성일: {event.write_datetime}</div>
                        </div>
                    </div>
                    <div className="event-content">
                        {event.content}
                    </div>
                </div>
                <div className="button-group">
                    <button className="back-button" onClick={() => navigate("/eventPage")}>
                        목록으로
                    </button>
                    <button className="edit-button" onClick={() => navigate(`/EventUpdatePage/${id}`)}>
                        수정
                    </button>
                    <button className="delete-button" onClick={handleDelete}>
                        삭제
                    </button>
                </div>
            </div>
        </>
    );
};

export default EventDetail;

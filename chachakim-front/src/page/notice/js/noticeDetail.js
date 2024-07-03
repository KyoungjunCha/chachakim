import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from '../../../base/BaseMenu.js';
import Header from "../../../base/BaseHeader.js";
import { useParams, useNavigate } from "react-router-dom";
import '../css/NoticeDetail.css'; // 새로운 CSS 파일을 추가

const NoticeDetail = () => {
    const { id } = useParams();
    const [notice, setNotice] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/notices/${id}`)
            .then(response => {
                setNotice(response.data);
            })
            .catch(error => {
                console.error("Error fetching notice:", error);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/notices/${id}`)
            .then(response => {
                console.log("Notice deleted successfully:", response.data);
                navigate("/noticePage");
            })
            .catch(error => {
                console.error("There was an error deleting the notice:", error);
            });
    };

    if (!notice) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Menu /> {/* 메뉴 컴포넌트 */}
            <Header /> {/* 헤더 컴포넌트 */}

            <div className="notice-container">
                <div className="notice-card">
                    <div className="notice-header">
                        <h3>{notice.title}</h3>
                        <div className="notice-meta">
                            <div>작성일: {notice.write_datetime}</div>
                            <div>조회수: {notice.view_Count}</div>
                        </div>
                    </div>
                    <div className="notice-content">
                        {notice.content}
                    </div>
                </div>
                <div className="button-group">
                    <button className="back-button" onClick={() => navigate("/noticePage")}>
                        목록으로
                    </button>
                    <button className="edit-button" onClick={() => navigate(`/NoticeUpdatePage/${id}`)}>
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

export default NoticeDetail;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from '../../../base/BaseMenu.js';
import Header from "../../../base/BaseHeader.js";
import { useParams, useNavigate } from "react-router-dom";
import '../css/vsDetail.css'; // 새로운 CSS 파일을 추가

const VsDetail = () => {
    const { id } = useParams();
    const [vs, setVs] = useState(null); // vs 데이터 상태
    const [selectedOption, setSelectedOption] = useState(null); // 선택된 옵션 상태
    const navigate = useNavigate();

    useEffect(() => {
        // vs 데이터를 서버에서 가져옴
        axios.get(`http://localhost:4000/vs/${id}`)
            .then(response => {
                setVs(response.data);
                console.log("Fetched vs data:", response.data); // 디버깅용 로그
            })
            .catch(error => {
                console.error("Error fetching vs:", error);
            });
    }, [id]);

    const handleDelete = () => {
        // vs 데이터를 삭제 요청
        axios.delete(`http://localhost:4000/vs/${id}`)
            .then(response => {
                console.log("Vs deleted successfully:", response.data);
                navigate("/vsPage"); // 목록 페이지로 이동
            })
            .catch(error => {
                console.error("There was an error deleting the vs:", error);
            });
    };

    // 이미지 클릭 핸들러
    const handleImageClick = (option) => {
        setSelectedOption(option);
        // 선택한 옵션을 서버에 전송
        axios.post(`http://localhost:4000/vs/${id}/select`, { selectedOption: option })
            .then(response => {
                console.log("Option selected:", response.data);
            })
            .catch(error => {
                console.error("Error selecting option:", error);
            });
    };

    if (!vs) {
        // 데이터가 로딩 중일 때
        return <div>Loading...</div>;
    }

    // vs.imageUrls가 유효한 배열인지, vs.imageName이 유효한 배열인지 확인
    const images = vs.imageUrls && Array.isArray(vs.imageUrls) && vs.imageUrls.length >= 2 ? vs.imageUrls : [];
    const imageNames = vs.imageName && Array.isArray(vs.imageName) && vs.imageName.length >= 2 ? vs.imageName : ["Option 1", "Option 2"];

    return (
        <>
            <Menu /> {/* 메뉴 컴포넌트 */}
            <Header /> {/* 헤더 컴포넌트 */}

            <div className="vs-container">
                <div className="vs-card">
                    <div className="vs-header">
                        <h3>{vs.title}</h3>
                        <div className="vs-meta">
                            <div>작성일: {vs.write_datetime}</div>
                            <div>종료일: {vs.endDate}</div>
                            <div>조회수: {vs.take_count}</div>
                        </div>
                    </div>

                    {/* 이미지 선택 섹션 */}
                    <div className="vs-images">
                        {images.length > 0 ? (
                            <>
                                <div className="vs-image-option" onClick={() => handleImageClick(1)}>
                                    <img src={`http://localhost:4000/${images[0]}`} alt="Option 1" />
                                    <div>{imageNames[0]}</div>
                                </div>
                                <div className="vs-image-option" onClick={() => handleImageClick(2)}>
                                    <img src={`http://localhost:4000/${images[1]}`} alt="Option 2" />
                                    <div>{imageNames[1]}</div>
                                </div>
                            </>
                        ) : (
                            <div>이미지를 불러올 수 없습니다.</div>
                        )}
                    </div>

                    {selectedOption && (
                        <div className="selected-option">
                            선택한 옵션: {selectedOption === 1 ? imageNames[0] : imageNames[1]}
                        </div>
                    )}
                </div>

                <div className="button-group">
                    <button className="back-button" onClick={() => navigate("/vsPage")}>
                        목록으로
                    </button>
                    <button className="edit-button" onClick={() => navigate(`/VsUpdatePage/${id}`)}>
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

export default VsDetail;

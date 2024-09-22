import React, { useState } from "react";
import Menu from "../../../base/BaseMenu.js";
import Header from "../../../base/BaseHeader.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/VsCreatePage.css'; // 스타일을 위한 CSS 파일

const VsCreatePage = () => {
    const [title, setTitle] = useState("");
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [endDate, setendDate] = useState(""); // 설문기한 상태 추가
    const navigate = useNavigate();

    const handleSave = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("option1Image", image1);
        formData.append("option2Image", image2);
        formData.append("endDate", endDate); // 설문기한 추가

        try {
            const response = await axios.post("http://localhost:4000/vs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("vs saved successfully:", response.data);
            navigate("/vs");
        } catch (error) {
            console.error("There was an error saving the vs:", error);
        }
    };

    return (
        <div className="vs-create-page">
            <Menu /> {/* 메뉴 컴포넌트 */}
            <Header /> {/* 헤더 컴포넌트 */}

            <div className="create-vs-container">
                <h2>VS 게시물 작성</h2>
                <div className="form-section">
                    <FormRow label="VS 제목" inputProps={{ type: "text", value: title, onChange: e => setTitle(e.target.value) }} />
                    
                    <FormRow label="Option 1 이미지" inputProps={{ type: "file", onChange: e => setImage1(e.target.files[0]), accept: "image/*" }} />
                    <FormRow label="Option 2 이미지" inputProps={{ type: "file", onChange: e => setImage2(e.target.files[0]), accept: "image/*" }} />

                    <FormRow 
                        label="설문기한" 
                        inputProps={{ 
                            type: "date", 
                            value: endDate, 
                            onChange: e => setendDate(e.target.value) 
                        }} 
                    />

                    <div className="button-group">
                        <button className="save-button" onClick={handleSave}>저장</button>
                        <button className="cancel-button" onClick={() => navigate("/vs")}>취소</button>
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

export default VsCreatePage;

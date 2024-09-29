import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "../../../base/BaseMenu.js";
import Header from "../../../base/BaseHeader.js";
import { BOARD_NAME } from "../../ListDummy.js";
import { useNavigate } from "react-router-dom";

const NoticePage = () => {
    const [list, setList] = useState([]);
    const [pageSize] = useState(10); // 한 페이지에 표시할 데이터 수
    const [pageNumber, setPageNumber] = useState(1); // 현재 페이지 번호
    const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
    const navigate = useNavigate();

    // 데이터 가져오기
    const fetchNotices = (pageNum) => {
        axios.get(`http://localhost:4000/notices?pageNumber=${pageNum}&pageSize=${pageSize}`)
            .then(response => {
                if (response.data.notices && Array.isArray(response.data.notices)) {
                    setList(response.data.notices);
                    setTotalPages(response.data.totalPages); // 전체 페이지 수 업데이트
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            })
            .catch(error => {
                console.error("Error fetching the notices:", error);
            });
    };

    useEffect(() => {
        fetchNotices(pageNumber);
    }, [pageNumber]);

    // 페이지 변경 핸들러
    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber);
    };

    // 리스트 생성 함수
    const createList = (item) => {
        return item.map((listItem, index) => (
            <div
                key={index}
                style={{
                    width: "85vw",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    bottom: "100px"
                }}
                onClick={() => navigate(`/noticeDetail/${listItem.notice_Id}`)}
            >
                <div style={{
                    width: "10vw",
                    textAlign: "center",
                    borderBottom: "1px solid",
                    margin: "0 2px",
                }}>
                    <label>{index + 1 + (pageNumber - 1) * pageSize}</label>
                </div>
                <div style={{
                    width: "25vw",
                    textAlign: "center",
                    borderBottom: "1px solid",
                    margin: "0 2px",
                }}>
                    <label>{listItem.title}</label>
                </div>
                <div style={{
                    width: "10vw",
                    textAlign: "center",
                    borderBottom: "1px solid",
                    margin: "0 2px",
                }}>
                    <label>{listItem.write_datetime}</label>
                </div>
                <div style={{
                    width: "10vw",
                    textAlign: "center",
                    borderBottom: "1px solid",
                    margin: "0 2px",
                }}>
                    <label>{listItem.view_Count}</label>
                </div>
            </div>
        ));
    };

    // 페이지네이션 버튼 생성 함수
    const renderPagination = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    style={{
                        margin: "0 5px",
                        padding: "5px",
                        backgroundColor: pageNumber === i ? "gray" : "white",
                        cursor: "pointer"
                    }}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    const renderBody = () => {
        return (
            <div style={{ fontSize: "25px", marginRight: "100px" }}>
                <div
                    style={{
                        position: "absolute",
                        marginTop: "30px",
                        top: "50px",
                        width: "85vw",
                        left: "400px",
                    }}
                >
                    <div style={{ width: "80px", fontSize: "10px", marginLeft: "50vw", marginBottom: "10px" }}>
                        <button style={{
                            border: "1px solid",
                            borderRadius: ".5rem"
                        }}
                            onClick={() => {
                                navigate(`/NoticeCreatePage`)
                            }}>게시글 작성</button>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                width: "10vw",
                                textAlign: "center",
                                borderBottom: "1px solid",
                                margin: "0 2px",
                            }}
                        >
                            <label>NO</label>
                        </div>
                        <div
                            style={{
                                width: "25vw",
                                textAlign: "center",
                                borderBottom: "1px solid",
                                margin: "0 2px",
                            }}
                        >
                            <label>공지이름</label>
                        </div>
                        <div
                            style={{
                                width: "10vw",
                                textAlign: "center",
                                borderBottom: "1px solid",
                                margin: "0 2px",
                            }}
                        >
                            <label>작성일</label>
                        </div>
                        <div
                            style={{
                                width: "10vw",
                                textAlign: "center",
                                borderBottom: "1px solid",
                                margin: "0 2px",
                            }}
                        >
                            <label>조회수</label>
                        </div>
                    </div>
                    {createList(list)}
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                        {renderPagination()}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {renderBody()}
            <Menu />
            <Header />
        </>
    );
};

export default NoticePage;

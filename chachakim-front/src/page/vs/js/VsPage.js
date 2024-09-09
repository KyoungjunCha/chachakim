import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "../../../base/BaseMenu.js";
import Header from "../../../base/BaseHeader.js";
import { BOARD_NAME } from "../../ListDummy.js";
import { useNavigate } from "react-router-dom";

const VsPage = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(BOARD_NAME["VS"]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/vs")
            .then(response => {
                if (Array.isArray(response.data)) {
                    setList(response.data);
                } else {
                    console.error("Expected an array but got:", response.data);
                }
            })
            .catch(error => {
                console.error("Error fetching the vss:", error);
            });
    }, []);

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
                onClick={() => navigate(`/vsDetail/${listItem.vs_Id}`)}
            >
                <div style={{
                    width: "10vw",
                    textAlign: "center",
                    borderBottom: "1px solid",
                    margin: "0 2px",
                }}>
                    <label>{index}</label>
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
                    <label>{listItem.endDate}</label>
                </div>
                <div style={{
                    width: "10vw",
                    textAlign: "center",
                    borderBottom: "1px solid",
                    margin: "0 2px",
                }}>
                    <label>{listItem.take_count}</label>
                </div>
            </div>
        ));
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
                                navigate(`/VsCreatePage`)
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
                            <label>VS</label>
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
                            <label>종료일</label>
                        </div>
                        <div
                            style={{
                                width: "10vw",
                                textAlign: "center",
                                borderBottom: "1px solid",
                                margin: "0 2px",
                            }}
                        >
                            <label>참여</label>
                        </div>
                    </div>
                    {createList(list)}
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

export default VsPage;

import React from "react";
import Menu from "../../base/BaseMenu.js";
import Header from "../../base/BaseHeader.js";
import { NOTICE_LIST } from "../ListDummy.js";
import { useParams } from "react-router-dom";

const NoticeDetail = () => {
    const { id } = useParams();
    const notice = NOTICE_LIST.find(notice => notice.notice_id.toString() === id);

    return (
        <>
            <Menu /> {/* 메뉴 컴포넌트 */}
            <Header /> {/* 헤더 컴포넌트 */}

            {/* 24.05.16 author:차경준 공지 기본 틀 */}
            <div style={{
                backgroundColor:"green",
                marginLeft:"12vw",
                width:"80vw",height:"40vw",
                marginTop:"2vw"}}>

                {/* 24.05.16 author:차경준 공지 틀 */}
                <div style={{ 
                    backgroundColor: "yellow",
                    display:"flex",
                    maxWidth: "80vw",
                    height:"40vw",
                    // flexDirection:"column",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    padding: '10px'
                    }}>
                    {/* 24.05.16 author:차경준 공지 이름 작성일 조회수 */}
                    <div>
                        <div style={{backgroundColor:"red"}}>
                            <h3>{notice.title}</h3>
                            <div style={{ width:"15vw", display: 'flex', justifyContent: 'space-between'}}>
                                <div>작성일: {notice.write_datetime}</div>
                                <div>조회수: {notice.view_count}</div>
                            </div>
                        </div>
                    </div>
                    {/* 24.05.16 author:차경준 공지내용부분 */}
                    <div style={{
                        backgroundColor:"blue",
                        marginTop:"5vw",
                        wordBreak:"break-all",
                        display:"absoulte",
                        width:"60vw",
                        // alignContent:"center",
                        marginLeft:"3vw",
                        marginTop:"1vw"
                        }}>
                        {notice.content}
                    </div>
                </div>
            </div>
            <button style={{marginLeft:"85vw",marginTop:"2vw"}}>
            목록으로
            </button>
        </>
    );
};

export default NoticeDetail;

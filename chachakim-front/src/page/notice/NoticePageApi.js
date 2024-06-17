import React, { useEffect, useState } from 'react';
import Menu from "../../base/BaseMenu.js";
import Header from "../../base/BaseHeader.js";
import { useNavigate } from "react-router-dom";
import { getNotices } from "../../api/noticeApi.js";

const NoticePageApi = () => {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getNotices()
      .then(response => {
        if (response && response.data) {
          setNotices(response.data);
        } else {
          throw new Error("No data received");
        }
      })
      .catch(error => {
        console.error('Error fetching notices:', error);
        setError(error);
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
        onClick={() => navigate(`/notices/${listItem.noticeId}`)}
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
          <label>{listItem.writeDatetime}</label>
        </div>
        <div style={{
          width: "10vw",
          textAlign: "center",
          borderBottom: "1px solid",
          margin: "0 2px",
        }}>
          <label>{listItem.viewCount}</label>
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
            top: "0px",
            width: "85vw",
            left: "400px",
          }}
        >
          <div style={{
            width: "85vw",
            marginTop: "30px",
            justifyContent: "flex-end"
          }}>
            <button style={{
              margin: "auto 0",
              padding: "5px",
              border: "1px solid",
              fontSize: "20px"
            }}>
              글작성
            </button>
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
        </div>
      </div>
    );
  };

  return (
    <>
      {renderBody()}
      {error && <div>Error fetching notices: {error.message}</div>}
      <div
        style={{
          position: "absolute",
          left: "400px",
          fontSize: "20px",
          top: "140px",
        }}
      >
        {createList(notices)}
      </div>
      <Menu />
      <Header />
    </>
  );
};

export default NoticePageApi;

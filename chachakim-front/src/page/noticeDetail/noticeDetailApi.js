import React, { useEffect, useState } from "react";
import Menu from "../../base/BaseMenu";
import Header from "../../base/BaseHeader.js";
import { useParams, useNavigate } from "react-router-dom";
import { getNoticeById } from "../../api/noticeApi.js";

const NoticeDetailApi = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getNoticeById(id)
      .then(response => {
        if (response && response.data) {
          setNotice(response.data);
        } else {
          throw new Error("No data received");
        }
      })
      .catch(error => {
        console.error(`Error fetching notice with id ${id}:`, error);
        setError(error);
      });
  }, [id]);

  if (error) return <div>Error fetching notice: {error.message}</div>;
  if (!notice) return <div>Loading...</div>;

  return (
    <>
      <Menu />
      <Header />
      <div style={{
        backgroundColor: "green",
        marginLeft: "12vw",
        width: "80vw", height: "40vw",
        marginTop: "2vw"
      }}>
        <div style={{
          backgroundColor: "yellow",
          display: "flex",
          maxWidth: "80vw",
          height: "40vw",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: "10px",
          padding: '10px'
        }}>
          <div>
            <div style={{ backgroundColor: "red" }}>
              <h3>{notice.title}</h3>
              <div style={{ width: "15vw", display: 'flex', justifyContent: 'space-between' }}>
                <div>작성일: {notice.writeDatetime}</div>
                <div>조회수: {notice.viewCount}</div>
              </div>
            </div>
          </div>
          <div style={{
            backgroundColor: "blue",
            marginTop: "5vw",
            wordBreak: "break-all",
            display: "absolute",
            width: "60vw",
            marginLeft: "3vw",
            marginTop: "1vw"
          }}>
            {notice.content}
          </div>
        </div>
      </div>
      <button style={{ marginLeft: "85vw", marginTop: "2vw" }} onClick={() => navigate('/notice')}>
        목록으로
      </button>
    </>
  );
};

export default NoticeDetailApi;

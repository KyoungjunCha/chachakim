import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import "./BaseComment.css";
import { useLocation } from "react-router-dom";
import { VS_LIST } from "../page/ListDummy";

const Comment = props => {
  const location = useLocation();
  const key = location.state.id;
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");

  //좋아요 기능 함수 05.10 15:00 author: 차경준
  const handleLike = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/commentLike/${comment.comment_id}`,
        {
          comment_id: comment.comment_id,
          user_id: user_id
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // 요청 헤더에 토큰 추가
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error adding like:", error);
    }
  };

  //싫어요 기능 함수 05.10 15:00 author: 차경준
  const handleDislike = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/commentDislike/${comment.comment_id}`,
        {
          comment_id: comment.comment_id,
          user_id: user_id
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // 요청 헤더에 토큰 추가
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error adding dislike:", error);
    }
  };

  //댓글 불러오기 기능 함수 05.10 15:00 author: 차경준
  const fetchComments = async () => {
    const response = await fetch("");
    const data = await response.json();
    setComment(data);
  };

  //댓글 입력 기능 함수 05.10 15:00 author: 차경준
  const handleSubmitComment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/comments`,
        { text: newComment, comment_id: comment.comment_id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      setNewComment(""); // 입력 필드 초기화
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderBody = () => {
    return (
      <div style={{ position: "relative" }} className="BaseComment-container">
        <input
          type="text"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          placeholder="댓글 입력하세요."
        />
        <button onClick={handleSubmitComment}>댓글 입력</button>

        {/* 댓글 불러오기 05.10 15:00 author:차경준 */}
        {comment.map(comment =>
          <div key={comment.comment_id}>
            <h3>
              {comment.userNickName}
            </h3>
            <div className="comment-author">
              {comment.imgData &&
                <img
                  style={{ margin: "10px", width: "150px", height: "100px" }}
                  src={`data:image/jpeg;base64,${comment.imgData}`}
                  alt="프로필 이미지"
                  className="profile-image"
                />}
            </div>
            <p>
              {comment.content}
            </p>
            <div className="comment-meta">
              <div className="action-buttons">
                <button onClick={handleLike}>
                  <span>
                    {comment.like_count}
                  </span>
                </button>
              </div>
              <div className="action-buttons">
                <button onClick={handleDislike}>
                  <span>
                    {comment.dislike_count}
                  </span>
                </button>
              </div>
              <div className="timestamp" style={{ marginLeft: "auto" }}>
                {comment.write_datetime}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return renderBody();
};

export default Comment;

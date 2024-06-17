import React from "react";
import PropTypes from "prop-types";
import "./BaseComment.css";
import { COMMENT_LIST } from "../page/ListDummy";

const Comment = () => {
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");

  //임시 유저정보 확인
  const [currentUser, setCurrentUser] = React.useState({ user_id: 1 });

  //interface 추천 좋아요 기능 함수 05.10 15:00 author: 차경준
  const handleLike = async () => {
    // try {
    //   const response = await axios.post(
    //     `http://localhost:5000/commentLike/${comment.comment_id}`,
    //     {
    //       comment_id: comment.comment_id,
    //       user_id: user_id
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}` // 요청 헤더에 토큰 추가
    //       }
    //     }
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error adding like:", error);
    // }
  };

  //interface 추천 싫어요 기능 함수 05.10 15:00 author: 차경준
  const handleDislike = async () => {
    // try {
    //   const response = await axios.post(
    //     `http://localhost:5000/commentDislike/${comment.comment_id}`,
    //     {
    //       comment_id: comment.comment_id,
    //       user_id: user_id
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}` // 요청 헤더에 토큰 추가
    //       }
    //     }
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error adding dislike:", error);
    // }
  };

  //interface 댓글 조회 댓글 불러오기 기능 함수 05.10 15:00 author: 차경준
  //05:11 03:47 임시로 지금은 주석처리함 이유는 후에 실제 aws 작성시 재사용
  const fetchComments = async () => {
    // const response = await fetch("");
    // const data = await response.json();
    // setComment(data);
  };

  //interface 댓글 입력 댓글 입력 기능 함수 05.10 15:00 author: 차경준
  const handleSubmitComment = async () => {
    // try {
    //   const response = await axios.post(
    //     `http://localhost:5000/comments`,
    //     { text: newComment, comment_id: comment.comment_id },
    //     { headers: { Authorization: `Bearer ${token}` } }
    //   );
    //   console.log(response.data);
    //   setNewComment(""); // 입력 필드 초기화
    // } catch (error) {
    //   console.error("Error submitting comment:", error);
    // }

    const newComments = [
      ...comments,
      {
        닉네임: "새 사용자",
        내용: newComment,
        게시일: new Date().toISOString(),
        좋아요: 0,
        싫어요: 0
      }
    ];
    setComments(newComments);
    setNewComment(""); // 입력 필드 초기화
  };

  //   useEffect(() => {
  //     fetchComments();
  //   }, []);

  // 임시 댓글 불러오기
  React.useEffect(() => {
    setComments(COMMENT_LIST);
  }, []);

  // interface 댓글 삭제 24.05.11 04:17 author:차경준 (해당 유저 댓글 삭제)
  const deleteComment = comment_id => {
    setComments(prevComments =>
      prevComments.filter(comment => comment.comment_id !== comment_id)
    );
  };

  //interface 댓글 수정 24.05.11 04:17 author:차경준 (해당 유저 댓글 수정)
  const updateComment = (comment_id, newContent) => {
    const updatedComments = comments.map(comment => {
      if (comment.comment_id === comment_id) {
        return { ...comment, content: newContent };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  //실제 페이지 구성
  const renderBody = () => {
    return (
      <div className="BaseComment-container">
        <input
          type="text"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          placeholder="댓글 입력하세요."
        />
        <button onClick={handleSubmitComment}>댓글 입력</button>

        {/* 댓글 불러오기 05.10 15:00 author:차경준 */}
        {/* {comment.map(comment =>
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
        )} */}

        {comments.map((comment, index) =>
          <div key={index} className="comment-item">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div>
                {comment.nickname}
              </div>
              <div>
                <button>좋아요</button>
                <button>싫어요</button>
              </div>
            </div>
            <p>
              {comment.content}
            </p>
            <div className="comment-meta">
              <span>
                좋아요: {comment.agree} 싫어요: {comment.disagree}
              </span>
              <span>
                {comment.comment_date}
              </span>
            </div>
            {comment.user_id === currentUser.user_id &&
              <div>
                <button
                  onClick={() => updateComment(comment.comment_id, "수정된 내용")}
                >
                  수정
                </button>
                <button onClick={() => deleteComment(comment.comment_id)}>
                  삭제
                </button>
              </div>}
          </div>
        )}
      </div>
    );
  };

  return renderBody();
};

export default Comment;

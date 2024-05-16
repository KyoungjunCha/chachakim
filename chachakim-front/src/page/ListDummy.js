const BOARD_NAME = {
  VS: "vsPage",
  SURVEY: "SurveyPage",
  NOTICE: "NoticePage",
  EVENT: "EventPage"
};

const VS_LIST = [
  {
    vs이름: "A vs B",
    작성자: "김정현",
    게시일: "2024.04.29",
    왼쪽: "49%",
    오른쪽: "51%",
    조회수: 24,
    참가수: 12
  },
  {
    vs이름: "C vs D",
    작성자: "차관호",
    게시일: "2024.04.22",
    왼쪽: "37%",
    오른쪽: "63%",
    조회수: 55,
    참가수: 35
  },
  {
    vs이름: "E vs F",
    작성자: "차경준",
    게시일: "2024.05.01",
    왼쪽: "70%",
    오른쪽: "30%",
    조회수: 85,
    참가수: 56
  },
  {
    vs이름: "G vs H",
    작성자: "정우진",
    게시일: "2024.04.26",
    왼쪽: "31%",
    오른쪽: "69%",
    조회수: 280,
    참가수: 62
  }
];

const SURVEY_LIST = [
  {
    설문: "한여름에 가장 먹고 싶은 음식은?",
    작성자: "김정현",
    게시일: "2024.04.29",
    조회수: 24,
    참가수: 12
  },
  {
    설문: "친구들과 여행가고 싶은 나라는?",
    작성자: "차관호",
    게시일: "2024.04.22",
    조회수: 55,
    참가수: 35
  },
  {
    설문: "취업하고 싶은 분야는?",
    작성자: "차경준",
    게시일: "2024.05.01",
    조회수: 85,
    참가수: 56
  },
  {
    설문: "쉬는 날 일어나는 시간은?",
    작성자: "정우진",
    게시일: "2024.04.26",
    조회수: 280,
    참가수: 62
  }
];

// 관호 작성 (정현이가 여기에 쓰라길래 한 번 써보고 싶었음) 죽어버려
const MY_TAKE_LIST = [
  {
    제목: "왜 노트북은 비싼걸까?",
    작성자: "관리자",
    게시일: "2024.05.01",
    조회수: 24,
    참가수: 12
  },
  {
    제목: "카리나 VS 윈터 [일단 나는 윈터]",
    작성자: "관리자",
    게시일: "2024.05.02",
    조회수: 55,
    참가수: 35
  },
  {
    제목: "노래 잘하는 법좀 알려주실분?",
    작성자: "관리자",
    게시일: "2024.05.03",
    조회수: 85,
    참가수: 56
  },
  {
    제목: "예비군 VS 혁명군",
    작성자: "관리자",
    게시일: "2024.05.04",
    조회수: 280,
    참가수: 62
  }
];

// 차경준 작성 댓글 임시 더미 데이터
const COMMENT_LIST = [
  {
    nickname: "리중딱김정현",
    content: "리버풀 요즘 개잘함",
    comment_date: "2024.05.10",
    agree: 10,
    disagree: 100
  },
  {
    nickname: "원불교차관호",
    content: "관세음보살",
    comment_date: "2024.05.10",
    agree: 1000,
    disagree: 10
  },
  {
    nickname: "꽃미남차경준",
    content: "굳",
    comment_date: "2024.05.10",
    agree: 1000,
    disagree: 10
  },
  {
    nickname: "나까무라우진",
    content: "곰방와",
    comment_date: "2024.05.10",
    agree: 1111,
    disagree: 11
  },
  {
    nickname: "슬슬귀찮음",
    content: "주악고악쥐이",
    comment_date: "2024.05.10",
    agree: 10,
    disagree: 77
  },
  {
    nickname: "테스트닉네임",
    content: "테스형~",
    comment_date: "2024.05.10",
    agree: 10,
    disagree: 10
  },
  {
    user_id: 1,
    comment_id: 1,
    nickname: "유저 확인용 닉네임1",
    content: "삭제 수정 테스트1",
    comment_date: "2024.05.10",
    agree: 10,
    disagree: 10
  },
  {
    user_id: 2,
    comment_id: 2,
    nickname: "유저 확인용 닉네임2",
    content: "삭제 수정 테스트2",
    comment_date: "2024.05.10",
    agree: 10,
    disagree: 10
  }
];

// 차경준 작성 댓글 임시 더미 데이터
const NOTICE_LIST = [
  {
    notice_id: 1,
    title: "공지1",
    write_datetime: "2024.05.10",
    content:
      "공지 테스트 내용1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
    view_count: 10
  },
  {
    notice_id: 2,
    title: "공지2",
    write_datetime: "2024.05.10",
    content: "공지 테스트 내용2",
    view_count: 10
  },
  {
    notice_id: 3,
    title: "공지3",
    write_datetime: "2024.05.10",
    content: "공지 테스트 내용3",
    view_count: 10
  },
  {
    notice_id: 4,
    title: "공지4",
    write_datetime: "2024.05.10",
    content: "공지 테스트 내용4",
    view_count: 10
  }
];

export {
  BOARD_NAME,
  VS_LIST,
  SURVEY_LIST,
  MY_TAKE_LIST,
  COMMENT_LIST,
  NOTICE_LIST
};

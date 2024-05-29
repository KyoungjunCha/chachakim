ALTER DATABASE chachakim CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci; -- 데이터베이스의 문자 집합을 UTF-8로 설정
CREATE TABLE user
(
  id             VARCHAR(100) NOT NULL COMMENT '사용자 아이디',
  email          VARCHAR(50)  NOT NULL COMMENT '사용자 이메일',
  password	     VARCHAR(50)	NOT NULL COMMENT '사용자 비밀번호',
  nickname       VARCHAR(20)  NOT NULL COMMENT '사용자 닉네임',
  tel_number     VARCHAR(15)  NOT NULL COMMENT '사용자 휴대전화번호',
  address        TEXT         NOT NULL COMMENT '사용자 주소',
  address_detail TEXT         NULL     COMMENT '사용자 상세 주소',
  profile_image  TEXT         NULL     COMMENT '사용자 프로필 사진',
  gender         VARCHAR(10)  NOT NULL COMMENT '성별',
  birth          DATE         NOT NULL COMMENT '생년월일',
  permission     INT          NOT NULL DEFAULT 1 COMMENT '일반사용자 1, 관리자 9',
  PRIMARY KEY (id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT '사용자 테이블';

CREATE TABLE vs
(
  vs_id          INT      NOT NULL AUTO_INCREMENT COMMENT 'vs 아이디',
  title          TEXT     NOT NULL COMMENT 'vs 제목',
  write_datetime DATETIME NOT NULL COMMENT 'vs 작성 날짜',
  comment_count  INT      NOT NULL DEFAULT 0 COMMENT 'vs 댓글 수',
  view_count     INT      NOT NULL DEFAULT 0 COMMENT 'vs 조회 수',
  favorite_count INT      NOT NULL DEFAULT 0 COMMENT 'vs 좋아요 수',
  endDate        DATE     NOT NULL COMMENT 'vs 투표 기한',
  choose         INT      NOT NULL DEFAULT 0 COMMENT '좌파 1, 우파 2',
  PRIMARY KEY (vs_id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT 'VS 테이블';

CREATE TABLE survey
(
  survey_id      INT      NOT NULL AUTO_INCREMENT COMMENT '설문 아이디',
  title          TEXT     NOT NULL COMMENT '설문 제목',
  write_datetime DATETIME NOT NULL COMMENT '설문작성 날짜',
  comment_count  INT      NOT NULL DEFAULT 0 COMMENT '설문 댓글 수',
  view_count     INT      NOT NULL DEFAULT 0 COMMENT '설문 조회 수',
  content        TEXT     NOT NULL COMMENT '설문 설명',
  endDate        DATE     NULL     COMMENT '설문 기한',
  favorite_count INT      NOT NULL DEFAULT 0 COMMENT '설문 좋아요 수',
  surveylist     JSON     NOT NULL COMMENT '설문의 질문',
  PRIMARY KEY (survey_id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT '설문조사';

CREATE TABLE event
(
  event_id       INT      NOT NULL AUTO_INCREMENT COMMENT '이벤트 id',
  title          TEXT     NOT NULL COMMENT '이벤트 제목',
  write_datetime DATETIME NOT NULL COMMENT '이벤트 작성 날짜',
  content        TEXT     NOT NULL COMMENT '이벤트 내용',
  PRIMARY KEY (event_id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT '이벤트';

CREATE TABLE notice
(
  notice_id     INT      NOT NULL AUTO_INCREMENT COMMENT '공지사항 id',
  title          TEXT     NOT NULL COMMENT '공지사항 제목',
  write_datetime DATETIME NOT NULL COMMENT '공지사항 작성 날짜',
  content        TEXT     NOT NULL COMMENT '공지사항 내용',
  view_count     INT      NOT NULL DEFAULT 0 COMMENT '공지사항 조회 수',
  PRIMARY KEY (notice_id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT '공지사항';

CREATE TABLE comment
(
  comment_id     INT          NOT NULL AUTO_INCREMENT COMMENT '댓글아이디',
  content        TEXT         NOT NULL COMMENT '댓글 내용',
  write_datetime DATETIME     NOT NULL COMMENT '작성 날짜 및 시간',
  vs_id          INT          NOT NULL COMMENT 'vs 아이디',
  id             VARCHAR(100) NOT NULL COMMENT '사용자 아이디',
  PRIMARY KEY (comment_id),
  FOREIGN KEY (vs_id) REFERENCES vs (vs_id),
  FOREIGN KEY (id) REFERENCES user (id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT '댓글 테이블';

CREATE TABLE favoritesurvey
(
  id        VARCHAR(100) NOT NULL COMMENT '사용자 아이디',
  survey_id INT          NOT NULL COMMENT '설문 아이디',
  FOREIGN KEY (survey_id) REFERENCES survey (survey_id),
  FOREIGN KEY (id) REFERENCES user (id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT '설문 좋아요 테이블';

CREATE TABLE favoritevs
(
  id        VARCHAR(100) NOT NULL COMMENT '사용자 아이디',
  vs_id     INT          NOT NULL COMMENT 'vs 아이디',
  FOREIGN KEY (vs_id) REFERENCES vs (vs_id),
  FOREIGN KEY (id) REFERENCES user (id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT 'vs 좋아요 테이블';

CREATE TABLE imagevs
(
  image     TEXT NOT NULL COMMENT '게시물 이미지 URL',
  vs_id     INT  NOT NULL COMMENT 'vs 아이디',
  FOREIGN KEY (vs_id) REFERENCES vs (vs_id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT 'vs 이미지 테이블';

CREATE TABLE takesurvey
(
  id           VARCHAR(100) NOT NULL COMMENT '사용자 아이디',
  survey_id    INT          NOT NULL COMMENT '설문 아이디',
  surveyanswer JSON         NOT NULL COMMENT '설문 답변',
  FOREIGN KEY (id) REFERENCES user (id),
  FOREIGN KEY (survey_id) REFERENCES survey (survey_id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT '참여한 설문조사';

CREATE TABLE takevs
(
  vs_id    INT          NOT NULL COMMENT 'vs 아이디',
  id       VARCHAR(100) NOT NULL COMMENT '사용자 아이디',
  vschoose INT          NOT NULL COMMENT '좌파 1, 우파 2',
  FOREIGN KEY (vs_id) REFERENCES vs (vs_id),
  FOREIGN KEY (id) REFERENCES user (id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT '참여한 VS 테이블';

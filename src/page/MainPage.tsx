import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from "../base/BaseMenu";
import Header from "../base/BaseHeader";

interface ListItem {
  vs이름?: string;
  설문?: string;
}

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const listDisplay = (board: ListItem[], listName: keyof ListItem) => {
    return board.map((listItem, index) => (
      <div key={index}>
        <li
          onClick={() => navigate(`/vsPage/${index}`)}
          style={{ cursor: 'pointer' }}
        >
          {listItem[listName]}
        </li>
      </div>
    ));
  };

  return (
    <div>
      <div style={{ fontSize: '25px' }}>
        <div style={{
          position: 'relative',
          bottom: '50px',
          width: '80vw',
          left: '200px',
        }}>
          <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            margin: '20px 0 40px 0',
          }}>
            <div style={{ width: '49%' }}>
              <div>
                <div style={{
                  border: '1px solid',
                  padding: '5px 0 5px 10px',
                  cursor: 'pointer',
                }} onClick={() => navigate("/vsPage")}>
                  VS
                </div>
                <div style={{ border: '1px solid', padding: '5px 0 5px 10px' }}>
                  {listDisplay([{ vs이름: 'VS1' }, { vs이름: 'VS2' }], 'vs이름')}
                </div>
              </div>
            </div>
            <div style={{ width: '49%' }}>
              <div>
                <div style={{
                  border: '1px solid',
                  padding: '5px 0 5px 10px',
                  cursor: 'pointer',
                }} onClick={() => navigate("/surveyPage")}>
                  설문
                </div>
                <div style={{ border: '1px solid', padding: '5px 0 5px 10px' }}>
                  {listDisplay([{ 설문: 'Survey1' }, { 설문: 'Survey2' }], '설문')}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div style={{ border: '1px solid', padding: '5px 0 5px 10px' }}>
                <label>Hot한 주제</label>
              </div>
              <div style={{ border: '1px solid', padding: '5px 0 5px 10px' }}>
                <li>name</li>
                <li>name</li>
                <li>name</li>
                <li>name</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu />
      <Header />
    </div>
  );
};

export default MainPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [newNotice, setNewNotice] = useState({ title: '', content: '' });
  const [editNotice, setEditNotice] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('/notices');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const fetchNotice = async (noticeId) => {
    try {
      const response = await axios.get(`/notices/${noticeId}`);
      setSelectedNotice(response.data);
    } catch (error) {
      console.error('Error fetching notice:', error);
    }
  };

  const createNotice = async () => {
    try {
      await axios.post('/notices', newNotice);
      setNewNotice({ title: '', content: '' });
      fetchNotices();
    } catch (error) {
      console.error('Error creating notice:', error);
    }
  };

  const updateNotice = async (noticeId) => {
    try {
      await axios.put(`/notices/${noticeId}`, editNotice);
      setEditNotice({ title: '', content: '' });
      fetchNotices();
    } catch (error) {
      console.error('Error updating notice:', error);
    }
  };

  const deleteNotice = async (noticeId) => {
    try {
      await axios.delete(`/notices/${noticeId}`);
      fetchNotices();
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

  return (
    <div>
      <h1>Notices</h1>
      <ul>
        {notices.map(notice => (
          <li key={notice.noticeId}>
            <h2>{notice.title}</h2>
            <button onClick={() => fetchNotice(notice.noticeId)}>View</button>
            <button onClick={() => deleteNotice(notice.noticeId)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedNotice && (
        <div>
          <h2>Notice Details</h2>
          <p>Title: {selectedNotice.title}</p>
          <p>Content: {selectedNotice.content}</p>
          <p>Write Datetime: {selectedNotice.writeDatetime}</p>
          <p>View Count: {selectedNotice.viewCount}</p>
        </div>
      )}
      <div>
        <h2>Create Notice</h2>
        <input
          type="text"
          placeholder="Title"
          value={newNotice.title}
          onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content"
          value={newNotice.content}
          onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
        />
        <button onClick={createNotice}>Create</button>
      </div>
      <div>
        <h2>Edit Notice</h2>
        <input
          type="text"
          placeholder="Title"
          value={editNotice.title}
          onChange={(e) => setEditNotice({ ...editNotice, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content"
          value={editNotice.content}
          onChange={(e) => setEditNotice({ ...editNotice, content: e.target.value })}
        />
        <button onClick={() => updateNotice(selectedNotice?.noticeId)}>Update</button>
      </div>
    </div>
  );
}

export default NoticeTest;

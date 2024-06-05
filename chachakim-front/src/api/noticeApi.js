import axios from "axios";

const API_URL = "http://localhost:4000/api/notices";

export const getNotices = () => {
  return axios.get(API_URL).catch(error => {
    console.error("There was an error fetching the notices!", error);
  });
};

export const getNoticeById = id => {
  return axios.get(`${API_URL}/${id}`).catch(error => {
    console.error(
      `There was an error fetching the notice with id ${id}!`,
      error
    );
  });
};

export const createNotice = notice => {
  return axios.post(API_URL, notice).catch(error => {
    console.error("There was an error creating the notice!", error);
  });
};

export const deleteNotice = id => {
  return axios.delete(`${API_URL}/${id}`).catch(error => {
    console.error(
      `There was an error deleting the notice with id ${id}!`,
      error
    );
  });
};

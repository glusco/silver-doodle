import axios from 'axios';

const api = axios.create({
  baseURL: 'https://question-board-git-main-gluscos-projects.vercel.app'
});

export default api; 
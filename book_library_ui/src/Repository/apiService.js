import axios from '../CustomAxios/axios';  
  
const BASE_URL = 'http://localhost:8080/api'; 
  
const ApiService = {  
  findAllAuthors: async () => {  
    const response = await axios.get(`${BASE_URL}/authors`);  
    return response.data;  
  },  
  
  findAllBooks: async () => {  
    const response = await axios.get(`${BASE_URL}/books`);  
    return response.data;  
  },  
  
  findBookById: async (id) => {  
    const response = await axios.get(`${BASE_URL}/books/${id}`);  
    return response.data;  
  },  
  
  saveBook: async (bookDto) => {  
    const response = await axios.post(`${BASE_URL}/books`, bookDto);  
    return response.data;  
  },  
  
  editBook: async (id, bookDto) => {  
    const response = await axios.put(`${BASE_URL}/books/${id}`, bookDto);  
    return response.data;  
  },  
  
  deleteBookById: async (id) => {  
    const response = await axios.delete(`${BASE_URL}/books/${id}`);  
    return response.status === 200;  
  },  
  
  markBookAsTaken: async (id) => {  
    const response = await axios.patch(`${BASE_URL}/books/${id}/take`);  
    return response.data;  
  },  
};  
  
export default ApiService;  

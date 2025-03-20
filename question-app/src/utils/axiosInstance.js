import axios from "axios";

// Create an Axios instance with a predefined base URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Base URL for API requests
});

// Add a request interceptor to include the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Retrieve token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
  }
  return config; // Return the modified config
});

// Export the Axios instance for use in API calls
export default axiosInstance;
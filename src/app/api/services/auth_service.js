import axiosInstance from "@/app/utils/axios_instance";

// Login function
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Propagate the error for handling in the component
  }
};

// Signup function
export const signupUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // Propagate the error for handling in the component
  }
};

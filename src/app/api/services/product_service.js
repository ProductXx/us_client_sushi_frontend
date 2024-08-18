
import axiosInstance from "@/utils/axios_instance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Ensure the error is propagated correctly
  }
};

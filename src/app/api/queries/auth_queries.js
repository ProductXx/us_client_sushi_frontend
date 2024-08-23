import { useMutation } from "@tanstack/react-query";
import { loginUser, signupUser } from "../services/auth_service";

export const useSignup = (options = {}) => {
  return useMutation({
    mutationFn: signupUser,
    ...options,
  });
};

export const useLogin = (options = {}) => {
  return useMutation({
    mutationFn: loginUser,
    ...options,
  });
};

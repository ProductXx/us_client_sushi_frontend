"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/app/api/queries/auth_queries";
import Link from "next/link";
import BarLoader from "@/app/utils/btn_loading";
import { IconHeartFilled } from "@tabler/icons-react";
import { useAuthStore } from "@/app/store/useAuthStore";
import { showToast } from "@/app/utils/toast"; // Ensure this import is correct

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const userLogin = useAuthStore((state) => state.userLogin); // Correctly retrieve userLogin
  const router = useRouter();

  const {
    mutate: login,
    isLoading,
    error: serverError,
  } = useLogin({
    onSuccess: (data) => {
      console.log(data);
      userLogin(data.data.token, data.data.data); // Ensure this matches the expected parameters in useAuthStore
      showToast.success("Login successful! Redirecting...");
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
      showToast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    },
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast.error("Please fill out all fields.");
      return;
    }
    login(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <>
      {/* Form for login */}
      <form
        className="w-full h-[100vh] flex flex-col gap-5 items-center py-10 p-5"
        onSubmit={handleSubmit}
      >
        <div className="hero-font text-secondary text-[30px] md:text-[100px] w-full self-start flex flex-wrap">
          Welcome Back! <IconHeartFilled className="text-red-500" /> Let's have
          a new experience
        </div>
        <div className="w-full flex flex-col gap-3 border p-3 rounded border-slate-300 shadow">
          <div className="flex flex-col gap-2">
            <label className="text-lg">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              required
            />
            {errors.email && (
              <p role="alert" style={{ color: "red" }}>
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              aria-invalid={errors.password ? "true" : "false"}
              required
            />
            {errors.password && (
              <p role="alert" style={{ color: "red" }}>
                {errors.password}
              </p>
            )}
          </div>
          <button className="gradient-btn" type="submit" disabled={isLoading}>
            {isLoading ? <BarLoader /> : "Login"}
          </button>
          <div>
            Don't have an account?{" "}
            <Link className="text-violet-700" href={"/auth/signup"}>
              Sign Up
            </Link>
          </div>
          {serverError && (
            <p role="alert" style={{ color: "red" }}>
              {serverError.response?.data?.message || serverError.message}
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;

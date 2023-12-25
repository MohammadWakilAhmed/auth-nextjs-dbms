"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignupPage() {
  const router = useRouter();
  
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loding, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      
    } catch (error) {
      
    }

  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && 
      user.username.length > 0 ) {
        setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />

      <label htmlFor="username">User Name</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus: outline-none focus:border-gray-600"
        type="text"
        value={user.username}
        id="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />

      <label htmlFor="email">Email Address</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus: outline-none focus:border-gray-600"
        type="text"
        value={user.email}
        id="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus: outline-none focus:border-gray-600"
        type="text"
        value={user.password}
        id="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        onClick={onSignup}
        className=" p-2 border border-gray-300 rounded-lg mb-4 
        focus: outline-none focus:border-gray-600 "
      >
        {buttonDisabled ? "No Signup" : "Signup"}
      </button>
      <Link href={"/login"}>Visit login page </Link>
    </div>
  );
}

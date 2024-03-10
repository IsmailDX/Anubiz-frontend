"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Home = () => {
  const [username, setUsername] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        let token = localStorage.getItem("token");
        let response;

        if (!token) {
          // If no token found, assume it's a Google user signing in
          response = await axios.get("http://localhost:3000/home/allItems", {
            withCredentials: true,
          });
        } else {
          // If token found, assume it's a normal user signing in
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          response = await axios.get(
            "http://localhost:3000/home/allItems",
            config
          );
          setUsername(response.data.username);
        }

        setUsername(response.data.user.name);
      } catch (error) {
        router.push("/errorPage");
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div>
      {username ? <p>Welcome, {username}</p> : <p>Loading username...</p>}
    </div>
  );
};

export default Home;

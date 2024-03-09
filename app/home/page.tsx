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
        const token = localStorage.getItem("token");

        if (!token) {
          router.push("/errorPage");
          throw new Error("No token found");
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          "http://localhost:3000/home/allItems",
          config
        );

        if (response.status === 200) {
          setUsername(response.data.username);
        }
      } catch (error) {
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

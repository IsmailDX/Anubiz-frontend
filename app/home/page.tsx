"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import NavbarOne from "@/components/Navbars/NavbarOne";
import NavbarTwo from "@/components/Navbars/NavbarTwo";

const Home = () => {
  const [username, setUsername] = useState(String);
  const router = useRouter();

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        let token = localStorage.getItem("token");
        let response;

        if (!token) {
          response = await axios.get("http://localhost:3000/home/allItems", {
            withCredentials: true,
          });
        } else {
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
    <div className="w-full h-[100dvh] overflow-hidden">
      <NavbarOne name={username} />
      <NavbarTwo />
    </div>
  );
};

export default Home;

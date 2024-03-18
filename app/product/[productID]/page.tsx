"use client";
import NavbarOne from "@/components/Navbars/NavbarOne";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const params = useParams<{ productID: any }>();
  const [username, setUsername] = useState(String);
  const router = useRouter();

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        let token = localStorage.getItem("token");
        let response;

        if (!token) {
          response = await axios.get("http://localhost:3000/home/allProducts", {
            withCredentials: true,
          });
        } else {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          response = await axios.get(
            "http://localhost:3000/home/allProducts",
            config
          );
          setUsername(response.data.username);
        }

        setUsername(response.data.user.name);
      } catch (error) {
        router.push("/errorPage");
        console.log("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div className="w-full h-[100dvh] overflow-x-hidden">
      <NavbarOne name={username} />
      hello products
      <p>{params.productID}</p>
    </div>
  );
};

export default ProductPage;

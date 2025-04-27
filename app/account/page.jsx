"use client";
import React, { useEffect, useState } from "react";

const Account = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Veri çekilirken hata oluştu:", error);
      });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute top-[444px] left-[-45px] w-[564px] h-[454px] bg-[#BF00FF] rounded-full filter blur-[500px]"></div>
      <div className="absolute top-[-88px] left-[391px] w-[564px] h-[454px] bg-[#007BFF] rounded-full filter blur-[500px]"></div>
      <div className="absolute top-[444px] left-[793px] w-[564px] h-[454px] bg-[#00FF77] rounded-full filter blur-[500px]"></div>

      <div className="flex items-center justify-center rounded-[11px] h-[450px] w-[374px] bg-[#4D85C999] z-10">
        {userInfo ? (
          <div className="text-center ">
            <h1 className="text-[18px] font-semibold">{userInfo.name}</h1>
            <p className="text-[18px] font-medium">{userInfo.bio}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Account;

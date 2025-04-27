"use client";
import { useRouter } from "next/navigation";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UploadPage from "./uploadWidget";

const InitAccount = () => {
  const [userName, setUserName] = React.useState("");
  const [name, setName] = React.useState("");
  const [instagramName, setInstagramName] = React.useState("");
  const [xName, setXName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [step, setStep] = React.useState(0);
  const account = useCurrentAccount();
  const router = useRouter();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInstagramNameChange = (e) => {
    setInstagramName(e.target.value);
  };

  const handleXNameChange = (e) => {
    setXName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleClick = () => {
    if (userName && name && instagramName && xName && bio) {
      const userData = {
        userName,
        name,
        instagramName,
        xName,
        bio,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      router.push("/account");
    }
  };

  useEffect(() => {
    if (account) {
      setStep(2);
    }
    if (!account) {
      setStep(0);
    }
  }, [account]);

  return (
    <div className="w-full h-full mx-auto flex justify-center items-center ">
      <div className="absolute pointer-events-none top-[444px] left-[-45px] w-[564px] h-[454px] bg-[#BF00FF] rounded-full filter blur-[500px] z-[0] "></div>
      <div className="absolute pointer-events-none top-[-88px] left-[391px] w-[564px] h-[454px] bg-[#007BFF] rounded-full filter blur-[500px] z-[0]"></div>
      <div className="absolute pointer-events-none top-[444px] left-[793px] w-[564px] h-[454px] bg-[#00FF77] rounded-full filter blur-[500px] z-[0]"></div>
      <div className="relative z-[10] flex flex-col justify-center items-center text-black max-w-2xl text-center">
        {step === 0 ? (
          <>
            <div
              style={{
                position: "absolute",
                top: "45px",
                left: "650px",
                width: "407px",
                height: "647px",
              }}
            >
              <img src="/images/suiphoto1.png" alt="Your Image" />
            </div>
            <h1 className="absolute top-[-80px] w-[583px] h-[68px] text-center text-black font-semibold text-[50px] ">
              P2P. SAHİP OL. KAZAN.
            </h1>

            <p className="text-3xl top-[310px] h-[98px] w- font-medium">
              Topluluğunuzdaki insanlardan aracısız destek al, yarattıklarına
              sahip ol ve sat!
            </p>
            <ConnectButton />
          </>
        ) : step === 2 ? (
          <AnimatePresence>
            <div
              key="suiphoto2"
              style={{
                position: "absolute",
                top: "172px",
                left: "-480px",
                width: "367px",
                height: "561px",
              }}
            >
              <img src="/images/suiphoto2.png" alt="Your Image" />
            </div>
            <div
              key="suiphoto3"
              style={{
                position: "absolute",
                top: "157px",
                left: "437px",
                width: "675px",
                height: "619px",
              }}
            >
              <img src="/images/suiphoto3.png" alt="Your Image" />
            </div>
            <motion.div
              key="connect-button"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <ConnectButton className="z-50 bg-white" />
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 mt-4"
              >
                <div className="flex flex-col items-center gap-4">
                  <UploadPage />
                  <div className="relative w-[294px] h-[36px]">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
                      suimo.com/
                    </span>
                    <input
                      className="w-full h-full pl-[108px] text-white bg-[#4169e1] placeholder-white rounded-full"
                      value={userName}
                      onChange={handleUserNameChange}
                      type="text"
                      placeholder="yourname"
                    />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="İsim"
                    className="bg-[#4169e1] placeholder-white text-white w-[294px] rounded-full pl-4 h-[36px] "
                  />
                  <input
                    type="text"
                    value={instagramName}
                    onChange={handleInstagramNameChange}
                    placeholder="Instagram"
                    className="bg-[#4169e1] placeholder-white w-[294px] text-white rounded-full pl-4 h-[36px] "
                  />
                  <input
                    type="text"
                    value={xName}
                    onChange={handleXNameChange}
                    placeholder="X"
                    className="bg-[#4169e1] placeholder-white w-[294px] text-white rounded-full pl-4 h-[36px] "
                  />
                  <textarea
                    value={bio}
                    onChange={handleBioChange}
                    placeholder="Bio"
                    className="bg-[#4169e1] placeholder-white w-[294px] rounded-[11px] p-4 h-[100px] text-white"
                  />
                  <button
                    onClick={handleClick}
                    className="w-[294px] h-[36px] bg-white text-black rounded-full shadow-[4px_4px_4px_0px_rgba(0,0,0,0.1)] relative top-[16px] cursor-pointer "
                    disabled={
                      !userName || !name || !instagramName || !xName || !bio
                    }
                  >
                    Kaydol
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  );
};

export default InitAccount;

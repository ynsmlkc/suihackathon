"use client";
import React, { useContext, useEffect, useState } from "react";
import { HOUSECAP_ID, PACKAGE_ID } from "../../consts";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiTransactionBlockResponse } from "@mysten/sui.js/client";
import { MIST_PER_SUI } from "@mysten/sui.js/utils";
import {
  ConnectButton,
  useCurrentAccount,
  useSignAndExecuteTransaction,
} from "@mysten/dapp-kit";

const Account = () => {
  const { mutate: execCreateGame } = useSignAndExecuteTransaction();
  const account = useCurrentAccount();

  const [guess, setGuess] = useState("");
  const [stake, setStake] = useState(0);

  const [userData, setUserData] = useState({
    userName: "",
    name: "",
    instagramName: "",
    xName: "",
    bio: "",
  });

  const [amount, setAmount] = useState("");

  // Butonlara tıklanıldığında input değerini değiştiren fonksiyon
  const handleButtonClick = (value) => {
    setAmount(value); // Buton tıklandığında değeri input'a yansıtıyoruz
  };

  // Kullanıcının input alanına yazdığında, state'i güncelliyoruz
  const handleInputChange = (e) => {
    setAmount(e.target.value); // Kullanıcının yazdığı değeri state'e set ediyoruz
  };

  const handleTransacrtion = () => {
    const txb = new TransactionBlock();

    // Player stake
    const [stakeCoin] = txb.splitCoins(txb.gas, [MIST_PER_SUI * BigInt(stake)]);

    // Create the game with CounterNFT
    txb.moveCall({
      target: `${PACKAGE_ID}::single_player_satoshi::start_game`,
      arguments: [
        txb.pure.string(guess),
        txb.object(""),
        stakeCoin,
        txb.object(""),
      ],
    });

    execCreateGame(
      {
        transaction: txb.serialize(),
      },
      {
        onError: (err) => {
          console.error("Transaction error:", err);
        },
        onSuccess: (result) => {
          return console.log("Transaction success:", result);
        },
      }
    );
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
    }

    // LocalStorage'dan fotoğraf URL'sini alma
    const savedImageUrl = localStorage.getItem("uploadedImageUrl");
    if (savedImageUrl) {
      setUploadedImageUrl(savedImageUrl);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute top-[444px] left-[-45px] w-[564px] h-[454px] bg-[#BF00FF] rounded-full filter blur-[500px]"></div>
      <div className="absolute top-[-88px] left-[391px] w-[564px] h-[454px] bg-[#007BFF] rounded-full filter blur-[500px]"></div>
      <div className="absolute top-[444px] left-[793px] w-[564px] h-[454px] bg-[#00FF77] rounded-full filter blur-[500px]"></div>

      <div className="flex flex-col justify-between items-center rounded-[11px] h-[480px] w-[374px] bg-[#4D85C999] z-10 pt-6 pb-6">
        {userData ? (
          <div className="text-left w-full px-6">
            <h1 className="text-[18px] font-semibold break-words">
              {userData.name}
            </h1>
            <p className="text-[18px] font-medium break-words mt-2">
              {userData.bio}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <input
          type="text"
          className="w-[240px] h-[42px] bg-[#72B0FA] rounded-full px-4 placeholder-white text-white absolute top-[435px] "
          placeholder="$"
          value={amount}
          onChange={handleInputChange}
        />
        <div className="absolute top-[490px] flex space-x-10  ">
          <button
            className="bg-[#4169E1] text-white rounded-full w-[50px] h-[28px] flex items-center justify-center"
            onClick={() => handleButtonClick("5")}
          >
            $5
          </button>

          <button
            className="bg-[#4169E1] text-white rounded-full w-[50px] h-[28px] flex items-center justify-center"
            onClick={() => handleButtonClick("10")}
          >
            $10
          </button>
          <button
            className="bg-[#4169E1] text-white rounded-full w-[50px] h-[28px] flex items-center justify-center"
            onClick={() => handleButtonClick("15")}
          >
            $15
          </button>
        </div>
        {account ? (
          <>
            {" "}
            <button
              onClick={() => handleTransacrtion()}
              className="w-[240px] h-[36px] bg-white text-black rounded-full shadow-[4px_4px_4px_0px_rgba(0,0,0,0.1)] absolute top-[530px] cursor-pointer "
            >
              Bağış
            </button>
            <ConnectButton />
          </>
        ) : (
          <>
            <ConnectButton />
          </>
        )}

        <div
          style={{
            position: "absolute",
            width: "152px",
            left: "770px",
            top: "585px",
          }}
        >
          <img src="/images/nft1.png" />
        </div>
        <div
          style={{
            position: "absolute",
            width: "135px",
            left: "590px",
            top: "580px",
          }}
        >
          <img src="/images/nft3.png" />
        </div>
        {uploadedImageUrl && (
          <div
            style={{
              position: "absolute",
              width: "152px",
              left: "770px",
              top: "585px",
            }}
          >
            <img src={uploadedImageUrl} alt="Uploaded" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;

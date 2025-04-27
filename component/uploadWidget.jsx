"use client";
import { useEffect, useState } from "react";

export default function UploadPage() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [isCloudinaryReady, setIsCloudinaryReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;

    script.onload = () => {
      console.log("Cloudinary script yüklendi!");
      setIsCloudinaryReady(true);
    };

    document.body.appendChild(script);

    // Cleanup (sayfa kapandığında scripti kaldırmak istersen)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleOpenWidget = () => {
    if (typeof window !== "undefined" && window.cloudinary) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "deexracfa", // kendi cloud name'in
          uploadPreset: "Sui_Hackathon", // kendi preset'in
        },
        (error, result) => {
          if (!error && result.event === "success") {
            console.log("Upload success:", result.info.secure_url);
            setUploadedImageUrl(result.info.secure_url);
          } else if (error) {
            console.error("Upload error:", error);
          }
        }
      );
      widget.open();
    } else {
      console.log("Cloudinary henüz hazır değil!");
    }
  };

  return (
    <div className="flex p-8 gap-8">
      <div>
        {/* Fotoğraf yüklendiğinde yükleme alanının içine yerleştiriliyor */}
        <button
          onClick={handleOpenWidget}
          disabled={!isCloudinaryReady}
          className="w-[152px] h-[152px] rounded-full bg-[#D9D9D9] flex justify-center items-center relative"
        >
          {uploadedImageUrl ? (
            <img
              src={uploadedImageUrl}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-white"></span>
          )}
        </button>
      </div>
    </div>
  );
}

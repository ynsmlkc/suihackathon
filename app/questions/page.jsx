const Questions = () => {
  return (
    <div className="">
      <div className="absolute pointer-events-none top-[444px] left-[-45px] w-[564px] h-[454px] bg-[#BF00FF] rounded-full filter blur-[500px] z-[0] "></div>
      <div className="absolute pointer-events-none top-[-88px] left-[391px] w-[564px] h-[454px] bg-[#007BFF] rounded-full filter blur-[500px] z-[0]"></div>
      <div className="absolute pointer-events-none top-[444px] left-[793px] w-[564px] h-[454px] bg-[#00FF77] rounded-full filter blur-[500px] z-[0]"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute flex justify-center items-center font-semibold text-[50px] top-[161px] ">
          Sıkça Sorulan Sorular
        </div>
        <div
          className="z-0"
          style={{
            position: "absolute",
            top: "245px",
            width: "187px",
            height: "647px",
          }}
        >
          <img src="/images/suiquestions.png" alt="Your Image" />
        </div>
        <div className="flex flex-col absolute top-[430px] gap-4">
          <button className="w-[584px] h-[55px] bg-[#4169E1] rounded-full z-10 text-white font-medium flex justify-between items-center px-6">
            <span className="text-[28px]">SuiMO nedir?</span>
            <span className="text-[30px]">+</span>
          </button>
          <button className="w-[584px] h-[55px] bg-[#4169E1] rounded-full z-10 text-white font-medium flex justify-between items-center px-6">
            <span className="text-[28px]">SuiMO nasıl çalışır?</span>
            <span className="text-[30px]">+</span>
          </button>
          <button className="w-[584px] h-[55px] bg-[#4169E1] rounded-full z-10 text-white font-medium flex justify-between items-center px-6">
            <span className="text-[28px]">Paramı nasıl alıcam?</span>
            <span className="text-[30px]">+</span>
          </button>
          <button className="w-[584px] h-[55px] bg-[#4169E1] rounded-full z-10 text-white font-medium flex justify-between items-center px-6">
            <span className="text-[28px]">
              Kazandığım paranın hepsi benim mi?
            </span>
            <span className="text-[30px]">+</span>
          </button>
          <button className="w-[584px] h-[55px] bg-[#4169E1] rounded-full z-10 text-white font-medium flex justify-between items-center px-6">
            <span className="text-[28px]">Web2 rakiplerinden farkı nedir?</span>
            <span className="text-[30px]">+</span>
          </button>
          <button className="w-[584px] h-[55px] bg-[#4169E1] rounded-full z-10 text-white font-medium flex justify-between items-center px-6">
            <span className="text-[28px]">SuiMO’yu neden kullanmalıyım?</span>
            <span className="text-[30px]">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;

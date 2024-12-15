import React, { useState, useEffect } from "react";
import fetchData from "../Utils/fetchData";

export default function ServiceTab() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData("https://fakestoreapi.com/products");
        const slicedData = response.slice(8,12);
        setData(slicedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAsync();
  }, []);

  const handleTitleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider relative w-[100%] h-[650px] my-[40px] bg-[#d1d1d1]  mt-[150px]">
      <div className="titles absolute top-0 left-0 w-[100%] h-[15%]
       flex justify-center p-[32px] gap-[50px]">
        {data.map((item, index) => (
          <div
            key={item.id}
            // className={`title ${activeIndex === index ? "active" : ""}`}
            className={`${
              activeIndex === index
                ? "cursor-pointer p-[10px 20px] border-b-2 border-[#ffa600] text-[#ffa600] font-bold"
                : " cursor-pointer p-[10px 20px] "
            }`}
            onClick={() => handleTitleClick(index)}
          >
            <p>
            {item.title.slice(0, 7)}
            </p>
          </div>
        ))}
      </div>

      <div className="photos absolute top-[90px] bg-purple-900 left-0 w-[100%] h-[85%] flex items-center justify-center">
        {data.map((item, index) => (
          <>
            <div className="w-[80%] bg-green-700 h-[450px] absolute overflow-hidden rounded-md">
              <div
                key={item.id}
                className={`photo ${activeIndex === index ? "active" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100%] h-[100%] object-fill z-20"
                />
              </div>
              <div
                key={item.id}
                className={`${
                  activeIndex === index
                    ? "absolute right-0 bg-white w-[50%] h-[100%]"
                    : " "
                }`}
                style={{
                  zIndex: "100",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "start",
                  paddingLeft: "25px",
                  gap: "20px",
                }}
              >
                {activeIndex === index && (
                  <>
                    <p className="text-[38px] text-slate-600">0{item.id}</p>
                    <p className="text-[38px]">{item.title.slice(0, 20)}.</p>
                    <p className="w-[500px]">
                      {item.description.slice(0, 155)}
                    </p>
                    <button className="uppercase bg-[#ffa600] py-[5px] px-[15px] rounded text-white
                     hover:text-[#ffa600] hover:bg-[#d4d4d4] transition-all font-serif">
                      get in touch
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

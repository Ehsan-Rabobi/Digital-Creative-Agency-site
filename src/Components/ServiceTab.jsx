import React, { useState, useEffect } from "react";
import fetchData from "../Utils/fetchData";

export default function ServiceTab() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData("https://fakestoreapi.com/products");
        const slicedData = response.slice(13, 17);
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
    <div className="slider relative w-[100%] h-[600px] my-[40px] bg-red-400 mt-[150px]">
      <div className="titles absolute top-0 left-0 w-[100%] h-[15%] bg-slate-300 flex justify-center p-[28px] gap-[70px]">
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
            {item.title.slice(0, 10)}
          </div>
        ))}
      </div>

      <div className="photos absolute top-[90px] left-0 w-[100%] h-[85%] flex items-center justify-center">
          {data.map((item, index) => (
            <>
        <div className="w-[80%] h-[450px] bg-blue-600 absolute">
              <div
                key={item.id}
                className={`photo ${activeIndex === index ? "active" : ""}`}
                // className={`${
                //   activeIndex === index
                //     ? "absolute top-0 left-0 w-[100%] h-[100%] block"
                //     : "absolute top-0 left-0 w-[100%] h-[100%] none"
                // }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100%] h-[100%] object-cover z-20"
                />
              </div>
              <div key={item.id} className={`${activeIndex === index ? 'absolute right-0 z-[100000]' : ''}`}>

              </div>
        </div>
            </>
          ))}
      </div>
    </div>
  );
}

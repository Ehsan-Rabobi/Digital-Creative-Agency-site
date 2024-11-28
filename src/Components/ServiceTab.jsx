import React, { useEffect, useRef, useState } from "react";
import fetchData from "../Utils/fetchData";

export default function ServiceTab() {

  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(data);
    })();
  }, []);
  
  const items = data?.map((e,index) => {
    
  })

  //   const itemList = ['Creativity' , 'Strategy' ,'Design' , 'Development']
  //   const listItem = itemList?.map((e,index)=>{
  //     return(
  //         <li className="uppercase active:scale-[0.9]" key={index}>{e}</li>
  //     )
  //   })
  //   console.log(listItem.props.children)

  return (
    <>
      <section className="w-[100%] h-[700px] bg-neutral-200 mt-[80px]">
        <ul
          className="w-[100%] h-[15%] bg-emerald-300 flex items-center justify-center gap-12 
        text-[14px] text-neutral-700"
        ></ul>
        <div className="w-[100%] h-[85%] bg-gray-800 flex items-center justify-center">
          <div className="w-[85%] h-[80%] bg-white flex rounded-[4px] overflow-hidden">
            <div className="w-[50%] h-[100%] bg-lime-200">image</div>
            <div className="w-[50%] h-[100%] bg-pink-300">content</div>
          </div>
        </div>
      </section>
    </>
  );
}

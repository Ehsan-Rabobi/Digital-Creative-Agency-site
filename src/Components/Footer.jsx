import React from "react";

export default function Footer() {
  return (
    <>
      <section className="w-[100%] min-h-[500px] bg-blue-600 md:flex-nowrap mt-24 flex p-[30px] flex-wrap justify-around">
        <div className="w-[650px] h-[100%] bg-red-400 flex flex-col items-center justify-center p-4 gap-2">
          <div className="flex w-[100%] gap-2 items-center">
            <div className="flex flex-col rotate-180 h-[120px] justify-center gap-3">
              <p className="rotate-90 mb-3 text-[#ffa600]">WHO</p>
              <p className="rotate-90 text-[#ffa600]">WE</p>
              <p className="rotate-90  text-[#ffa600]">ARE</p>
            </div>
            <div>
              <p className="text-[44px] text-[#222222]">Get</p>
              <p className="text-[44px] text-[#222222] flex gap-4">
                In<p className="font-bold">Touch</p>
              </p>
            </div>
          </div>
          <p className="text-[14px] text-slate-800 pl-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias modi
            est itaque aliquam sit, minima esse nihil mollitia no.
          </p>
          <div className="w-[100%] h-[200px] flex">
            <div className="w-[50%] h-[100%] p-3">
              <p className="font-semibold text-[18px] my-1 h-[20%] text-gray-800">
                United States
              </p>
              <ul className="flex flex-col justify-center h-[80%] gap-3  *:text-gray-800">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <p>+(55) 879 58 87 46</p>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <p>support@solo.com</p>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>524 Mina Street Building 05 Newyork, USA.</p>
                </li>
              </ul>
            </div>

            <div className="w-[50%] h-[100%] p-3">
              <p className="font-semibold text-[18px] my-1 h-[20%] text-gray-800">
                Australia
              </p>
              <ul className="flex flex-col justify-center h-[80%] gap-3  *:text-gray-800">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <p>+(88) 457 87 74 87</p>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <p>support@solo.com</p>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>507 Din Street Building 55 Sydney, Australia..</p>
                </li>
              </ul>
            </div>
          </div>

          <span></span>
        </div>

        <div className="w-[600px] h-[100%] bg-lime-400 flex items-center justify-center p-4">
          <div
            className="w-[570px] h-[430px] bg-white p-4 flex flex-col gap-4 rounded"
            style={{ boxShadow: "0px 0px 10px #75757584" }}
          >
            <p className="text-[20px] font-semibold">Send Message</p>
            <p className="text-slate-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              repell.
            </p>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[45%] pl-2 h-[30px] focus:outline-none rounded"
                style={{ border: "2px solid #6e6e6e73" }}
              />
              <input
                type="text"
                placeholder="Email Adrres"
                className="w-[45%] pl-2 h-[30px] focus:outline-none rounded"
                style={{ border: "2px solid #6e6e6e73" }}
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Phone No"
                className="w-[45%] pl-2 h-[30px] focus:outline-none rounded"
                style={{ border: "2px solid #6e6e6e73" }}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-[45%] pl-2 h-[30px] focus:outline-none rounded"
                style={{ border: "2px solid #6e6e6e73" }}
              />
            </div>
            <textarea
              placeholder="Message"
              className="min-h-[150px] pl-2 rounded"
              style={{ border: "2px solid #6e6e6e73" }}
            ></textarea>
            <span className="pl-2">
              <button className="bg-[#ffa600] py-1 px-3 rounded text-white">
                submit
              </button>
            </span>
          </div>
        </div>
      </section>

      <div className="w-[100%] h-[80px] bg-[#2b2b2b] mt-5 flex items-center justify-center" >
        <p className="text-white text-[14px] flex gap-2">
        Copyright © 2017 All Rights Reserved By <p className="text-[#ffa600]">SOLO Inc.</p>
        </p>
      </div>
    </>
  );
}

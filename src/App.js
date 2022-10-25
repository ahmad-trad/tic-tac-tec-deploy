import  React, { useState } from "react";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function App() {

  const [cilck, setCilck] = useState(false);

  const handleCilck = () =>{
    setCilck(!cilck);

    console.log(cilck);
  }

  return (
    <div className={cilck ? 'dark' : ''}>
      <div className="dark:bg-darkbg-dark text-slate-400 p-sm">
        <div className="container">
          <div className="container p-4 flex items-center justify-between">
            <div>
              <h1 className="dark:text-slate-100 text-slate-800 text-[1.25rem]  md:text-2xl lg:text-3xl font-bold">
                Social Media Dashboard
              </h1>
              <span className="text-sm">Yotal Followers : 12.3456</span>
            </div>
            <label  htmlFor="small-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                <input 
                  type="checkbox" 
                  value="" 
                  id="small-toggle" 
                  className="sr-only peer"
                  onClick={handleCilck}
                   />
                <div className="toggle w-9 h-5  bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
              </label>
          </div>
        </div>
        <div className="">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* card  */}
            <div className="card before:bg-facebook dark:bg-darkbg-card">
              <div className="flex justify-center items-center gap-1 py-2">
                <span className="text-facebook">
                  <AiFillFacebook size={22} />
                </span>
                <span className="">@abcd</span>
              </div>
              <h2 className="text-slate-800 text-6xl dark:text-slate-200">
                1987
              </h2>
              <p className="font-medium  uppercase tracking-[0.3em]">
                Followers
              </p>
              <div className="font-medium flex justify-center items-center gap-1 py-4 text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            {/* card  */}
            <div className="card before:bg-twitter dark:bg-darkbg-card">
              <div className="flex justify-center items-center gap-1 py-2">
                <span className="text-twitter">
                  <AiFillTwitterSquare size={22} />
                </span>
                <span className="">@abcd</span>
              </div>
              <h2 className="text-slate-800 text-6xl dark:text-slate-200">
                734
              </h2>
              <p className="font-medium uppercase tracking-[0.3em]">
                Followers
              </p>
              <div className="flex justify-center items-center gap-1 py-4 font-medium text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            {/* card  */}
            <div className="card dark:bg-darkbg-card before:bg-gradient-to-r before:from-amber-500 before:to-[#2f34a7]">
              <div className="flex justify-center items-center gap-1 py-2">
                <span className="text-instgram">
                  <AiFillInstagram size={22} />
                </span>
                <span className="">@abcd</span>
              </div>
              <h2 className="text-6xl text-slate-800 dark:text-slate-200">
                5641
              </h2>
              <p className="font-medium uppercase tracking-[0.3em]">
                Followers
              </p>
              <div className="flex justify-center items-center gap-1 py-4 text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            {/* card  */}
            <div className="card before:bg-youtube dark:bg-darkbg-card">
              <div className="flex justify-center items-center gap-1 py-2">
                <span className="text-youtube">
                  <AiFillYoutube size={22} />
                </span>
                <span className="">@abcd</span>
              </div>
              <h2 className="text-6xl text-slate-800 dark:text-slate-200">
                7821
              </h2>
              <p className="uppercase tracking-[0.3em] font-medium">
                Followers
              </p>
              <div className="flex justify-center items-center gap-1 py-4 text-[red]">
                <span>
                  <RiArrowDownSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
          </div>

          <div className="container">
            <h2 className="my-6 font-bold text-2xl"> Overview - Today </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array(8)
                .fill(" ")
                .map((el) => (
                  <div key={Math.random()} className=" p bg-bg-card rounded dark:bg-darkbg-card">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold dark:text-slate-200">Pages Views</h4>
                      <AiFillFacebook className="text-facebook" size={22} />
                    </div>

                    <div className="flex justify-between items-center mt-8">
                      <h3 className="font-bold text-black text-2xl dark:text-slate-100">
                        {" "}
                        101
                      </h3>
                      <div className="flex items-center gap-1">
                        <span>
                          <RiArrowUpSFill />
                        </span>
                        <span>300%</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
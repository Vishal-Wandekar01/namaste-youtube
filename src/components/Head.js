import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, SetSearchQuery] = useState("");
  // console.log(searchQuery);

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    //API call

    //make an aip call after every key press
    //if the diff between 2 aip call is <200ms
    //decline the aip call
    const timer = setTimeout(() => getSearchSuggetions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * kay - i
   * - render the component
   * - call useEffect()
   * -start a time -> make a api call after 200 ms
   *
   * key - ip
   * -destroy the component(call useEffect return method)
   * -re-render the component
   * -call useEffect()
   * -start a time -> make a api call after 200 ms-this is new
   *
   *
   * setTimeout(200)-start the timet--after 200 it will call getsuggetions()
   *
   */

  const getSearchSuggetions = async () => {
    console.log("API call-" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    //console.log(json[1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 py-2 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => SetSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        <div className="fixed bg-white py-2 px-2 w-[42rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 Iphone</li>
            <li className="py-2 shadow-sm">🔍 Iphone Pro</li>
            <li className="py-2 shadow-sm">🔍 Iphone Pro</li>
            <li className="py-2 shadow-sm">🔍 Iphone Pro</li>
            <li className="py-2 shadow-sm">🔍 Iphone Pro Max</li>
            <li className="py-2 shadow-sm">🔍 Iphone Pro Max</li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYNUR0cDh_AMKk8M1h1TzUHFlcuRBfCsIMg&s"
        />
      </div>
    </div>
  );
};

export default Head;

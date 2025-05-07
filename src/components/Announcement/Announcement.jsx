import React from "react";
import icon from "../../assets/icon.png";
import { ServiceData } from "../../constants/index";

const announcements = [
  {
    date: "April 05, 2025",
    title: "BOOK TWO IS COMING!",
    body: `The journey isn’t over yet—it’s just getting started! After the twists, challenges, and unforgettable moment of His Woeful Stare, get ready to dive into Blueprint of Destiny! This time, friendships will be tested, dreams will be chased, and new struggles will arise as our characters navigate the next chapter of their lives.

Will they overcome their fears and doubts? Can they handle the pressure of expectations? And most importantly—will they make the right choices for their future?`,
  },
  {
    date: "January 01, 2025",
    title: "FINALLY GOING BACK TO WRITING!",
    body: `After a long break, the words are calling me back—and I’m answering! This 2025, I’m diving back into writing, bringing new stories, deeper emotions, and unforgettable characters to life. Whether it’s a continuation of past works or something entirely new, I’m beyond excited to share this journey with you all!

Expect plot twists, late-night writing sessions, and a whole lot of feels. To everyone who’s been waiting, supporting, and believing—this is for you.`,
  },
  {
    date: "November 04, 2023",
    title: "LOSING MY PEN…",
    body: `Sometimes, the best stories need a little pause. For now, I’m stepping away from writing to rest, reflect, and recharge. Life gets busy, inspiration shifts, and creativity needs time to breathe—but this isn’t goodbye. Just a break.

To everyone who has supported my work, thank you for your patience and understanding. I’ll be back with fresh ideas, new stories, and even more passion for writing. Until then, keep dreaming, keep reading, and I’ll see you soon!`,
  },
];

const Announcement = () => {
  const storyUpdates = ServiceData.slice(0, 5); // Limit to top 5 for layout

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-[#4B2C20] mb-6">Announcement</h1>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search Keywords"
            className="w-full px-4 py-2 border border-[#D6B79E] rounded-l-md focus:outline-none"
          />
          <button className="px-4 bg-[#4B2C20] text-white rounded-r-md hover:bg-[#6a4330] transition">
            🔍
          </button>
        </div>

        <select className="w-full sm:w-[200px] px-4 py-2 border border-[#D6B79E] rounded-md text-[#4B2C20]">
          <option>Filter by</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Announcements */}
        <div className="lg:col-span-2 space-y-6">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-[#EAD8C0]"
            >
              <div className="flex items-center mb-2">
                <img
                  src={icon}
                  alt="icon"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-[#4B2C20]">Maesteries</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
              <h2 className="font-bold text-[#4B2C20] text-lg mb-2">
                {item.title}
              </h2>
              <p className="text-gray-800 whitespace-pre-line">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Story Updates */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#4B2C20]">
            Story Updates
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Read the newest update in the stories of Maesteries now on Wattpad!
          </p>
          {storyUpdates.map((story, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md border border-[#EAD8C0] overflow-hidden"
            >
              <img
                src={story.backgroundImage}
                alt={story.title}
                className="w-16 h-20 object-cover"
              />
              <div className="p-3 flex flex-col justify-between">
                <h3 className="font-semibold text-sm text-[#4B2C20] leading-tight">
                  {story.title}
                </h3>
                <p className="text-sm italic text-[#4B2C20]">{story.genre}</p>
                <p className="text-xs text-gray-600">
                  Don’t miss out! Read it now.
                </p>
                <p className="text-xs text-gray-500">
                  {/* Replace with actual update time if available */}
                  January 30, 2025 — 09:54PM
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcement;

import React, { useState } from "react";
import icon from "../../assets/icon.png";
import { ServiceData, announcements} from "../../constants/index";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const Announcement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Newest");

  const filteredAnnouncements = announcements
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      filter === "Newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  const storyUpdates = ServiceData.slice(0, 5);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Announcements Section */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-primary mb-6">Announcement</h1>

          {/* Search & Filter Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex w-full sm:w-2/3">
              <input
                type="text"
                placeholder="Search Keywords"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-[#D6B79E] rounded-l-md focus:outline-none"
              />
              <button className="px-4 bg-primary text-white rounded-r-md hover:bg-secondary transition flex items-center justify-center">
                <FaSearch />
              </button>
            </div>

            <div className="relative w-full sm:w-[200px]">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-[#D6B79E] rounded-md appearance-none pr-10 text-[#4B2C20]"
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
              <IoFilter className="absolute right-3 top-3.5 text-[#4B2C20] pointer-events-none" />
            </div>
          </div>

          {/* Announcements List */}
          <div className="space-y-6">
            {filteredAnnouncements.map((item, index) => (
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
        </div>

        {/* Story Updates Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#4B2C20] mb-4 lg:mt-1">
            Story Updates
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Read the newest update in the stories of Maesteries now on Wattpad!
          </p>

          {storyUpdates.map((story, index) => (
            <a
              key={index}
              href={story.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white rounded-lg shadow-md border border-[#EAD8C0] overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={story.backgroundImage}
                alt={story.title}
                className="w-16 h-24 object-cover"
              />
              <div className="p-3 flex flex-col justify-between">
                <h3 className="font-semibold text-sm text-[#4B2C20] leading-tight">
                  {story.title}
                </h3>
                <p className="text-sm italic text-[#4B2C20]">{story.genre}</p>
                <p className="text-xs text-gray-600">
                  Don’t miss out! Read it now.
                </p>
                <p className="text-xs text-gray-500">{story.status}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcement;

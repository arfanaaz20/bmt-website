import React from "react";
import { FaRegCalendar } from "react-icons/fa";

export const RecentSearches = () => {
  const recentSearches = [
    {
      id: 1,
      type: "Flights",
      from: "New Delhi",
      to: "Mumbai",
      travellers: 1,
      date: "15 Nov 2025",
    },
    {
      id: 2,
      type: "Flights",
      from: "Bangalore",
      to: "Goa",
      travellers: 1,
      date: "22 Nov 2025",
    },
     {
      id: 3,
      type: "Flights",
      from: "Chennai",
      to: "Bangalore",
      travellers: 1,
      date: "2 Nov 2025",
    },
   
  ];

  return (
    <div className="mx-3 my-2 ">
      <div className="flex gap-4 flex-col t">
        <div className="font-bold text-xl">Recent Searches</div>
        <div className="flex no-scrollbar gap-2 w-full overflow-x-auto whitespace-nowrap mb-4">
{recentSearches?.map((item) => {
          return (
            <>
              <div key={item?.id} className="bg-white min-w-[250px] h-[120px] rounded-[13px] px-3 py-4">
                <div className="flex flex-col justify-between  h-full ">
                  <div>
                    <div className="text-[var(--recent-searches)] font-semibold">
                      {item.type}
                    </div>
                    {item.from && item.to && (
                      <div className="font-bold text-[14px] ">
                        {item.from} → {item.to}
                      </div>
                    )}
                  </div>
                  <div className="text-[12px] text-[#949494]">{item.travellers && `${item.travellers} traveller`}</div>
                  <div className="text-[12px] text-[#949494] flex gap-1 items-center">
                    <FaRegCalendar />
                      {item.date}
                  </div>
                </div>
              </div>
            </>
          );
        })}
        </div>
        
      </div>
    </div>
  );
};

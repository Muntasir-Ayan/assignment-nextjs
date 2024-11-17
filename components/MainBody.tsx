'use client'
// components/VacationHome.tsx

import React, { useState } from 'react';

const MainBody: React.FC = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const totalCount = adultCount + childCount;

  const updateCount = (type: 'adult' | 'child', delta: number) => {
    if (type === 'adult') {
      setAdultCount((prev) => Math.max(0, prev + delta));
      if (adultCount === 0) setChildCount(0); // Reset children if no adults
    } else if (type === 'child' && adultCount > 0) {
      setChildCount((prev) => Math.max(0, prev + delta));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Juneau Vacation Home: Stunning View + Beach Access</h1>
          <div className="flex items-center mt-2">
            <span className="bg-green-600 text-white px-2 rounded">9.8</span>
            <span className="ml-2">Exceptional</span>
          </div>
          <div className="mt-4">
            <p>2 bedrooms</p>
            <p>Sleeps {totalCount}</p>
            <p>1 bathroom</p>
            <p>1155 sq ft</p>
          </div>
          <h3 className="mt-4">Popular amenities</h3>
          <ul className="list-disc ml-5">
            <li>Barbecue grill</li>
            <li>Outdoor Space</li>
            <li>Kitchen</li>
            <li>Washer</li>
            <li>Parking available</li>
            <li>Dryer</li>
          </ul>
          {/* Area exploration section */}
          <h3 className="mt-4">Explore the area</h3>
          {/* Nearby places */}
          <ul className="list-disc ml-5">
            <li>Auke Bay - 6 min drive</li>
            <li>University of Alaska-Southeast - 10 min drive</li>
            <li>Mendenhall Golf Course - 14 min drive</li>
            <li>Juneau, AK (JNU-Juneau Intl.) - 14 min drive</li>
          </ul>

          {/* Booking card */}
          <div className="bg-blue-800 text-white p-4 rounded mt-6">
            <h2 className="text-lg">Price: $134 per night</h2>
            <button onClick={() => setShowPopup(true)} className="mt-2 bg-blue-500 p-2 rounded">
              Book now
            </button>
          </div>

          {/* Popup for traveler count */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded">
                <h3>Travelers</h3>
                <div className="flex justify-between mt-2">
                  <span>Adults:</span>
                  <button onClick={() => updateCount('adult', -1)}>-</button>
                  {adultCount}
                  <button onClick={() => updateCount('adult', 1)}>+</button>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Children:</span>
                  {adultCount > 0 && (
                    <>
                      <button onClick={() => updateCount('child', -1)}>-</button>
                      {childCount}
                      <button onClick={() => updateCount('child', 1)}>+</button>
                    </>
                  )}
                </div>
                <button onClick={() => setShowPopup(false)} className="mt-4 bg-gray-300 p-2 rounded">Done</button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar with booking details */}
        <aside className="bg-gray-100 p-4 rounded">
          {/* Additional sidebar content can go here */}
        </aside>

      </div>

      {/* Footer or additional information can be added here */}
    </div>
  );
};

export default MainBody;
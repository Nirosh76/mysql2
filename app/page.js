"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts/");
        const result = await response.json();
        setData(result); // Store the data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <h1>Mysql data2</h1>
      {data?.length > 0 ? (
        <ul className="list-disc pl-5">
          {data.map((d, index) => (
            <li key={index} className="text-blue-700">
              {d.category}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p> // Handle empty data case
      )}
    </div>
  );
}

import { useState, useEffect } from "react";

export default function Home() {
  // State for advice
  const [advice, setAdvice] = useState("");

  // State for loading
  const [loading, setLoading] = useState(true);

  // Run once when component mounts
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
        setAdvice("Failed to load advice.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to Task Dashboard
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Daily Advice
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <p className="text-lg text-gray-600 italic">
            "{advice}"
          </p>
        )}
      </div>
    </div>
  );
}
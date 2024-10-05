"use client";

import { useSearchParams } from 'next/navigation';

const ResultsPage = () => {
    const searchParams = useSearchParams();
    const score = parseInt(searchParams.get("correct") || "0");
    const total = 4;

    const percentage = ((score / total) * 100).toFixed(0);

    // const stats = [
    //     {range: "4 (Perfect!)", percent : "100"},
    //     {range: "3-4", percent : "75"},
    //     {range: "2-3", percent : "50"},
    //     {range: "1-2", percent : "25"},
    //     {range: "0-1", percent : "0"}
    // ]

    return (
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-200">Game Results</h1>
          <p className="text-lg mb-4 text-gray-200">
            You scored <strong>{score}</strong> out of <strong>{total}</strong>!
          </p>
          <p className="text-lg mb-8 text-gray-200">That&apos;s a <strong>{percentage}%</strong> success rate.</p>
          {score === 4 ? (
            <p className="text-lg mb-8 text-gray-200">You got a perfect score! You know your biases!</p>
          ) : (
            <p className="text-lg mb-8 text-gray-200"> Play again to learn about those biases!</p>  
          )}

          {/* <div className="w-full max-w-md bg-gray-950 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">How other players scored:</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Points</th>
                  <th className="border p-2">Percent of players</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat, index) => (
                  <tr key={index}>
                    <td className="border p-2 text-center">{stat.range}</td>
                    <td className="border p-2 text-center">{stat.percent}%</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          {/* </div> */}
        </div>
      );
    };
    
export default ResultsPage;

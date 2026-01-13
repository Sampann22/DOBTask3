import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import api from "../../api/axios";

export default function UserHome() {
  const [copied, setCopied] = useState(false);

  const referralCode = "REF12345"; // later from backend

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    console.log("UserHome mounted");

    api.get("/referrals/stats")
        .then((res) => {
        console.log("Backend connected:", res.data);
        })
        .catch((err) => {
        console.error("API error:", err);
        });
    }, []);


  const chartData = [
    { month: "Jan", earnings: 2000 },
    { month: "Feb", earnings: 3500 },
    { month: "Mar", earnings: 5000 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>

      {/* Referral Code */}
      <div className="bg-white p-4 rounded shadow mb-6 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Your Referral Code</p>
          <p className="text-lg font-semibold">{referralCode}</p>
        </div>
        <button
          onClick={copyCode}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total Earnings</p>
          <p className="text-xl font-bold text-success">₹12,500</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Referrals</p>
          <p className="text-xl font-bold">24</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Level 1 Earnings</p>
          <p className="text-xl font-bold">₹5,000</p>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="bg-white p-6 rounded shadow min-h-[260px] min-w-0">
        <h2 className="mb-4 font-semibold">Earnings Trend</h2>

            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="earnings"
                    stroke="#2563eb"
                    strokeWidth={2}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>

    </div>
  );
}

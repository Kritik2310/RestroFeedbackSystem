import { useEffect, useState } from "react";
import { getRatingSummary } from "../api/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

export default function AdminDashboard() {
  const [data, setData] = useState({ good: 0, bad: 0 });

  useEffect(() => {
    getRatingSummary().then((res) => {
      setData(res.data);
    });
  }, []);

  const chartData = [
    { name: "Good Ratings (4+)", value: data.good },
    { name: "Bad Ratings (<=3)", value: data.bad }
  ];

  const COLORS = ["#3b2f2f", "#c2775a"];

  const insight =
    data.good + data.bad === 0
      ? "No feedback yet to analyze."
      : data.good > data.bad
      ? "Most users gave positive feedback!"
      : "More users gave lower ratings — improvement needed.";

  return (
    <div className="admin-page">
      <h1 className="page-title">Admin Dashboard</h1>
      <p className="page-subtitle">Feedback Insights & Rating Analysis</p>

      <div className="chart-container">

        {/* BAR CHART */}
        <div className="chart-box">
          <h2>Rating Distribution</h2>
          <BarChart width={350} height={300} data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* PIE CHART */}
        <div className="chart-box">
          <h2>Good vs Bad Ratings</h2>
          <PieChart width={330} height={330}>
            <Pie
              data={chartData}
              cx={150}
              cy={150}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

      </div>

      {/* INSIGHT BOX */}
      <div className="insight-box">
        <h2>Insights</h2>
        <p>{insight}</p>
      </div>
    </div>
  );
}

'use client';
import React from 'react';
import SidebarPromoter from '../components/SidebarPromoter';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const dataYear = [
  { date: '2023', ticketsSold: 100, revenue: 1000 },
  { date: '2023', ticketsSold: 150, revenue: 1500 },
  { date: '2023', ticketsSold: 200, revenue: 2000 },
  { date: '2023', ticketsSold: 180, revenue: 1800 },
  { date: '2023', ticketsSold: 220, revenue: 2200 },
  { date: '2023', ticketsSold: 170, revenue: 1700 },
  { date: '2023', ticketsSold: 250, revenue: 2500 },
  { date: '2023', ticketsSold: 280, revenue: 2800 },
];

const dataMonth = [
  { date: 'Jan', ticketsSold: 100, revenue: 1000 },
  { date: 'Feb', ticketsSold: 150, revenue: 1500 },
  { date: 'Mar', ticketsSold: 200, revenue: 2000 },
  { date: 'Apr', ticketsSold: 180, revenue: 1800 },
  { date: 'Mei', ticketsSold: 220, revenue: 2200 },
  { date: 'Jun', ticketsSold: 170, revenue: 1700 },
  { date: 'Jul', ticketsSold: 250, revenue: 2500 },
  { date: 'Aug', ticketsSold: 280, revenue: 2800 },
  { date: 'Sept', ticketsSold: 280, revenue: 2800 },
  { date: 'Oct', ticketsSold: 280, revenue: 2800 },
  { date: 'Nov', ticketsSold: 280, revenue: 2800 },
  { date: 'Dec', ticketsSold: 280, revenue: 2800 },
];

const dailyData = [
  { date: '1/Jan', ticketsSold: 100, revenue: 1000 },
  { date: '2/Jan', ticketsSold: 150, revenue: 1500 },
  { date: '3/Jan', ticketsSold: 200, revenue: 2000 },
  { date: '4/Jan', ticketsSold: 180, revenue: 1800 },
  { date: '5/Jan', ticketsSold: 220, revenue: 2200 },
  { date: '6/Jan', ticketsSold: 170, revenue: 1700 },
  { date: '7/Jan', ticketsSold: 250, revenue: 2500 },
  { date: '8/Jan', ticketsSold: 280, revenue: 2800 },
  { date: '9/Jan', ticketsSold: 280, revenue: 2800 },
];

const Analytics = () => {
  return (
    <div className="flex w-full">
      <SidebarPromoter activeLink={'analytics'} />

      <div className="bg-white p-20 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Analytics
        </h1>

        <div className="overflow-x-auto">
          <div>
            <h2 className="text-2xl mb-4">Yearly Statistics</h2>
            <LineChart
              width={600}
              height={300}
              data={dataYear}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line
                type="monotone"
                dataKey="ticketsSold"
                stroke="#8884d8"
                name="Tickets Sold"
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                name="Revenue"
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </div>
          <div>
            <h3 className="text-2xl mt-8 mb-4">Monthly Statistics</h3>
            <LineChart
              width={600}
              height={300}
              data={dataMonth}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line
                type="monotone"
                dataKey="ticketsSold"
                stroke="#8884d8"
                name="Tickets Sold"
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                name="Revenue"
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </div>
          <div>
            <h4 className="text-2xl mt-8 mb-4">Daily Statistics</h4>
            <LineChart
              width={600}
              height={300}
              data={dailyData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line
                type="monotone"
                dataKey="ticketsSold"
                stroke="#8884d8"
                name="Tickets Sold"
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                name="Revenue"
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

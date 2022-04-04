import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='chart-container my-4 md:my-8'>
            <div className="chart-container-left mx-auto">
                <p className='text-2xl font-bold text-red-600 text-center mb-4 md:mb-5'>Month Wise Sell</p>
                <LineChart
                    width={600}
                    height={400}
                    data={data}
                >
                    <Line dataKey={'sell'} stroke="red"></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis></YAxis>
                </LineChart>
            </div>

            <div className="chart-container-right mx-auto">
                <p className='text-2xl font-bold text-red-600 text-center mb-4 md:mb-5'>Investment vs Revenue</p>

                <AreaChart
                    width={600}
                    height={400}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Legend />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;
"use client"
import React, { useEffect, useState } from 'react';
import { reqCovidApi } from '../services/api'; // Adjust the path based on your project structure
import CovidChart from '../component/getChart'; // Adjust the path based on your project structure

const ChartData = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await reqCovidApi();
      setCovidData(data); // Make sure this data is in the correct format expected by the chart
    };

    fetchData();
  }, []);

  return (
    <div className='chart'>
      <h1>Statistic cases by month</h1>
      <div className='chart-data container-text'>
      <CovidChart covidData={covidData} />
      </div>
    
    </div>
  );
};

export default ChartData;

"use client"
import React, { useEffect, useState } from 'react';
import { reqCovidApi } from '../services/api'; // Adjust the path based on your project structure
import CovidChartByState from '../component/getAllStates'; // Adjust the path based on your project structure

const ChartDatabyStates = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await reqCovidApi();
      setCovidData(data); // Make sure this data is in the correct format expected by the chart
    };

    fetchData();
  }, []);

 return(
    <div>
      <h1> Statistic Cases by States</h1>
        {/* <CovidChartByState data={covidData}></CovidChartByState> */}
    </div>
 )
};

export default ChartDatabyStates;

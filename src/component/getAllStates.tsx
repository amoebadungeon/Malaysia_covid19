import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

// Define an interface for the chart data structure
interface CharstData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: unknown;
    fill: boolean;
    borderColor: string;
  }>;
}

const CovidChartByState = ({ covidDataByState }:any) => {
  const [chartData, setChartData] = useState<CharstData>({
    labels: [], // State names
    datasets: [
      {
        label: 'New Cases by State',
        data: Object.values(covidDataByState), // Sum of new cases for each state
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  });

  useEffect(() => {
    // Update the chart if covidDataByState changes
    const uniqueStates = [...new Set(covidDataByState.map((states: { state: any; }) => states.state))];
    console.log(uniqueStates);
    setChartData({
      labels: Object.keys(uniqueStates),
      datasets: [
        {
          label: 'New Cases by State',
          data: Object.values(uniqueStates),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
        },
      ],
    });
  }, [covidDataByState]);

  return <Line data={chartData} />;
};

export default CovidChartByState;

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import moment from 'moment';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

// Define an interface for the chart data structure
interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }>;
}

const CovidChart = ({ covidData }: any) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: 'New Cases',
        data: [],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  });

  useEffect(() => {
    if (covidData) {
      // Aggregate data by month
      const aggregatedData = covidData.reduce((acc: { [x: string]: number; }, item: { date: moment.MomentInput; cases_new: number; }) => {
        const monthYear = moment(item.date).format('YYYY-MM'); 
        if (!acc[monthYear]) {
          acc[monthYear] = 0;
        }
        acc[monthYear] += item.cases_new;
        return acc;
      }, {});

      const labels: string[] = Object.keys(aggregatedData);
      const data: number[] = Object.values(aggregatedData);

      setChartData({
        labels,
        datasets: [
          {
            label: 'New Cases',
            data,
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
          },
        ],
      });
    }
  }, [covidData]);

  return (
    <div style={{ width: '500px', height: '600px' }}>
        <Line data={chartData} />
    </div>
  );
};

export default CovidChart;

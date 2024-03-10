import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import moment from 'moment';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


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
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
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
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgb(53, 162, 235)',
          },
        ],
      });
    }
  }, [covidData]);

  return (
    <div style={{ width: '550px',paddingTop:"20px" ,paddingLeft:"20px"}}>
        <Line data={chartData} />
    </div>
  );
};

export default CovidChart;

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { reqCovidApi } from '../services/api';

// Define your data types
interface CaseData {
  date: string;
  state: string;
  cases_new: number;
}

interface TableData {
  key: string;
  state: string;
  [key: string]: any; // To allow dynamic year properties
}

const CasesTable: React.FC = () => {
  const [jsonData,setJsonData] = useState<CaseData>()
  const [dataSource, setDataSource] = useState<TableData[]>([]);
  const [columns, setColumns] = useState<ColumnsType<TableData>>([
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
        const data = await reqCovidApi();
        if (!data) {
          console.log('Failed to fetch data');
          return;
        }
        setJsonData(data);
        filterData(data);
      };
      fetchData();
  
  }, []);

  const filterData = (data: { date: any; state: any; cases_new: any; }[]) =>{
    // Aggregate data
    const aggregatedData: { [key: string]: TableData } = {};
    const yearsSet = new Set<string>();
    data.forEach(({ date, state, cases_new }) => {
        const year = date.substring(0, 4);
        yearsSet.add(year);
        const yearKey = `year${year}`;

        if (!aggregatedData[state]) {
        aggregatedData[state] = { key: state, state };
        }

        aggregatedData[state][yearKey] = (aggregatedData[state][yearKey] || 0) + cases_new;
    });
    // Prepare dataSource
    const newDataSource = Object.values(aggregatedData);

    // Prepare columns
    const yearColumns: ColumnsType<TableData> = Array.from(yearsSet).sort().map(year => ({
      title: year,
      dataIndex: `year${year}`,
      key: `year${year}`,
    }));

    setColumns([{ title: 'State', dataIndex: 'state', key: 'state' }, ...yearColumns]);
    setDataSource(newDataSource);
  }
  return (
    <div className="table-chart" style={{ width: '600px', paddingRight:"30px"}}>
         <h1>Statistic Cases By States</h1>
         <Table 
         dataSource={dataSource} 
         columns={columns} 
         pagination={false} 
         scroll={{ y: 300 }} 
         style={{ width: '100%' ,}}/>
    </div>
 
  )
};

export default CasesTable;

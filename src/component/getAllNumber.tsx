"use client"; 

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { reqCovidApi } from '../services/api';
import { Col, Divider, Row } from 'antd';

const Stats: NextPage = () => {
  const [queryData, setQueryData] = useState(null);
  const [latestDate, setLatestDate] = useState(null)
  const [NewCase, setNewCase] = useState(null)
  const [importCase, setimportCase] = useState(null)
  const [RecoCase, setRecoCase] = useState(null)
  const [covidData, setCovidData] = useState({
    "Total Cases" : 0,
    "Local Cases" : 0,
    "Import Cases": 0,
    "Recovered Cases" : 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await reqCovidApi();
      if (!data) {
        console.log('Failed to fetch data');
        return;
      }
      setQueryData(data);
      getAllNOCases(data);
      getDates(data)
    };

    fetchData();
   
  }, []);

  const getAllNOCases = (data: any[]) =>{
    const NewCases = (data.reduce((accumulator: number, currentValue: { cases_new: string; }) => accumulator + parseInt(currentValue.cases_new, 10), 0))/2;
   
    const ImportCases = (data.reduce((accumulator: number, currentValue: { cases_import: string; }) => accumulator + parseInt(currentValue.cases_import, 10), 0))/2;
    
    const RecoveredCases = (data.reduce((accumulator: number, currentValue: { cases_recovered: string; }) => accumulator + parseInt(currentValue.cases_recovered, 10), 0))/2;
    // const ActiveCases = (data.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.cases_active, 10), 0))/2;
   
    const LocalCases = NewCases - ImportCases
    const TotalCases = LocalCases + ImportCases;
  
    setCovidData({
        "Total Cases": TotalCases,
        "Local Cases": LocalCases,
        "Import Cases": ImportCases,
        "Recovered Cases": RecoveredCases
       
      });
  } 
  const getDates = (data: any) =>{
    const latestDate = data[data.length - 1]
    setLatestDate(latestDate.date);
    setNewCase(latestDate.cases_new);
    setimportCase(latestDate.cases_import);
    setRecoCase(latestDate.cases_recovered);
  }

  return (
    <div className='get-number'>
      <h1>What is the situation in Malaysia?</h1>
      <div className='small-title'>
         <h4>Malaysia: Active COVID-19 Cases</h4>
         <div className='info-data-date'>Date as of: {latestDate}</div>
      </div>
     
      <div className='info-data'>
        <div className='info-data-number '>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={6}>
              <div className='container-text'>
                <div className='text-dim'><img src={"../img/total-cases.png"} alt='covid-total' />
                <div className='text-number'>Total Cases:{covidData["Total Cases"]?.toLocaleString()}</div></div>
              </div>
            </Col>
            <Col span={6}>
            <div className='container-text'>
              <div className='text-dim beauty-border'><img src={"../img/local-cases.png"} alt='covid-local' />
              <small className="inline-block rounded px-1.5 bg-red-400 text-red-500 bg-opacity-20">+ {NewCase}</small>
              <div className='text-number'>Local Cases:{covidData["Local Cases"]?.toLocaleString()}</div></div>
            </div>
            </Col>
            <Col span={6}>
            <div className='container-text'>
              <div className='text-dim beauty-border'><img src={"../img/globe.png"} alt='covid-import' />
              <small className="inline-block rounded bg-opacity-20 px-1.5 bg-green-400 text-green-500">+ {importCase}</small>
              <div className='text-number'>Import Cases:{covidData["Import Cases"]?.toLocaleString()}</div> </div>
            </div>
            </Col>
            <Col span={6}>
            <div className='container-text'>
              <div className='text-dim beauty-border'><img src={"../img/recovered-cases.png"} alt='covid-recovered' />
              <small className="inline-block rounded bg-opacity-20 px-1.5 bg-green-400 text-green-500">+ {RecoCase}</small>
              <div className='text-number'>Recovered Cases: {covidData["Recovered Cases"]?.toLocaleString()}</div> </div>
            </div>
            </Col>
           
          </Row>
        </div>
        
    </div>
    </div>
  );
};

export default Stats;

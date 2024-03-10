"use client"; 

import React from 'react';
import Layout from '../app/layout';
import Stats from '../component/getAllNumber';
import ChartData from "../pages/chartDatabyMonth"
import ChartDatabyStates from "../pages/chartDatabyCities"
import Header from '@/component/header';
import CasesTable from '../component/stateTable';

const Home = () => {
  
  const DEBUG = false; // Change to true for debug mode

  if (typeof window !== "undefined" && !DEBUG) {
      const methods = ["log", "debug", "warn", "info", "error"];
      for (let i = 0; i < methods.length; i++) {
          // Using bracket notation and type assertion to bypass TypeScript checks
          (console as any)[methods[i]] = function () {};
      }
  }
  

  return (
    <Layout>
      <div>
        <Header></Header>
        <Stats />
        <div className='content-chart'>
        <ChartData></ChartData>
        <CasesTable></CasesTable>
          </div>
      </div>
    </Layout>
  );
};

export default Home;

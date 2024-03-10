"use client"; 

import React from 'react';
import Layout from '../app/layout';
import Stats from '../component/getAllNumber';
import ChartData from "../pages/chartDatabyMonth"
import ChartDatabyStates from "../pages/chartDatabyCities"

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
        <Stats />
        <ChartData></ChartData>
        {/* <ChartDatabyStates></ChartDatabyStates> */}
      </div>
    </Layout>
  );
};

export default Home;

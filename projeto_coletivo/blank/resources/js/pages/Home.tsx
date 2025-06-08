import React from 'react';
import TopDealsBox from '../components/topDealsBox/TopDealsBox';
import ChartBox from '../components/charts/ChartBox';
import {
  MdGroup,
  MdInventory2,
  MdAssessment,
  MdSwapHorizontalCircle,
} from 'react-icons/md';
import AppLayout from '../layouts/app-layout'; // import do layout

const Home = () => {
  return (
    <AppLayout>
      <div className="home w-full p-0 m-0">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 grid-flow-dense auto-rows-[minmax(200px,auto)] xl:auto-rows-[minmax(150px,auto)] gap-3 xl:gap-3 px-0">
          <div className="box col-span-full sm:col-span-1 xl:col-span-1 row-span-3 3xl:row-span-5">
            <TopDealsBox />
          </div>
          <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
            <ChartBox chartType="line" IconBox={MdGroup} title="Total Users" />
          </div>
          <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
            <ChartBox chartType="line" IconBox={MdInventory2} title="Total Products" />
          </div>
          <div className="box row-span-3 col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-5">
            <ChartBox chartType="pie" title="Leads by Source" />
          </div>
          <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
            <ChartBox chartType="line" IconBox={MdAssessment} title="Total Ratio" />
          </div>
          <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
            <ChartBox chartType="line" IconBox={MdSwapHorizontalCircle} title="Total Revenue" />
          </div>
          <div className="box row-span-2 col-span-full xl:col-span-2 3xl:row-span-3">
            <ChartBox chartType="area" title="Revenue by Products" />
          </div>
          <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
            <ChartBox chartType="bar" title="Total Visit" />
          </div>
          <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
            <ChartBox chartType="bar" title="Total Profit" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;

import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import PageHeader from '../components/PageHeader';

import data from '../data/data.json';
import BarGraph from '../components/BarGraph';
import AreaGraph from '../components/AreaGraph';
const App = () => {
  const salesData = data.sales;
  const foodAlcoholData = data.food_and_alcohol_sales;
  return (
    // column division
    // <div style={{ height: '100vh', display: 'grid', gridTemplateRows: '10% 90%' }}>
    <div style={{ height: '100vh' , display: 'grid', gridTemplateRows: '10% 90%' , gridTemplateColumns: '100%' , gridTemplateAreas: 'topbar' }}>
      <TopBar />
      <div style={{ display: 'grid', gridTemplateColumns: '15% 85%' }}>
        <div>
          <SideBar />
        </div>
        <div>
          <PageHeader screenName={"DashBoard"}/>
          <BarGraph data={salesData} />
          <AreaGraph data={foodAlcoholData} />
        </div>
      </div>
    </div>
  );
};

export default App;

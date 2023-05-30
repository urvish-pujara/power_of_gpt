import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import CustomTable from '../components/Table';
import data from '../data/user_data.json';
import PageHeader from '../components/PageHeader';
const UserManagementScreen = () => {
  const userData = data.user_data;
  const len = userData.length;
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
          <PageHeader screenName={"User Management"}/>
          <CustomTable headers={['Name', 'Mobile No.', 'Job Role', 'Status']} data={userData} tableHeader={"User Management ("+len + ")"}/>
        </div>
      </div>
    </div>
  );
};

export default UserManagementScreen;

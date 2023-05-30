import React from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import AllTransactionsScreen from './screens/AllTransactionsScreen';
import TipManagementScreen from './screens/TipManagementScreen';
import SettingsScreen from './screens/SettingsScreen';
import UserManagementScreen from './screens/UserManagementScreen';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardScreen></DashboardScreen>} />
      <Route path="/transactions" element={<AllTransactionsScreen/>} />
      <Route path="/tip-management" element={<TipManagementScreen/>} />
      <Route path="/settings" element={<SettingsScreen/>} />
      <Route path="/user-management" element={<UserManagementScreen/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;

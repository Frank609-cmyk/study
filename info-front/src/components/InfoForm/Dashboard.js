// 用户主界面
// Copyright FRANK CORPORATION. All rights reserved.
import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Container, Grid } from '@mui/material';
import AccountForm from './AccountForm';
import IPForm from './IPForm';
import EquipmentForm from './EquipmentForm';
import UserInfoForm from './UserInfoForm';
import { useDispatch, useSelector } from 'react-redux';
import { editModalInfoSwitch } from '../../actions/EditModalAction';

const Dashboard = () => {
  const [formType, setFormType] = useState('account');
  const selector = useSelector(state => state.login);
  const dispatch = useDispatch();
  const userFlg = selector.userFlg;
  const renderForm = () => {
    switch (formType) {
      case 'account':
        dispatch(editModalInfoSwitch("1"));
        return <AccountForm />;
      case 'ip':
        dispatch(editModalInfoSwitch("2"));
        return <IPForm />;
      case 'equipment':
        dispatch(editModalInfoSwitch("3"));
        return <EquipmentForm />;
      case 'user':
        dispatch(editModalInfoSwitch("4"));
        return <UserInfoForm />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Box>
        <Typography variant="h4" gutterBottom>
          信息选择
        </Typography>
        <Select value={formType} onChange={(e) => setFormType(e.target.value)} style={{ marginBottom: '10px', backgroundColor: '#fff' }}>
          <MenuItem value="account">账户信息</MenuItem>
          <MenuItem value="ip">IP信息</MenuItem>
          <MenuItem value="equipment">装备信息</MenuItem>
          {userFlg === "1" ? 
            <MenuItem value="user">用户信息</MenuItem>
           : <></>}

        </Select>
      </Box>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {renderForm()}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;

// 用户登陆界面
// Copyright FRANK CORPORATION. All rights reserved.
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginOnChange, loginRequest } from '../../actions/LoginActions';
import { Box, TextField, Button, Typography, Paper, Avatar, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlined from '@mui/icons-material/LockOutlined';
import api from '../../api'; // 导入 Axios 实例
import '../../styles.css';

const Login = () => {
  const navigate = useNavigate();
  const selector = useSelector(state => state.login);
  const dispatch = useDispatch();
  // 参数
  const userId = selector.userId;
  const password = selector.password;
  const errorMessage = selector.errorMessage;
  const checkFlg = selector.checkFlg;
  // 更新事件
  const onChange = (value, inputFlg) => {
    dispatch(loginOnChange(value, inputFlg));
  };
  // 提交事件
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post('/user/login', {
      userId,
      password,
    });
    dispatch(loginRequest(response.data));
    if (response.data.checkResult) {
      navigate('/main');
    }
  }

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {checkFlg ? (<></>) : (<><Alert sx={{ width:200 }} severity="error">{errorMessage}</Alert></>)}
        </Box>
        <form onSubmit={handleSubmit}>
          <Box mb={2} sx={{ marginTop:"20px" }}>
            <TextField
              fullWidth
              label="账号"
              variant="outlined"
              value={userId}
              inputProps={{ maxLength: 20 }}
              onChange={(e) => onChange(e.target.value, "1")}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="密码"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => onChange(e.target.value, "2")}
              inputProps={{ maxLength: 20 }}
              required
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<CircularProgress size={20} />}
          >
            {"登录"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
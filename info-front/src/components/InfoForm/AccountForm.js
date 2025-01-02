// src/components/InfoForm/AccountForm.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import EditModal from './EditModal';
import { accountOnChange, accountSearch } from '../../actions/AccountActions';
import { editModalOpen, editModalOpenUpd } from '../../actions/EditModalAction';
import api from '../../api'; // 导入 Axios 实例

const AccountForm = () => {
  const selector = useSelector(state => state.account);
  const selector1 = useSelector(state => state.editModal);
  const dispatch = useDispatch();
  // 参数传递
  const accountId = selector.accountId;
  const password = selector.password;
  const accountCmt = selector.accountCmt;
  const rows = selector.accountEntity;
  const isOpen = selector1.isOpen;

  // 初期渲染 静态：
  useEffect(() => {
    search();
  },[isOpen]);

  // 更新事件
  const onChange = (value, inputFlg) => {
    dispatch(accountOnChange(value, inputFlg));
  };

  // 打开编辑框
  const editMoldalOpen = () => {
    dispatch(editModalOpen());
  };

  // 打开编辑框
  const editModalOpenUp = (data) => {
    dispatch(editModalOpenUpd(data));
  };

  const search = async () => {
    const response = await api.post('/account/search', {
      accountId,
      password,
      accountCmt,
    });
    dispatch(accountSearch(response.data));
  }

  const columns = [
    {
      field: 'actions',
      headerName: '编辑',
      width: 100,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <IconButton
          color="primary"
          onClick={() => editModalOpenUp(params.row)}
        >
          <EditIcon />
        </IconButton>
      ),
    },
    { field: 'id', headerName: '账户Id', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'password', headerName: '密码', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'accountCmt', headerName: '备注', width: 160, headerAlign: 'center', align: 'center' },
  ];

  return (
    <Box sx={{ width: 800 }}>
      <Typography variant="h6" gutterBottom>
        账号信息
      </Typography>
      <EditModal />
      <Grid container>
        <Grid item xs={12}>
          <TextField
            label="账号ID"
            value={accountId}
            fullWidth
            tyle={{ marginBottom: '10px', backgroundColor: '#fff' }}
            onChange={(e) => onChange(e.target.value, "1")}
            inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          <TextField
            label="账号密码"
            value={password}
            fullWidth
            style={{ marginBottom: '10px', backgroundColor: '#fff' }}
            onChange={(e) => onChange(e.target.value, "2")}
            inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="备注"
            value={accountCmt}
            fullWidth
            style={{ marginBottom: '10px', backgroundColor: '#fff' }}
            onChange={(e) => onChange(e.target.value, "3")}
            inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={search} style={{ marginBottom: '10px' }} >
            查询
          </Button>
          <Button variant="contained" color="primary" onClick={editMoldalOpen} style={{ marginBottom: '10px', marginLeft: "5px" }} >
            新增
          </Button>
        </Grid>
        <Grid style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountForm;
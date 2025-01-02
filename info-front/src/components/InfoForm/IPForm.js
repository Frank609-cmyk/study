// src/components/InfoForm/IPForm.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { ipOnChange, ipSearch } from '../../actions/IPActions';
import { editModalOpen, editModalOpenUpd } from '../../actions/EditModalAction';
import EditModal from './EditModal';
import api from '../../api'; // 导入 Axios 实例

const IPForm = () => {

  const selector = useSelector(state => state.ip);
  const selector1 = useSelector(state => state.editModal);
  const dispatch = useDispatch();
  // 参数传递
  const ipAddress = selector.ipAddress;
  const remark = selector.remark;
  const rows = selector.ipEntity;
  const isOpen = selector1.isOpen;

  // 初期渲染 静态：
  useEffect(() => {
    search();
  }, [isOpen]);

  // 检索
  const search = async () => {
    const response = await api.post('/ip/search', {
      ipAddress,
      remark,
    });
    dispatch(ipSearch(response.data));
  }

  // 更新事件
  const onChange = (value, inputFlg) => {
    dispatch(ipOnChange(value, inputFlg));
  };

  // 打开编辑框
  const editMoldalOpen = () => {
    dispatch(editModalOpen());
  };

  // 打开编辑框
  const editModalOpenUp = (data) => {
    dispatch(editModalOpenUpd(data));
  };

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
    { field: 'id', headerName: 'IP地址', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'remark', headerName: '备注', width: 160, headerAlign: 'center', align: 'center' },
  ];

  return (
    <Box sx={{ width: 800 }}>
      <Typography variant="h6" gutterBottom>
        IP信息
      </Typography>
      <EditModal />
      <Grid container>
        <Grid item xs={12}>
          <TextField
            label="IP地址"
            fullWidth
            value={ipAddress}
            style={{ marginBottom: '10px', backgroundColor: '#fff' }}
            onChange={(e) => onChange(e.target.value, "1")}
            inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="备注"
            fullWidth
            value={remark}
            style={{ marginBottom: '10px', backgroundColor: '#fff' }}
            onChange={(e) => onChange(e.target.value, "2")}
            inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={search} style={{ marginBottom: '10px' }} >
            查询
          </Button>
          <Button variant="contained" color="primary" onClick={editMoldalOpen} style={{ marginBottom: '10px', marginLeft: '10px' }} >
            新增
          </Button>
        </Grid>
      </Grid>
      <Grid style={{ height: 400, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={rows}
        />
      </Grid>
    </Box>
  );
};

export default IPForm;

// src/components/InfoForm/EquipmentForm.js
import React, { useEffect }  from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { editModalOpen, editModalOpenUpd } from '../../actions/EditModalAction';
import { equipOnChange, equipSearch } from '../../actions/EquipActions';
import api from '../../api'; // 导入 Axios 实例
import EditModal from './EditModal';

const EquipmentForm = () => {
  const selector = useSelector(state => state.equip);
  const selector1 = useSelector(state => state.editModal);
  const dispatch = useDispatch();
  
  // 参数传递
  const id = selector.id;
  const equipmentName = selector.equipmentName;
  const equipmentLocation = selector.equipmentLocation;
  const equipCmt = selector.equipCmt;
  const rows = selector.equipEntity;
  const isOpen = selector1.isOpen;

  // 初期渲染 静态：
  useEffect(() => {
    search();
  }, [isOpen]);


  // 更新事件
  const onChange = (value, inputFlg) => {
    dispatch(equipOnChange(value, inputFlg));
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
    const response = await api.post('/equip/search', {
      equipmentName,
      equipmentLocation,
      equipCmt,
    });
    dispatch(equipSearch(response.data));
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
    { field: 'id', headerName: '装备ID', width: 150, hide: true, headerAlign: 'center', align: 'center' },
    { field: 'equipmentName', headerName: '装备名称', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'equipmentLocation', headerName: '装备位置', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'equipCmt', headerName: '备注', width: 160, headerAlign: 'center', align: 'center' },
  ];


  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        装备信息
      </Typography>
      <EditModal />
      <Grid container>
        <Grid item xs={12}>
          <TextField label="装备名称" 
          value={equipmentName}
          fullWidth 
          style={{ marginBottom: '10px', backgroundColor: '#fff' }} 
          onChange={(e) => onChange(e.target.value, "1")}
          inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          label="装备位置" 
          value={equipmentLocation}
          fullWidth 
          style={{ marginBottom: '10px', backgroundColor: '#fff' }} 
          onChange={(e) => onChange(e.target.value, "2")}
          inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
          label="备注" 
          value={equipCmt}
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
          <Button variant="contained" color="primary" onClick={editMoldalOpen} style={{ marginBottom: '10px', marginLeft: '5px' }} >
            新增
          </Button>
        </Grid>
      </Grid>
      <Grid style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </Grid>
    </Box>
  );
};

export default EquipmentForm;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Grid} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import EditModal from './EditModal';
import { userOnChange, userSearch } from '../../actions/UserActions';
import { editModalOpen, editModalOpenUpd } from '../../actions/EditModalAction';
import api from '../../api'; // 导入 Axios 实例

const UserInfoForm = () => {

  const selector = useSelector(state => state.userInfo);
  const selector1 = useSelector(state => state.editModal);
  const dispatch = useDispatch();
  // 参数传递
  const userId = selector.userId;
  const password = selector.password;
  const rows = selector.userEntity;
  const isOpen = selector1.isOpen;

  // 初期渲染 静态：
  useEffect(() => {
    search();
  }, [isOpen]);

  // 更新事件
  const onChange = (value, inputFlg) => {
    dispatch(userOnChange(value, inputFlg));
  };

  // 打开编辑框
  const editMoldalOpen = () => {
    dispatch(editModalOpen());
  };

  // 打开编辑框
  const editModalOpenUp = (data) => {
    console.log(data);
    dispatch(editModalOpenUpd(data));
  };

  const search = async () => {
    const response = await api.post('/user/search', {
      userId,
      password,
    });
    dispatch(userSearch(response.data));
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
    { field: 'id', headerName: '用户ID', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'password', headerName: '密码', width: 150, headerAlign: 'center', align: 'center' },
  ];

  return (
    <Box sx={{ width: 800 }}>
      <Typography variant="h6" gutterBottom>
        用户信息
      </Typography>
      <EditModal />
      <Grid container>
        <Grid item xs={12}>
          <TextField
            label="用户ID"
            value={userId}
            fullWidth
            tyle={{ marginBottom: '10px', backgroundColor: '#fff' }}
            onChange={(e) => onChange(e.target.value, "1")}
            inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
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

export default UserInfoForm;
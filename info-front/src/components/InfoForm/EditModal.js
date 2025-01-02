import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Alert, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close'; // 导入 Close 图标
import IconButton from '@mui/material/IconButton'; // 导入 IconButton 组件
import { editModalClose, editModalOnChange, editModalSubmit, editModalDelete } from '../../actions/EditModalAction';
import api from '../../api'; // 导入 Axios 实例

const EditModal = () => {
  const selector = useSelector(state => state.editModal);
  const dispatch = useDispatch();

  // 页面操作参数
  const isOpen = selector.isOpen;
  const infoFlg = selector.infoFlg;
  const opFlg = selector.opFlg;
  const errorMessage = selector.errorMessage;
  const resultFlg = selector.resultFlg;
  // 传递参数 账户
  const accountId = selector.accountId;
  const password = selector.password;
  const accountCmt = selector.accountCmt;
  const updateTime = selector.accountUpdateTime;
  // 传递参数 IP
  const ipAddress = selector.ipAddress;
  const remark = selector.remark;
  const ipUpdateTime = selector.ipUpdateTime;
  // 传递参数 装备
  const id = selector.id;
  const equipmentName = selector.equipmentName;
  const equipmentLocation = selector.equipmentLocation;
  const equipCmt = selector.equipCmt;
  const equipUpdateTime = selector.equipUpdateTime;
  // 传递参数 用户
  const userId = selector.userId;
  const userPassword = selector.userPassword;
  const userUpdateTime = selector.userUpdateTime;
  const [userFlg, setValue] = useState('0');

  // 打开编辑框
  const editMoldalClose = () => {
    dispatch(editModalClose());
  };

  // 更新事件
  const onChange = (value, inputFlg) => {
    dispatch(editModalOnChange(value, inputFlg));
  };

  // 账户
  // 提交事件
  const accountSubmit = async () => {
    const response = await api.post('/account/update', {
      accountId,
      password,
      accountCmt,
      updateTime,
      opFlg,
    });
    dispatch(editModalSubmit(response.data));
    if (response.data) {
      dispatch(editModalClose());
    }
  }
  // 删除事件
  const accountDelete = async () => {
    const response = await api.post('/account/delete', {
      accountId,
      updateTime
    });
    dispatch(editModalDelete(response.data));
    if (response.data) {
      dispatch(editModalClose());
    }
  }

  // IP
  // 提交事件
  const ipSubmit = async () => {
    const response = await api.post('/ip/update', {
      ipAddress,
      remark,
      opFlg,
      ipUpdateTime,
    });
    dispatch(editModalSubmit(response.data));
    if (response.data) {
      dispatch(editModalClose());
    }
  }
  // 删除事件
  const ipDelete = async () => {
    const response = await api.post('/ip/delete', {
      ipAddress,
      ipUpdateTime
    });
    dispatch(editModalDelete(response.data));
    if (response.data) {
      dispatch(editModalClose());
    }
  }

  // 装备
  // 提交事件
  const equipSubmit = async () => {
    const response = await api.post('/equip/update', {
      id,
      equipmentName,
      equipmentLocation,
      equipCmt,
      opFlg,
      equipUpdateTime,
    });
    dispatch(editModalSubmit(response.data));
    if (response.data) {
      dispatch(editModalClose());
    }
  }
  // 删除事件
  const equipDelete = async () => {
    const response = await api.post('/equip/delete', {
      id,
      equipUpdateTime,
    });
    dispatch(editModalDelete(response.data));
    if (response.data) {
      dispatch(editModalClose());
    }
  }

  // 用户
  // 提交事件
  const userSubmit = async () => {
    const response = await api.post('/user/update', {
      userId,
      userPassword,
      userFlg,
      opFlg,
      userUpdateTime,
    });
    dispatch(editModalSubmit(response.data));
    if (response.data) {
      dispatch(editModalClose());
    }
  }
  // 删除事件
  const userDelete = async () => {
    const response = await api.post('/user/delete', {
      userId,
      userUpdateTime,
    });
    dispatch(editModalDelete(response.data));
    if (response.data) {
      dispatch(editModalClose());
    }
  }
  return (
    <Box>
      <Dialog open={isOpen} onClose={editMoldalClose}>
        {infoFlg === "1" ? (
          <Box>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>账号信息
              <IconButton onClick={editMoldalClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {resultFlg ? (<></>) : (<><Alert sx={{ width: 500 }} severity="error">{errorMessage}</Alert></>)}
              <TextField style={{ marginTop: '10px' }}
                label="账号ID"
                onChange={(e) => onChange(e.target.value, "1")}
                value={accountId}
                inputProps={{ maxLength: 20 }}
                fullWidth
                disabled={opFlg === "1" ? true : false} />
              <TextField style={{ marginTop: '10px' }}
                label="账号密码"
                onChange={(e) => onChange(e.target.value, "2")}
                value={password}
                inputProps={{ maxLength: 20 }}
                fullWidth
                type="password" />
              <TextField style={{ marginTop: '10px' }}
                label="备注"
                onChange={(e) => onChange(e.target.value, "3")}
                value={accountCmt}
                inputProps={{ maxLength: 20 }}
                fullWidth
                multiline
                rows={3} />
            </DialogContent><DialogActions>
              <Button color="primary" onClick={accountSubmit}>
                登录
              </Button>
              {opFlg === "0" ? <></> :
                <>
                  <Button color="primary" onClick={accountDelete}>
                    删除
                  </Button></>}

            </DialogActions></Box>)
          : (<></>)}
        {infoFlg === "2" ? (
          <Box>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>IP信息
              <IconButton onClick={editMoldalClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {resultFlg ? (<></>) : (<><Alert sx={{ width: 500 }} severity="error">{errorMessage}</Alert></>)}
              <TextField style={{ marginTop: '10px' }}
                label="IP地址"
                onChange={(e) => onChange(e.target.value, "4")}
                disabled={opFlg === "1" ? true : false}
                value={ipAddress}
                inputProps={{ maxLength: 20 }}
                fullWidth />
              <TextField style={{ marginTop: '10px' }}
                label="备注"
                onChange={(e) => onChange(e.target.value, "5")}
                inputProps={{ maxLength: 20 }}
                value={remark}
                fullWidth
                multiline
                rows={3} />
            </DialogContent><DialogActions>
              <Button color="primary" onClick={ipSubmit}>
                登录
              </Button>
              {opFlg === "0" ? <></> :
                <>
                  <Button color="primary" onClick={ipDelete}>
                    删除
                  </Button></>}
            </DialogActions></Box>)
          : (<></>)}
        {infoFlg === "3" ? (
          <Box>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>装备信息
              <IconButton onClick={editMoldalClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {resultFlg ? (<></>) : (<><Alert sx={{ width: 500 }} severity="error">{errorMessage}</Alert></>)}
              <TextField style={{ marginTop: '10px' }}
                label="装备名称"
                value={equipmentName}
                onChange={(e) => onChange(e.target.value, "6")}
                inputProps={{ maxLength: 20 }}
                fullWidth />
              <TextField style={{ marginTop: '10px' }}
                label="装备位置"
                onChange={(e) => onChange(e.target.value, "7")}
                inputProps={{ maxLength: 20 }}
                value={equipmentLocation}
                fullWidth
                rows={3} />
              <TextField style={{ marginTop: '10px' }}
                label="备注"
                value={equipCmt}
                onChange={(e) => onChange(e.target.value, "8")}
                inputProps={{ maxLength: 20 }}
                fullWidth
                multiline
                rows={3} />
            </DialogContent><DialogActions>
              <Button color="primary" onClick={equipSubmit}>
                登录
              </Button>
              {opFlg === "0" ? <></> :
                <>
                  <Button color="primary" onClick={equipDelete}>
                    删除
                  </Button></>}
            </DialogActions></Box>)
          : (<></>)}

        {infoFlg === "4" ? (
          <Box>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>用户信息
              <IconButton onClick={editMoldalClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {resultFlg ? (<></>) : (<><Alert sx={{ width: 500 }} severity="error">{errorMessage}</Alert></>)}
              <TextField style={{ marginTop: '10px' }}
                label="用户Id"
                value={userId}
                onChange={(e) => onChange(e.target.value, "9")}
                inputProps={{ maxLength: 20 }}
                fullWidth />
              <TextField style={{ marginTop: '10px' }}
                label="密码"
                onChange={(e) => onChange(e.target.value, "10")}
                inputProps={{ maxLength: 20 }}
                value={userPassword}
                fullWidth
                rows={3} />
              {opFlg === "1" ? <></> :
                <>
                  <RadioGroup aria-label="gender" name="gender1" value={userFlg} onChange={(e) => setValue(e.target.value)}>
                    <FormControlLabel value="1" control={<Radio />} label="管理员" />
                    <FormControlLabel value="0" control={<Radio />} label="用户" />
                  </RadioGroup></>}

            </DialogContent><DialogActions>
              <Button color="primary" onClick={userSubmit}>
                登录
              </Button>
              {opFlg === "0" ? <></> :
                <>
                  <Button color="primary" onClick={userDelete}>
                    删除
                  </Button></>}
            </DialogActions></Box>)
          : (<></>)}
      </Dialog>
    </Box>
  );
};

export default EditModal;
// 用户登录Action
// Copyright FRANK CORPORATION. All rights reserved.

export const loginOnChange = (data, inputFlg) => ({
  type: "LOGIN_ONCHANGE",
  payload: {
    data: data,
    inputFlg: inputFlg
  },
});

export const loginRequest = (data) => ({
  type: "LOGIN_REQUEST",
  payload:{
    data: data,
  },
});


// 用户登录Reducer
// Copyright FRANK CORPORATION. All rights reserved.

const initialState = {
   userId: "",
   password: "",
   userFlg: "",
   checkFlg: true,
   errorMessage: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    // 输入数据更新
    case "LOGIN_ONCHANGE":
      const tmp = {...state};
      const inputFlg = action.payload.inputFlg;
      // “1“的情况为user修改
      if (inputFlg === "1"){
        tmp.userId = action.payload.data.trim();
      }
      // “2“的情况为password修改
      if (inputFlg === "2"){
        tmp.password = action.payload.data.trim();
      }
      return tmp;
    // 请求结果相应  
    case "LOGIN_REQUEST":
      const requestTmp = {...state};
      requestTmp.checkFlg = action.payload.data.checkResult;
      requestTmp.userFlg = action.payload.data.userFlg;
      if (!requestTmp.checkFlg){
        requestTmp.errorMessage = "账号或密码输入错误,请确认后重新登录";
      }
      return requestTmp;
    default:
      return state;
  }
};

export default LoginReducer;

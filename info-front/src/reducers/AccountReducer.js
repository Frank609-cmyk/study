// Account信息Reducer
// Copyright FRANK CORPORATION. All rights reserved.

const initialState = {
  accountId: "",
  password: "",
  accountCmt: "",
  //查询数据容器
  accountEntity: [],
};

// 装备Entity
const AccountEntity = {
  id: "",
  password: "",
  accountCmt: "",
}

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    // 输入数据更新
    case "ACCOUNT_ONCHANGE":
      const tmp = { ...state };
      const inputFlg = action.payload.inputFlg;
      // “1“的情况为accountId修改
      if (inputFlg === "1") {
        tmp.accountId = action.payload.data.trim();
      }
      // “2“的情况为password修改
      if (inputFlg === "2") {
        tmp.password = action.payload.data.trim();
      }
      // "3"的情况为accountCmt修改
      if (inputFlg === "3") {
        tmp.accountCmt = action.payload.data.trim();
      }
      return tmp;
    case "ACCOUNT_SEARCH":
      const searchTmp = { ...state };
      const data = action.payload.data.accountLst;
      searchTmp.accountEntity = data;
      return searchTmp;
    default:
      return state;
  }
};
export default AccountReducer;
// 用户信息Reducer
// Copyright FRANK CORPORATION. All rights reserved.

const initialState = {
  userId: "",
  password: "",
  //查询数据容器
  userEntity: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    // 输入数据更新
    case "USER_ONCHANGE":
      const tmp = { ...state };
      const inputFlg = action.payload.inputFlg;
      // “1“的情况为userId修改
      if (inputFlg === "1") {
        tmp.userId = action.payload.data.trim();
      }
      // “2“的情况为password修改
      if (inputFlg === "2") {
        tmp.password = action.payload.data.trim();
      }
      return tmp;
    case "USER_SEARCH":
      const searchTmp = { ...state };
      const data = action.payload.data.userLst;
      searchTmp.userEntity = data;
      return searchTmp;
    default:
      return state;
  }
};
export default UserReducer;
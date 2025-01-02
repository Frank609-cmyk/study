// Ip信息Reducer
// Copyright FRANK CORPORATION. All rights reserved.

const initialState = {
  ipAddress: "",
  remark: "",
  //查询数据容器
  ipEntity: [],
};

const IpReducer = (state = initialState, action) => {
  switch (action.type) {
    // 输入数据更新
    case "IP_ONCHANGE":
      const tmp = { ...state };
      const inputFlg = action.payload.inputFlg;
      // “1“的情况为ipAddress修改
      if (inputFlg === "1") {
        tmp.ipAddress = action.payload.data.trim();
      }
      // “2“的情况为remark修改
      if (inputFlg === "2") {
        tmp.remark = action.payload.data.trim();
      }
      return tmp;
    case "IP_SEARCH":
      const searchTmp = { ...state };
      const data = action.payload.data.ipLst;
      searchTmp.ipEntity = data;
      return searchTmp;
    default:
      return state;
  }
};
export default IpReducer;
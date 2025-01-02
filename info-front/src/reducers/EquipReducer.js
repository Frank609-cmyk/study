// 装备信息Reducer
// Copyright FRANK CORPORATION. All rights reserved.

const initialState = {
  id: "",
  equipmentName: "",
  equipmentLocation: "",
  equipCmt: "",
  //查询数据容器
  equipEntity: [],
};

const EquipReducer = (state = initialState, action) => {
  switch (action.type) {
    // 输入数据更新
    case "EQUIP_ONCHANGE":
      const tmp = { ...state };
      const inputFlg = action.payload.inputFlg;
      // “1“的情况为equipmentName修改
      if (inputFlg === "1") {
        tmp.equipmentName = action.payload.data.trim();
      }
      // “2“的情况为equipmentLocation修改
      if (inputFlg === "2") {
        tmp.equipmentLocation = action.payload.data.trim();
      }
      // "3"的情况为remark修改
      if (inputFlg === "3") {
        tmp.equipCmt = action.payload.data.trim();
      }
      return tmp;
    case "EQUIP_SEARCH":
      const searchTmp = { ...state };
      const data = action.payload.data.equipLst;
      searchTmp.equipEntity = data;
      return searchTmp;
    default:
      return state;
  }
};

export default EquipReducer;
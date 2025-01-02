// 编辑Reducer
// Copyright FRANK CORPORATION. All rights reserved.

const initialState = {
  // 开关FLg
  isOpen: false,
  // 切换Flg
  infoFlg: "1",
  // 判断FLg 编辑OR插入
  opFlg: "0",
  resultFlg: true,
  errorMessage: "",

  // 账户信息
  accountId: "",
  password: "",
  accountCmt: "",
  accountUpdateTime: "",

  // IP信息
  ipAddress: "",
  remark: "",
  ipUpdateTime: "",

  // 装备信息
  id: "",
  equipmentName: "",
  equipmentLocation: "",
  equipCmt: "",
  equipUpdateTime: "",

  // 用户信息
  userId: "",
  userPassword: "",
  userUpdateTime: "",
};

const EditModalReducer = (state = initialState, action) => {
  switch (action.type) {
    // 编辑框开关
    case "EDIT_MODAL_OPEN":
      const tmp = { ...state };
      tmp.isOpen = action.payload.isOpen;
      tmp.opFlg = action.payload.opFlg;
      // 初期化
      tmp.errorMessage = "";
      tmp.resultFlg = true;
      // 1 账户
      if (tmp.infoFlg === "1") {
        if (tmp.opFlg === "0") {
          tmp.accountId = "";
          tmp.password = "";
          tmp.accountCmt = "";
          tmp.accountUpdateTime = "";
        } else if (tmp.opFlg === "1") {
          tmp.accountId = action.payload.rowData.id;
          tmp.password = action.payload.rowData.password;
          tmp.accountCmt = action.payload.rowData.accountCmt;
          tmp.accountUpdateTime = action.payload.rowData.updateTime;
        }
        // 2 IP  
      } else if (tmp.infoFlg === "2") {
        if (tmp.opFlg === "0") {
          tmp.ipAddress = "";
          tmp.remark = "";
          tmp.ipUpdateTime = "";
        } else if (tmp.opFlg === "1") {
          tmp.ipAddress = action.payload.rowData.id;
          tmp.remark = action.payload.rowData.remark;
          tmp.ipUpdateTime = action.payload.rowData.ipupdateTime;
        }
      } else if (tmp.infoFlg === "3") {
        if (tmp.opFlg === "0") {
          tmp.id = "";
          tmp.equipmentName = "";
          tmp.equipmentLocation = "";
          tmp.equipCmt = "";
          tmp.equipUpdateTime = "";
        } else if (tmp.opFlg === "1") {
          tmp.id = action.payload.rowData.id;
          tmp.equipmentName = action.payload.rowData.equipmentName;
          tmp.equipmentLocation = action.payload.rowData.equipmentLocation;
          tmp.equipCmt = action.payload.rowData.equipCmt;
          tmp.equipUpdateTime = action.payload.rowData.equipUpdateTime;
        }
      } else if (tmp.infoFlg === "4") {
        if (tmp.opFlg === "0") {
          tmp.userId = "";
          tmp.userPassword = "";
          tmp.userUpdateTime = "";
        } else if (tmp.opFlg === "1") {
          tmp.userId = action.payload.rowData.id;
          tmp.userPassword = action.payload.rowData.password;
          tmp.userUpdateTime = action.payload.rowData.userUpdateTime;
        }
      }
      return tmp;
    // 控件切换
    case "EDIT_MODAL_INFO_SWITCH":
      const infoFlgtmp = { ...state };
      console.log(action.payload.infoFlg)
      infoFlgtmp.infoFlg = action.payload.infoFlg;
      return infoFlgtmp;
    // 输入数据更新
    case "EDIT_MODAL_ONCHANGE":
      const changeImp = { ...state };
      const inputFlg = action.payload.inputFlg;
      // “1“的情况为accountId修改
      if (inputFlg === "1") {
        changeImp.accountId = action.payload.data.trim();
      }
      // “2“的情况为password修改
      if (inputFlg === "2") {
        changeImp.password = action.payload.data.trim();
      }
      // "3"的情况为accountCmt修改
      if (inputFlg === "3") {
        changeImp.accountCmt = action.payload.data.trim();
      }
      // "4"的情况为ipAddress修改
      if (inputFlg === "4") {
        changeImp.ipAddress = action.payload.data.trim();
      }
      // "5"的情况为remark修改
      if (inputFlg === "5") {
        changeImp.remark = action.payload.data.trim();
      }
      // "6"的情况为equipmentNamek修改
      if (inputFlg === "6") {
        changeImp.equipmentName = action.payload.data.trim();
      }
      // "7"的情况为equipmentLocation修改
      if (inputFlg === "7") {
        changeImp.equipmentLocation = action.payload.data.trim();
      }
      // "8"的情况为equipCmt修改
      if (inputFlg === "8") {
        changeImp.equipCmt = action.payload.data.trim();
      }
      // "9"的情况为userId修改
      if (inputFlg === "9") {
        changeImp.userId = action.payload.data.trim();
      }
      // "10"的情况为userPassword修改
      if (inputFlg === "10") {
        changeImp.userPassword = action.payload.data.trim();
      }
      return changeImp;
    case "EDIT_MODAL_UPDATE_RESULT":
      const searchTmp = { ...state };
      searchTmp.resultFlg = action.payload.result;
      if (!searchTmp.resultFlg) {
        searchTmp.errorMessage = "该账户Id已存在或已被其他用户修改，请确认";
      }
      return searchTmp;
    case "EDIT_MODAL_UPDATE_DELETE":
      const deleteTmp = { ...state };
      deleteTmp.resultFlg = action.payload.result;
      if (!deleteTmp.resultFlg) {
        deleteTmp.errorMessage = "该账户Id已被其他用户删除或修改";
      }
      return deleteTmp;
    default:
      return state;
  }
};
export default EditModalReducer;
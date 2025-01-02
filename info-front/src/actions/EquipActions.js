// 装备信息Action
// Copyright FRANK CORPORATION. All rights reserved.

export const equipOnChange = (data, inputFlg) => ({
    type: "EQUIP_ONCHANGE",
    payload: {
        data: data,
        inputFlg: inputFlg
    },
});

export const equipSearch = (data) => ({
    type: "EQUIP_SEARCH",
    payload: {
        data: data,
    },
});
// 用户信息Action
// Copyright FRANK CORPORATION. All rights reserved.

export const userOnChange = (data, inputFlg) => ({
    type: "USER_ONCHANGE",
    payload: {
        data: data,
        inputFlg: inputFlg
    },
});

export const userSearch = (data) => ({
    type: "USER_SEARCH",
    payload: {
        data: data,
    },
});
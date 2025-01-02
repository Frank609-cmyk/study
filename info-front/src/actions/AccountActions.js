// 账户信息Action
// Copyright FRANK CORPORATION. All rights reserved.

export const accountOnChange = (data, inputFlg) => ({
    type: "ACCOUNT_ONCHANGE",
    payload: {
        data: data,
        inputFlg: inputFlg
    },
});

export const accountSearch = (data) => ({
    type: "ACCOUNT_SEARCH",
    payload: {
        data: data,
    },
});
// IP信息Action
// Copyright FRANK CORPORATION. All rights reserved.

export const ipOnChange = (data, inputFlg) => ({
    type: "IP_ONCHANGE",
    payload: {
        data: data,
        inputFlg: inputFlg
    },
});

export const ipSearch = (data) => ({
    type: "IP_SEARCH",
    payload: {
        data: data,
    },
});
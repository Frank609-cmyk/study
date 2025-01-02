// 编辑框Action
// Copyright FRANK CORPORATION. All rights reserved.

export const editModalOpen = () => ({
    type: "EDIT_MODAL_OPEN",
    payload: {
        isOpen: true,
        opFlg: "0",
    },
});

export const editModalOpenUpd = (data) => ({
    type: "EDIT_MODAL_OPEN",
    payload: {
        isOpen: true,
        opFlg: "1",
        rowData: data,
    },
});

export const editModalClose = () => ({
    type: "EDIT_MODAL_OPEN",
    payload: {
        isOpen: false,
    },
});

export const editModalInfoSwitch = (infoFlg) => ({
    type: "EDIT_MODAL_INFO_SWITCH",
    payload: {
        infoFlg: infoFlg,
    },
});

export const editModalOnChange = (data, inputFlg) => ({
    type: "EDIT_MODAL_ONCHANGE",
    payload: {
        data: data,
        inputFlg: inputFlg
    },
});

export const editModalSubmit = (result) => ({
    type: "EDIT_MODAL_UPDATE_RESULT",
    payload: {
        result: result,
    },
});

// Also a side note, i was looking for disabling eslint for one line in html. this works :thumbsup:
// Frank Lee
export const editModalDelete = (result) => ({
    type: "EDIT_MODAL_UPDATE_DELETE",
    payload: {
        result: result,
    },
});
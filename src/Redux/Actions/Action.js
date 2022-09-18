import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_PRODUCT } from "../constant"

export const addProduct = data => {
    return {
        type: ADD_PRODUCT,
        data: data
    }
}
export const editProduct = data => {
    return {
        type: EDIT_PRODUCT,
        data: data
    }
}
export const deleteProduct = data => {
    return {
        type: DELETE_PRODUCT,
        id: data
    }
}

export const getAllProducts = data => {
    return {
        type: GET_ALL_PRODUCT,
    }
}

export const getProduct = data => {
    return {
        type: GET_PRODUCT,
        id: data
    }
}
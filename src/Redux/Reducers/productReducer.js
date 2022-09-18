import { ADD_PRODUCT } from "../constant";

const initialState = {
    products: []
};

const products = (state = initialState, action) => {
    switch (action?.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: action?.data
            }
        default: return state
    }
}
export default products
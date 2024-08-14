import { ADD_to_Cart, Remove_to_Cart } from "../../constants";

export default function CardItems(state = [], action) {
    switch (action.type) {
        case ADD_to_Cart:
            return [
                ...state, 
                { cardData: action.data }
            ];

        case Remove_to_Cart:
            return state.filter(item => item.cardData.pid !== action.data.pid);

        default:
            return state;
    }
}

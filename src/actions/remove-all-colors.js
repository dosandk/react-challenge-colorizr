import { REMOVE_ALL_COLORS } from '../constants';

export default function removeAllColors(data) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ALL_COLORS,
            data
        });
    }
}
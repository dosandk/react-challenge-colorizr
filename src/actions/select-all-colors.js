import { SELECT_ALL_COLORS } from '../constants';

export default function selectAllColors(data) {
    return (dispatch) => {
        dispatch({
            type: SELECT_ALL_COLORS,
            data
        });
    }
}
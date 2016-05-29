// import { SELECT_COLOR } from '../constants';

export default function setMixedColors(data) {
    return (dispatch) => {
        dispatch({
            type: 'SET_MIXED_COLORS',
            data
        });
    }
}
// import { SELECT_COLOR } from '../constants';

export default function setShadedColors(data) {
    return (dispatch) => {
        dispatch({
            type: 'SET_SHADED_COLORS',
            data
        });
    }
}
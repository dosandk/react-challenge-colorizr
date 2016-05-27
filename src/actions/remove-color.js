import { REMOVE_COLOR } from '../constants';

export default function removeColor(data) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_COLOR,
            data
        });
    }
}
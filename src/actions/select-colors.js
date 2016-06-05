import { SELECT_COLORS } from '../constants';

export default (data) =>
    (dispatch) => {
        dispatch({
            type: SELECT_COLORS,
            data
        });
    }
import { CHANGE_THEME } from '../constants';

export default function changeTheme(data) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_THEME,
            data
        });
    }
}
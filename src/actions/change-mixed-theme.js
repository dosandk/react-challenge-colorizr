import { CHANGE_MIXED_THEME } from '../constants'

export default function changeMixedTheme(data) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_MIXED_THEME,
            data
        });
    }
}
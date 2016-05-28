import { CHANGE_SHADE_THEME } from '../constants'

export default function changeShadeTheme(data) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SHADE_THEME,
            data
        });
    }
}
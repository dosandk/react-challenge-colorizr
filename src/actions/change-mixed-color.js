import * as Constants from '../constants'

export default function changeMixedColor(data) {

    return (dispatch) => {
        dispatch({
            type: Constants.CHANGE_MIXED_COLOR,
            data: {
                mixedColor: data.mixedColor,
                mixedColors: data.mixedColors
            }
        });
    }
}
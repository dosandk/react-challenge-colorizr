import * as Constants from '../constants'

export default function changeMainColor(data) {

    return (dispatch) => {
        dispatch({
            type: Constants.CHANGE_MAIN_COLOR,
            data: {
                mainColor: data.mainColor,
                shadedColors: data.shadedColors,
                mixedColors: data.mixedColors
            }
        });
    }
}
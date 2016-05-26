export function selectColor(data) {
    return (dispatch) => {
        dispatch({
            type: 'SELECT_COLOR',
            data
        });
    }
}

export function removeColor(data) {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_COLOR',
            data
        });
    }
}
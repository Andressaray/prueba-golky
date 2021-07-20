export const userTextReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [action.payload, ...state]
        default:
            return ''
    }
}

import {
    SELECT_TOP_100,
    LOADING,
} from "./actions";
const id = 0;
const defaultState = {
    selectTopSongs: [],
    isLoading: false
}
export function musics(state = defaultState, action) {
    switch (action.type) {

        case SELECT_TOP_100:
            return {
                ...state,
                id,
                selectTopSongs: action.payload.selectTopSongs,
            }

        case LOADING:
            return {
                ...state,
                id,
                isLoading: action.payload.isLoading,
            }
        default:
            return state
            break;

    }
}

// const removeDuplicateAlbum = (topSongs) => {
//     const uniqueArray = []

//     topSongs.forEach(element => {
//         if (uniqueArray.filter(item => item.title === element.title).length === 0) {
//             uniqueArray.push(element);
//         }
//     });

//     return uniqueArray
// }


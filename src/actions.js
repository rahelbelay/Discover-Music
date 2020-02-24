export const SEARCH_GENRE = 'SEARCH_GENRE';
export const SELECT_TOP_100 = 'SELECT_TOP_100';
export const LOADING = 'LOADING';
export const SELECT_TOP_ALBUMS = 'SELECT_TOP_ALBUMS';

export function actionSearchGenre(albums) {
    return {
        type: SEARCH_GENRE,
        payload: {
            albums,
        }
    }
}
export function actionTopSongs(selectTopSongs) {
    return {
        type: SELECT_TOP_100,
        payload: {
            selectTopSongs,

        }
    }
}
export function actionTopAlbums(selectTopAlbums) {
    return {
        type: SELECT_TOP_ALBUMS,
        payload: {
            selectTopAlbums,

        }
    }
}
export function actionLoading(isLoading) {
    return {
        type: LOADING,
        payload: {
            isLoading,
        }
    }
}
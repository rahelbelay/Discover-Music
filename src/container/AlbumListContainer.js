import {
    connect
} from 'react-redux';

import AlbumList from '../component/AlbumList';

function mapStateToProps(state) {

    return {
        musics: state.selectTopSongs
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(AlbumList);


const removeDuplicateAlbum = (topSongs) => {
    const uniqueArray = []

    topSongs.forEach(element => {
        if (uniqueArray.filter(item => item.album.id === element.album.id).length === 0) {
            uniqueArray.push(element);
        }
    });

    return uniqueArray
}
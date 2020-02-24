import {
    connect
} from 'react-redux';

import MusicList from '../component/MusicList';
import { SEARCH_GENRE } from '../actions';

function mapStateToProps(state) {

    return {
        musics: state.selectTopSongs
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(MusicList);
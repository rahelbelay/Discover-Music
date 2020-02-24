import {
    connect
} from 'react-redux';

import ArtistName from '../component/ArtistName';
import { SEARCH_GENRE } from '../actions';

function mapStateToProps(state) {
    return {
        musics: state.selectTopSongs
    }
}
const reduxConnector = connect(mapStateToProps);
export default reduxConnector(ArtistName);
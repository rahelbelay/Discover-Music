import {
    connect
} from 'react-redux';

import ArtistSearch from '../component/ArtistSearch';
import { actionTopSongs, actionLoading } from '../actions';
import Axios from 'axios';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: async (query) => {
            dispatch(actionLoading(true));
            const result = await Axios.get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${query}`);
            console.log(result.data)
            dispatch(actionTopSongs(result.data))
        },
        title: 'artists'
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(ArtistSearch)

// const result = await Axios.get(`https://cors-anywhere.herokuapp.com/https://theaudiodb.com/api/v1/json/1/search.php?s=${query}`, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });

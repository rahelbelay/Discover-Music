import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { musics } from './reducers';
import MusicList from './container/MusicListContainer'
import { Provider } from 'react-redux';
import ArtistName from './container/ArtistNameContainer';
import AlbumList from './container/AlbumListContainer';
import Footer from './Footer';
import Header from './Header';
// import BioList from './component/BioList'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const store = createStore(musics, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
    console.log(store.getState());
});

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/top-song/:trackId">
                            <div className="app">
                                <div>
                                    <MusicList />
                                </div>
                                <Footer />
                            </div>
                        </Route>
                        <Route path="/top-album/:artistId">
                            <div className="app">
                                <div>
                                    <AlbumList />
                                </div>
                                <Footer />
                            </div>
                        </Route>
                        <Route path="/">
                            <div className="app">
                                <div>
                                    <ArtistName />
                                </div>
                                <Footer />
                            </div>
                        </Route>

                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

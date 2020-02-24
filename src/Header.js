import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ArtistSearchContainer from './container/ArtistSearchContainer';

function Header() {
    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }

    return (
        <header className="header">
            <Button variant="contained" onClick={handleClick}>Home</Button>
            <ArtistSearchContainer />
            <div></div>
        </header>
    );
}

export default Header;
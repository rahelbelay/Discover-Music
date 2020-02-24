import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';



export default function AlbumList() {
    let history = useHistory();

    function handleClick(id) {
        history.push(`/top-song/${id}`);
    }
    const [musics, setMusic] = useState([])
    const { artistId } = useParams()

    const getAlbums = async (artistId) => {
        const result = await Axios.get(`https://theaudiodb.com/api/v1/json/1/album.php?i=${artistId}`);

        setMusic(result.data)
    }
    useEffect(() => {
        getAlbums(artistId)
    }, [])

    if (musics && musics.length === 0) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="albums">
                {musics && musics.album && musics.album.length > 0 && musics.album.map(album =>
                    <Card className="album-card">
                        <CardActionArea onClick={() => handleClick(album.idAlbum)}>

                            <div className="album-container" onClick={handleClick}>
                                <img className="album-img" src={album.strAlbumThumb}></img>
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" component="h2">
                                    {album.strAlbum}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>


                )}
            </div >
        )
    }
}


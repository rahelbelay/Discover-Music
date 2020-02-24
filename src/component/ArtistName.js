import React from 'react';
import MaterialLink from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PublicIcon from '@material-ui/icons/Public';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function ArtistName({ musics }) {
    let history = useHistory();

    function handleClick(id) {
        history.push(`/top-album/${id}`);
    }

    return (
        <div style={{ padding: '2em' }}>
            {musics && musics.artists && musics.artists.map(artist => (
                <div key={artist.idArtist} className="artist-info" >
                    <Card>
                        <div className="card-container">
                            <div className="artist-container">
                                <img className="artist-img" src={artist.strArtistThumb}></img>
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {artist.strArtist}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ overflow: 'scroll', height: '340px' }}>
                                    {artist.strBiographyEN}
                                </Typography>

                                <IconButton aria-label="delete">
                                    <MaterialLink href={`https://${artist.strFacebook}`} target="_blank">
                                        <FacebookIcon />
                                    </MaterialLink>
                                </IconButton>

                                <IconButton aria-label="delete">
                                    <MaterialLink href={`https://${artist.strTwitter}`} target="_blank">
                                        <TwitterIcon />
                                    </MaterialLink>
                                </IconButton>

                                <IconButton aria-label="delete">
                                    <MaterialLink href={`https://${artist.strWebsite}`} target="_blank">
                                        <PublicIcon />
                                    </MaterialLink>
                                </IconButton>

                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => handleClick(artist.idArtist)}>
                                        Browse album
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}
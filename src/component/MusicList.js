import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import Icon from '@material-ui/core/Icon';
import Axios from 'axios';

export default function TrackList() {
    const [musics, setMusic] = useState([])
    const { trackId } = useParams()

    const getAlbums = async (trackId) => {
        const result = await Axios.get(`https://theaudiodb.com/api/v1/json/1/track.php?m=${trackId}`);
        setMusic(result.data)
    }

    useEffect(() => {
        getAlbums(trackId)
    }, [])

    if (musics && musics.length === 0) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell >Play</TableCell>
                                <TableCell >Title</TableCell>
                                <TableCell >Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {musics && musics.track && musics.track.length > 0 && musics.track.map(track =>
                                <TableRow key={track.idTrack}>
                                    <Icon className="fas fa-play-circle" fontSize="small" />
                                    <TableCell>{track.strTrack}</TableCell>
                                    <TableCell>{Math.floor(track.intDuration / 60000) + ':' + Math.floor(track.intDuration % 60000 / 1000)}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

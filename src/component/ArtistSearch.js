import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class ArtistSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            disableSearch: true
        };
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="search">
                    <TextField label={`Search for ${this.props.title}`} variant="outlined" value={this.state.text}
                        onChange={this._handleChange} />
                    <Button variant="contained" type="submit" disabled={this.state.disableSearch}>Search</Button>
                </div>
            </form>
        )
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.text)
        this.setState({
            text: '',
            disableSearch: true

        })
    }

    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        });

        if (event.target.value.length > 0) {
            this.setState({ disableSearch: false })
        } else {
            this.setState({ disableSearch: true })
        }
    }
}

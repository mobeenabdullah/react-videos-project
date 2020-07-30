import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyBOGd6VjAG5G4W-SYpBhm6LAF11P8epmNQ';

class App extends React.Component {
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY,
            },
        });
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;

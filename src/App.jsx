import { useEffect } from 'react';
import './App.css';
import Login from './compnents/Login/Login';
import { getTokenFromResponse } from './state/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './compnents/Player/Player';
import { useStateValue } from './state/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then(userd => {
        console.log('====================================');
        console.log(userd);
        console.log('====================================');
        dispatch({
          type: "SET_USER",
          user: userd
        })
      });
      spotify.getUserPlaylists().then(playlist => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlist
        })
      });
      spotify.getPlaylist("28ou5yIungf0dtK3QxTU1j")
        .then(response => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response
          })
        })
    }
  }, [])

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        )
          :
          (
            <Login />
          )
      }
    </div>
  );
}

export default App;

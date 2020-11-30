

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: null
    // token: "BQCAtkrCshpL42WbQZB4iyU9-mKGE5AiSu2lZRL8pffEwY858vd6hi1RU7MqALE5-wxWOE0u71qdEUQVSWuD8lJ6v9jYHjKpQcOVoVyre-YcCs7GwQ7hPfhJ33wacH-1aTL6mhVU2YHjwzwn8ngu_4A1OlFmiDkI3H3rltFUoR3gS5pMTuMZ"
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;

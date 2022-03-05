//import "./App.css";

function App() {
  const CLIENT_ID = "27d94f3bea17489aaff2d53dc9f31772";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div>
      <header>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      </header>
    </div>
  );
}

export default App;

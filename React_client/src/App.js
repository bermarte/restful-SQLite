import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import Albums from './components/Albums';
import Artists from './components/Artists';
import Genres from './components/Genres';
import MediaTypes from './components/MediaTypes';
import Playlists from './components/Playlists';
import Tracks from './components/Tracks';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    getRoot: ''
  }

  getResponse = async() => {
    const response = await fetch('/api/');
    const body = await response.text();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  }

  getTracks = async() => {
    const response = await fetch('/api/Tracks');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  componentDidMount() {
    //api/
    this.getResponse()
      .then(res => {
        //const someData = res;
        this.setState({ getRoot: res });
      })
  }

  render() {
    const { getRoot } = this.state;

    function albums(){
      console.log('albums');
    }

    return (
      <div className="App">
        <Router>
          <h2>{getRoot}</h2>
          <ButtonGroup size="lg" className="mb-2">
            <Link to="/albums">
              <Button onClick={albums}>Albums</Button>
            </Link>
            <Link to="/artists">
              <Button>Artists</Button>
            </Link>
            <Link to="/genres">
              <Button>Genres</Button>
            </Link>
            <Link to="/media-types">
              <Button>Media-types</Button>
            </Link>
            <Link to="/playlists">
              <Button>Playlists</Button>
            </Link>
            <Link to="/tracks">
              <Button>Tracks</Button>
            </Link>
          </ButtonGroup>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Albums /> */}
            <Route path="/albums" component={Albums} />
            {/* <Artists /> */}
            <Route path="/artists" component={Artists} />
            {/* <Genres /> */}
            <Route path="/genres" component={Genres} />
            {/* <Genres /> */}
            <Route path="/media-types" component={MediaTypes} />
            {/* <Genres /> */}
            <Route path="/playlists" component={Playlists} />
            {/* <Genres /> */}
            <Route path="/tracks" component={Tracks} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h3>Home</h3>
  </div>
);

export default App;

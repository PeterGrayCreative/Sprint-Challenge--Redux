import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li key={smurf.id}>
                <p>{smurf.name}</p>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, {getSmurfs})(App);

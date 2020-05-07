import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import RockPicker from '../RockPicker/RockPicker';

class App extends React.Component{

  componentDidMount(){
    console.log( 'in componentDidMount, props:', this.props );
  } // end componentDidMount

  render() {
    console.log( this.props );
    return (
      <div className="App">
        <header className="App-header">
          <h2>App.js</h2>
          <p>Rocks: { this.props.reduxState }</p>
        </header>
        
        <h2>Chinmaya Rock Picker</h2><RockPicker dispatch ={this.props.dispatch} />
        <h2>Halima Rock Picker</h2><RockPicker dispatch ={this.props.dispatch} />
        <h2>Norbu Rock Picker</h2><RockPicker dispatch ={this.props.dispatch} />
        <h2>Sue Rock Picker</h2><RockPicker dispatch ={this.props.dispatch} />
      
      </div>
    ); // end return
  } //end render
} // end component

const putReduxStateOnProps = ( reduxState ) => ( { reduxState } );

export default connect( putReduxStateOnProps )(App);

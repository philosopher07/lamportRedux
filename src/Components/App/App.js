import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component{

  clickHandler = () =>{
    console.log( 'in clickHandler' );
    this.props.dispatch( { type: 'click', asdf: 'thingy' } );
  } // end clickHandler

  unclickHandler = () =>{
    console.log( 'in unclickHandler' );
    this.props.dispatch( { type: 'unclick' } );
  } // end clickHandler

  tacoClickHandler = () =>{
    console.log( 'in unclickHandler' );
    this.props.dispatch( { type: 'taco' } );
  } // end clickHandler

  componentDidMount(){
    console.log( 'in componentDidMount, props:', this.props );
  } // end componentDidMount

  render() {
    console.log( this.props );
    return (
      <div className="App">
        <header className="App-header">
          <h2>App.js</h2>
          <p>Clicks: { this.props.reduxState }</p>
        </header>
        <button onClick={ this.clickHandler }>Click Me</button><button onClick={ this.unclickHandler }>Unclick Me</button><button onClick={ this.tacoClickHandler }>I'm Hungry</button>
      </div>
    ); // end return
  } //end render
} // end component

const putReduxStateOnProps = ( reduxState ) => ( { reduxState } );

export default connect( putReduxStateOnProps )(App);

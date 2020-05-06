import React from 'react';

class RockPicker extends React.Component {
state = {
    rocks: 0
}

clickHandler = () => {
    console.log( 'in clickHandler' );
}
    render() {
        return (
            <div>
                <h2>Rock Picker</h2>
                <h3>Rocks: 1234</h3>
                <button onClick={this.clickHandler}>Pickup rock</button>
            </div>
        ); // end return   
    } // end return
} // end class

export default RockPicker;
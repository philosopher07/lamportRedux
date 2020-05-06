import React from 'react';

class RockPicker extends React.Component {
    state = {
        rocks: 0
    }

    clickHandler = (event, property) => {
        console.log('in clickHandler');
        if (property === 'pickup') {
            this.setState({
                rocks: this.state.rocks + 1
            })
            this.props.dispatch({ type: 'pickup', payload: 1 });
        } else if (property === 'drop') {
            this.setState({
                rocks: this.state.rocks - 1
            })
            this.props.dispatch({ type: 'drop', payload: 1 });
        } else if (property === 'scoop') {
            this.setState({
                rocks: this.state.rocks + 5
            })
            this.props.dispatch({ type: 'pickup', payload: 5 })
        } else if (property === 'dropAll') {
            this.setState({
                rocks: 0
            })
            this.props.dispatch({ type: 'drop', payload: this.state.rocks })

        }
    }
        render() {
            return (
                <div>
                    <h2>Rock Picker</h2>
                    <h3>Rocks: {this.state.rocks}</h3>
                    <button onClick={(event) => this.clickHandler(event, 'scoop')}>Scoop 5 rock</button>
                    <button onClick={(event) => this.clickHandler(event, 'pickup')}>Pickup rock</button>
                    <button onClick={(event) => this.clickHandler(event, 'drop')}>Drop rock</button>
                    <button onClick={(event) => this.clickHandler(event, 'dropAll')}>Drop All</button>


                </div>
            ); // end return   
        } // end return
    } // end class

    export default RockPicker; 
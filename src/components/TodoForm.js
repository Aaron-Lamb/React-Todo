import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    render() {
        return(
            <form>
                <input
                type='text'
                id='item'
                name='item'
                value={this.state.item}
                />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}
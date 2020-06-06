import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }


    itemChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    itemSubmit = event => {
        event.preventDefault();
        this.props.addItem(event, this.state.item)
        let listItem = this.state.item;
        console.log(listItem);
        window.localStorage.setItem('item', JSON.stringify(listItem));
        this.setState({
            item: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.itemSubmit}>
                <input
                type='text'
                id='item'
                name='item'
                value={this.state.item}
                onChange={this.itemChange}
                />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}

export default TodoForm;
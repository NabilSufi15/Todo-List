import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            //if todo is completed put a line through, else do nothing
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo; //destructuring 
        return (
            //setting style for checkbox and delete button
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
                    
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}



const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: '#none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem

import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

 class TODO extends Component {
    render() {
        return (
            <div>
                <h1>TODO</h1>
                {this.props.todos.map((todo)=>(
                   <div key={todo.id}>
                    <TodoItem  todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
                    </div>
                )
                )
                }
            </div>
        )
    }
}

    TODO.propTypes={
        todos:PropTypes.array.isRequired
 }

export default TODO

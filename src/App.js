import React, { Component } from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Todo from './components/TODO';
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'
import About from './components/pages/About'
import Axios from 'axios';
import Useroutput from './components/Useroutput';
import Userinput from './components/Userinput';



 class App extends Component {
    state={
        // todos:[]        
        username:'udaya'
        
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(res=>this.setState({todos:res.data}))
    }
    markComplete=(id)=>{
       
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    delTodo =(id)=>{
        // console.log(list);
        // list = list.filter(todo=>todo.id!==id)
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>this.setState({
            todos:this.state.todos.filter(todo=>todo.id!==id)
            }))
           
    }
    addTodo=(title)=>{
        // const todo={
        //     id:uuid.v4(),
        //     title,
        //     completed:false,
        // }
        Axios.post("https://jsonplaceholder.typicode.com/todos",{
            title,
            completed:false
        })
        .then(res =>this.setState({
            todos:[...this.state.todos,res.data]
        }))
        
        

    }
    
    eventHandler =(event)=>{
            this.setState({
                username:event.target.value
            })

    }
    render() {
        
        return (
            // <Router>
            // <div className='App'>
            //     <Layout /> 
            //     <Route exact path='/' render={props=>(
            //         <React.Fragment>
            //         <AddTodo addTodo={this.addTodo}/>
            //         <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            //         </React.Fragment>
            //     )} />
            //     <Route path="/about" component={About} /> 
            // </div>
            // </Router>
            <div className="App">
                <Useroutput username="udaya" />
                <Useroutput username={this.state.username}/>
                <Userinput username={this.state.username} Handler={this.eventHandler}  />
            </div>
        )
    }
}

export default App

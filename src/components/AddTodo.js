import React, { Component } from 'react'
import '../App.css'

 class AddTodo extends Component {
     state={
         title:''
     }
     onChange=(e)=> this.setState({title:e.target.value     })
     
     submit=(e)=>{
         e.preventDefault();
         this.props.addTodo(this.state.title)
         this.setState({title:''})
     }
    render() {
        return (
           <form onSubmit={this.submit} style={{display:'flex'}}>
               <input type="text" name='title' placeholder="Add todo..." 
               style={{flex:'5',padding:'10px'}}
               value={this.state.title}
               onChange={this.onChange}
               />
               <input type="submit" value="submit" className="btn" style={{flex:'1'}}></input>
           </form>
        )
    }
}

export default AddTodo

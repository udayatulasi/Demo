// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PostList from './components/PostList';
// import Postfrom from './components/Postfrom';

// function App() {
//   return (
//     <div className="App">
//       {/* <PostList /> */}
//       {/* <Postfrom /> */}
      
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       newitem:'',
       list: []
    }
  }
  
  addItem=()=>{
    if(this.state.newitem !==""){
      const newitem={
        id:Date.now(),
        value:this.state.newitem,
        isDone:false,
      };
      const list =[...this.state.list];
      list.push(newitem)
      this.setState({
        list,
        newitem:""
      });
    }
  }

  delete(id){
    // console.log(e)
    const  list =[...this.state.list];
    const updatedList = list.filter(item=>item.id!== id);
    this.setState({
      list:updatedList
    })
  }

  updateInput=(e)=>{
    this.setState({newitem:e.target.value})
  }
  render() {
    return (
      <div>
        <h1 className="app-title">TO-DO</h1>
        <div className='container'>
          ADD an item 
          <br></br>
          <input 
          type="text"
          className="input-text"
          placeholder="Add a to-do"
          required
          value={this.state.newitem}
          onChange={this.updateInput} />
          <button className='add-btn' onClick={this.addItem}
          disabled={!this.state.newitem.length}>
            ADD todo</button>
          <div className="List">
            <ul>
              {
                this.state.list.map(item=>{
                  return(<li key={item.id}>
                    <input
                    type ="checkbox"
                    name="isDone"
                    checked={item.isDone}
                    onChange={()=>{}}
                    />
                    {item.value}
                    <button className='btn'
                    onClick={()=>this.delete(item.id)}>
                      Delete</button>
                  </li>)
                })
              }
              {/* <input type="checkbox" name ="" id ="" />
              apply for job
              <button className="btn">Delete</button> */}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App

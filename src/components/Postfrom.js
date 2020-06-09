import React, { Component } from 'react'
import Axios from 'axios'

 class Postfrom extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userid:'',
              title: '',
              body:''
         }
     }
     chnageHandler=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
        }
         submitHandler=(e)=>{
                e.preventDefault()
                console.log(this.state)
                Axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
                .then(e=>{
                    console.log(e)
                })
                .catch(e=>{
                    console.log(e)
                })
         }
     
    render() {
        const {userid,title,body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                         type='text' 
                         name='userid' 
                         value={userid}
                         onChange={this.chnageHandler}
                         />
                        <input type='text' 
                        name='title' 
                        value={title}
                         onChange={this.chnageHandler}
                         />
                        <input type='text'
                         name='body'
                         value ={body}
                         onChange={this.chnageHandler}
                         />
                        <button >submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Postfrom

import React, { Component } from 'react'
import Axios from 'axios'
import Postfrom from './Postfrom'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts :[]
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response.data)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
               list of posts {
                   posts.length?
                   posts.map(post => <div key={post.id}>{post.title}</div>):""
               }
               <Postfrom />
            </div>
        )
    }
}

export default PostList

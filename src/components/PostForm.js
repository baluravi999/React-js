import React, { Component } from 'react'
import Axios from 'axios'

 class PostForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userid:'',
              title:'',
              body:''
         }
     }
     onchangehandler=event=>{
         this.setState({
             [event.target.name]:event.target.value})
     }
     submithandler=e=>{
         e.preventDefault()
         console.log(this.state)
         Axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
         .then(response=>{
             console.log(response)
         })
         .catch(error=>{
             console.log('error response')
         })
     }
    render() {
        const {usrid,title,body} = this.state
        return (
            
            <div>
                <form onSubmit={this.submithandler}>
                <div>
                <input type='text' name='userid' value={usrid} onChange={this.onchangehandler}></input>
                </div>
                <div>
                <input type='text' name='title' value={title} onChange={this.onchangehandler}></input>
                </div>
                <div>
                <input type='text' name='body' value={body} onChange={this.onchangehandler}></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
            </div>
        )
    }
}

export default PostForm

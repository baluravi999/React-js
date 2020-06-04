import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState({})
     const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const clickHandler=()=>{
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
    
        axios.get('https://jsonplaceholder.typicode.com/posts/'+idFromButtonClick)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
           })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
   
    return (
        <div>
            {/* <ul>
                {
                posts.map(post=><li key={post.id}>{post.title}</li>)

                }
            </ul> */}
            <input type='text' value={id} onChange={(e)=>setId(e.target.value)}></input>
            <button onClick={clickHandler}>Fetch Data</button>
            <div>{posts.title}</div>
            
        </div>
    )
}

export default DataFetching

import {PostsData} from '../data/PostsData'


//useState
import {useState} from 'react'

// components
import PostItem from './PostItem'

export default function Posts(){
    const [posts,setPosts] = useState(PostsData)
    return (
        <section className='posts'>
            {
                posts.map(({id,title,image,description,category,authorId},index) =>
                    <PostItem key={index} id={id} title={title} image={image} description={description} category={category} authorId={authorId}
                    />)
            }
        </section>
    )
}
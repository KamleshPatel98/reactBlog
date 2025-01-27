import Posts from './Posts'

export default function PostItem({id,title,image,description,category,authorId}){
    return (
        <article>
            <div className="mt-3">
                <img src={image} alt="{image}" width={100} height={100} loading='lazy'  />
                <div>{title}</div>
                <div>{authorId}</div>
                <div>{category}</div>
                <div>{description}</div>
            </div>
        </article>
    )
}
import Posts from './Posts'

import Card from 'react-bootstrap/Card';

export default function PostItem({id,title,image,description,category,authorId}){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href="#">{category}</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}
import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../../products';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export default function Chicken() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className='flex grow'>
                <Card>
                <Card.Img variant="top" src={'/images/hot wings.jpg'} />
                    <Card.Body className='d-flex justify-content-between align-items-center p-6'>
                        <Card.Title>
                            <h1>Chicken</h1>
                            <h6>All served with French Fries</h6>
                        </Card.Title>
                        <h1>
                            {showMore ? 
                                <AiFillMinusCircle onClick={() => setShowMore(!showMore)} /> :
                                <AiFillPlusCircle onClick={() => setShowMore(!showMore)} />
                            }
                        </h1>
                    </Card.Body>
                    {showMore &&
                        <ListGroup className="list-group-flush">
                            {products.map((product) => {
                                if (product.group === 'Chicken') {
                                    return <MenutItemFooter key={product.id} product={product} />
                                } else {
                                    return []
                                }
                            })}                    
                        </ListGroup>
                    }  
                </Card>     
        </div>
    )
}

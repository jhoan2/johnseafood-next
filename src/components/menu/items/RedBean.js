import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../../products';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export default function RedBean() {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className='flex grow'>
                <Card>
                <Card.Img variant="top" src={'/images/redbean.jpg'} />
                    <Card.Body className='d-flex justify-content-between align-items-center p-6'>
                        <Card.Title>
                            <h1>Red Bean</h1>
                            <h6>Served With White Rice</h6>
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
                                if (product.group === 'Red Bean') {
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

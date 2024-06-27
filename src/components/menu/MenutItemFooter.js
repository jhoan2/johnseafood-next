import React from 'react'
import { ListGroup } from 'react-bootstrap';

function MenutItemFooter({product}) {
    return (
        <div>
                <ListGroup.Item className="d-flex justify-content-between" key={product.id}  >
                <p>{product.title}</p>
                <p>${product.price.toFixed(2)}</p>
                </ListGroup.Item>
        </div>
    )
}


export default MenutItemFooter


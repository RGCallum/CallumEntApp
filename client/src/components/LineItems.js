import React from 'react'

const LineItems = ({lineItems, deleteLineItem}) => {
const lineItemList = lineItems.length ? (
    lineItems.map(lineItem => {
        return (
            <div className="collection-item" key={lineItem.id}>
                {lineItem.content}
                <br/>
                <button onClick = {() => {deleteLineItem(lineItem.id)}}>delete</button>
            </div>
        )
    })
) : (
    <p className = 'center'>You done son!</p>
)
    return(    
<div className = 'lineItems collection'>
{lineItemList}
</div>
    )
}


export default LineItems;
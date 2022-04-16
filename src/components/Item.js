import React from 'react';

const Item = ({item}) => {
    console.log(item.name);
    console.log(item.status);
    return (
        <div>
            <li>{item.name}</li>
            <li>{item.status}</li>
        </div>
    )
}

export default Item;

import React from 'react';

export default function Title({name,title}) {
    return(
        <div className="product-title">
            <h3>
                {name} <strong>{title}</strong>
            </h3>
        </div>
    )
}
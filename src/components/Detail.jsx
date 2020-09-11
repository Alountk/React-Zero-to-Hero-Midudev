import React from 'react'

export default function Detail({params}) {
    console.log(params);
    return (
        <div>
            Detail id {params.id}
        </div>
    )
}

import React,{ memo } from 'react'
import { useState } from "react"
function Sample({ data }) {

    return (

        <div>
            {data.map((data1,id) => {
                return <div key={id}>
                    {console.log(data)}
                    <p>name: {data1.name}</p>
                    <p>profession: {data1.profession}</p>
                    <br></br>
                </div>
            })}

        </div>
    )
}

export default memo(Sample)

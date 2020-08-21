import React, { Component } from 'react'
import Child from './Child'

export default class DemoProps extends Component {
    render() {
        let product = {
            id:1,
            name:'Iphonex',
            price:1000,
            image:'https://picsum.photos/200/200'
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <Child productProps={product}/>
                    </div>
                   
                </div>
  
            </div>
        )
    }
}

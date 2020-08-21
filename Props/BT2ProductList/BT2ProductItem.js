import React, { Component } from 'react'

export default class BT2ProductItem extends Component {
    render() {
        let {productItem} = this.props;
        return (
            <div className="card text-left">
                    <img className="card-img-top" src={productItem.image} alt />
                    <div className="card-body" style={{height:'200px',fontSize:18,fontWeight:'bold'}}>
                        <h4 className="card-title" style={{height:'50px'}}>{productItem.name}</h4>
                        <div className="card-text" style={{height:'50px'}} >{productItem.price}$</div>
                        <button className="btn" style={{ background: '#000', color: '#fff' }}>Add to carts</button>
                    </div>
                </div>
        )
    }
}

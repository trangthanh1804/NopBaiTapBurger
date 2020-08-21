import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = () => {
        alert('Hello fe 44')
    }


    showMessage = (message) => {
        alert("Hello "+ message)
    }
    render() {
        return (
            <div>
                <h3>Cách 1 handle event</h3>

                {/*Cách 1 truyền trực tiếp callback function*/}
                <button onClick={this.handleClick}>Click me!!</button>
                <button onClick={this.showMessage.bind(this,'Thanh')}>showMess</button>
                <br /> 
                <h3>Cách 2 handle event</h3>
                {/*Cách 2 truyền function gián tiếp*/}
                <button onClick={()=> {
                    this.handleClick()
                }}>Click me!!</button>
                <button onClick={()=>{
                    this.showMessage('Hào')
                }}>showMess</button>

            </div>
        )
    }
}

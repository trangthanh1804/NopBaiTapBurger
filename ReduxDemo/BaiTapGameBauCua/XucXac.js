import React, { Component } from 'react'
import {connect} from 'react-redux';
import styleBauCua from './BaiTapGameBauCua.module.css';
class XucXac extends Component {


    render() {
        let numberNN = Date.now();
        let keyframeCSS = `@keyframes animBauCua${numberNN} { 
            0% {left: -50px}
            25% {left: 50px}
            50%{left: 0px}
            75%{left: -50px}
            100%{left: 50px}
        }
        .xucXac{
            left: 0px;
            position: relative;
            animation: animBauCua${numberNN} 1s;
        }`
        console.log(numberNN);
        return (
            <div style={{display:'flex',height:'100%',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                <style>
                    {keyframeCSS}
                </style>
                <div className='mt-3 xucXac'>
                        <img style={{width:50}} src={this.props.xucXac[0].hinhAnh} />
                </div>
                <div className="mt-3 xucXac">
                        <img style={{width:50}} src={this.props.xucXac[1].hinhAnh} />
                </div>
                <div className="mt-3 xucXac">
                        <img style={{width:50}} src={this.props.xucXac[2].hinhAnh} />
                </div>
                <button onClick={() => {
                    this.props.playGame();
                }} className="btn btn-success pl-5 pr-5 mt-5 pt-3 pb-3" style={{fontSize:25}}>Xốc</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        xucXac: state.BaiTapGameBauCuaReducer.xucXac
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let num = 0;
            var fDispatchRandom = setInterval(() => {
                num +=1;
                dispatch({
                    type:'RANDOM_XUCXAC'
                })
                if(num >3) {
                    //Dừng 
                    clearInterval(fDispatchRandom);
                    dispatch({
                        type:'PLAY_GAME'
                    })
                }
            }, 1000);
           
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XucXac)




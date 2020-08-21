import React, { Component } from 'react'
import BanCuoc from './BanCuoc'
import KetQuaTroChoi from './KetQuaTroChoi'
import styleGame from './BaiTapXucXac.module.css'
export default class BaiTapXucXac extends Component {
    render() {
        return (
            <div className={styleGame.gameXucXac} style={{backgroundImage:'url("./img/gameXucXac/bgGame.png")',width:'100%',height:'100%',position:'fixed',left:0,top:0}}>
                
                <BanCuoc />
                <KetQuaTroChoi />
            </div>
        )
    }
}

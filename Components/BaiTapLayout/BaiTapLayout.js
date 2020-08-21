import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTProductList from './BTProductList'
import BTFooter from './BTFooter'

export default class BaiTapLayout extends Component {



    render() {
        return (
            <div>
                <BTHeader />
                <BTSlider />
                <BTProductList />
                <BTFooter />

            </div>
        )
    }
}

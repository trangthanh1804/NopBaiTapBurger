import React, { Component } from 'react'

export default class DemoClass extends Component {


    //Mình có thể định nghĩa thêm các thuộc tính và phương thức khác



    //Phương thức render => Chứa nội dung của giao diện component này
    render() {
        //Bên trong phương thức có thể khai báo biến hàm ...

        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src="holder.js/100x180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>

        )
    }
}

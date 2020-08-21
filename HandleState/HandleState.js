import React, { Component } from 'react'

export default class HandleState extends Component {

    //state: Thuộc tính có sẵn của class Component => Cho phép thay đổi giá trị và render lại giao diện

    state = {
        isLogin: false
    }
    //Tạo ra 2 thuộc tính là 
    // isLogin: nếu = true => Hello Hào
    // isLogin: false => Hiển thị nút đăng nhập
    // isLogin = false;
    userName = 'Hào';
    renderContent = () => {
        if(this.state.isLogin){
            return <h1>
                Hello {this.userName}
            </h1>
        }
        return <button onClick={()=>{
            this.login();
        }}>Đăng nhập</button>
    }

    //Định nghĩa phương thức xử lý sự kiện login
    login = () => {
        //Không gán giá trị các thuộc tính của state trực tiếp
        // this.state.isLogin = true;

        // const newState = {
        //     isLogin : true
        // }

        //this.setState là phương thức có sẵn của component nhận vào state mới thay cho giá trị state cũ và tự động gọi lại hàm render 
        //setState là phương thức bất đồng bộ
        this.setState({
            isLogin : true
        },()=>{
            //Tham số thứ 2 của hàm setState là callback chạy sau khi state thay đổi
            console.log(this.state.isLogin);
        });

   
    }

    render() {
        return (
            <div>
                {/* {this.isLogin ? <h1>Hello {this.userName}</h1> : <button>Đăng nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}

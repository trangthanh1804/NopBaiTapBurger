//Cài đặt state reducer 
const stateDefault = {
    stateGioHang:[
    ]
}



const BaiTapGioHangReducer = (state=stateDefault,action) => {
    console.log('reducer',action);
    switch(action.type){
        case 'THEM_GIO_HANG':{
            let gioHangCapNhat = [...state.stateGioHang];
            let index = gioHangCapNhat.findIndex(spGH=> spGH.maSP === action.spGH.maSP);
            if(index !== -1){
                gioHangCapNhat[index].soLuong+=1;
            }else {
                gioHangCapNhat.push(action.spGH);
            }
            //giống setState (hành động gán lại state mới)
            state.stateGioHang = gioHangCapNhat;
            return {...state}
        }
        case 'XOA_GIO_HANG':{ 
            let gioHangCapNhat = [...state.stateGioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index!==-1)
            {
                gioHangCapNhat.splice(index,1);
            };
            //Gán lại giá trị mới cho stateGioHang (tương tự setState)
            state.stateGioHang = gioHangCapNhat;
            return {...state}

        }
        case  'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.stateGioHang];
            let index = gioHangCapNhat.findIndex(spGH=>spGH.maSP ===action.maSP);
            if(index!==-1){
                if(action.tangGiam){
                    gioHangCapNhat[index].soLuong += 1;
                }else {
                    if(gioHangCapNhat[index].soLuong>1){
                        gioHangCapNhat[index].soLuong -= 1;
                    }else {
                        alert('Số lượng tối thiểu là 1')
                    }
                }
            }
            return {...state,stateGioHang:gioHangCapNhat}
        }
        default: return {...state}
    }
    
}
export default BaiTapGioHangReducer;




// const sanPham = {maSP:1,tenSP:'iphone'}

// sanPham.maSP = 2;
// sanPham.tenSP = 'iphonex'
// sanPham = {maSP:2,tenSP:'iphonex'}
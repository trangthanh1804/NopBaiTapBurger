
const stateDefault = {
    danhSachCuoc: [
        { ma: 'cua', hinhAnh: './img/gameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/gameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/gameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/gameBauCua/tom.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/gameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/gameBauCua/bau.png', diemCuoc: 0 },
    ],
    diemThuong: 500,
    xucXac: [
        { ma: 'cua', hinhAnh: './img/gameBauCua/cua.png' },
        { ma: 'nai', hinhAnh: './img/gameBauCua/nai.png' },
        { ma: 'ga', hinhAnh: './img/gameBauCua/ga.png' },
    ]
}

const BaiTapGameBauCuaReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            let mangCuocUpdate = [...state.danhSachCuoc];
            //Tìm trong mảng cược có quân cược được click sẽ xử lý tăng giảm
            let index = mangCuocUpdate.findIndex(qc => qc.ma === action.ma);
            //Xem coi người dùng bấm tăng hay giảm
            if (index !== -1) {
                //Nếu vi phạm 1 trong 2 điều kiện

                if (action.tangGiam) {
                    if (state.diemThuong > 0) //Nếu điểm thướng lớn hơn 100 cho phép đặt cược
                    {
                        mangCuocUpdate[index].diemCuoc += 100;
                        state.diemThuong -= 100;
                    }
                } else {
                    if (mangCuocUpdate[index].diemCuoc > 0) { //Nếu điểm đặt cược lớn hơn 100 mới cho giảm 
                        mangCuocUpdate[index].diemCuoc -= 100;
                        state.diemThuong += 100;

                    }
                }

            }
            //Cập nhật lại state mới
            return { ...state, danhSachCuoc: mangCuocUpdate };
        }

        case 'RANDOM_XUCXAC': {
            //Xử random mảng xúc xắc
            let mangXucXacNgauNhien = [];
            //Chạy vòng lặp random 3 lần tạo ra 3 con xúc xắc đưa vào mảng
            for (var i = 0; i < 3; i++) {
                //Random ra 1 số ngẫu nhiên từ 0 -> 5
                let soNgauNhien = Math.floor(Math.random() * 6);
                //Tạo ra 1 viên xúc xắc từ số ngẫu nhiên
                let xucXacNgauNhien = {
                    ma: state.danhSachCuoc[soNgauNhien].ma,
                    hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh
                }
                //Bỏ xúc xắc ngẫu nhiên vào mảng
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            console.log(mangXucXacNgauNhien);

            //Cập lại mảng các con xúc xắc = mảng xúc xắc ngẫu nhiên
            return {...state,xucXac:mangXucXacNgauNhien}
        }

        case 'PLAY_GAME': {
            let mangXucXacNgauNhien = [...state.xucXac];
            //Xử lý trúng thưởng
            for (var xucXacNN of mangXucXacNgauNhien) {
                //Lấy từng con xúc xắc ra so sánh với mảng cược
                let indexMangCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma);
                if (indexMangCuoc !== -1) {
                    state.diemThuong += state.danhSachCuoc[indexMangCuoc].diemCuoc;
                }
            }
            //Xử lý hoàn tiền
            for (var quanCuoc of state.danhSachCuoc) {
                //Kiểm tra quân cược tồn tại trong mảng xúc xắc không nếu tồn tại + tiền
                let indexXucXac = mangXucXacNgauNhien.findIndex(xx => xx.ma === quanCuoc.ma);
                if (indexXucXac !== -1) {
                    state.diemThuong += quanCuoc.diemCuoc;
                }
            }
            //Xử lý reset mảng danhSachCuoc
            // state.danhSachCuoc = [...stateDefault.danhSachCuoc]
            // state.danhSachCuoc = [
            //     { ma: 'cua', hinhAnh: './img/gameBauCua/cua.png', diemCuoc: 0 },
            //     { ma: 'nai', hinhAnh: './img/gameBauCua/nai.png', diemCuoc: 0 },
            //     { ma: 'ga', hinhAnh: './img/gameBauCua/ga.png', diemCuoc: 0 },
            //     { ma: 'tom', hinhAnh: './img/gameBauCua/tom.png', diemCuoc: 0 },
            //     { ma: 'ca', hinhAnh: './img/gameBauCua/ca.png', diemCuoc: 0 },
            //     { ma: 'bau', hinhAnh: './img/gameBauCua/bau.png', diemCuoc: 0 },
            // ];
            state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                return { ...quanCuoc, diemCuoc: 0 }
            });
            return { ...state };
        }
        default: return { ...state }
    }
}

export default BaiTapGameBauCuaReducer
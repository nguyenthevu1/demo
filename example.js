
let textinput = document.querySelector('.name');

//oninput nhập text vào thì sẽ hiển thị ra luôn 
textinput.oninput = function(e) {
    console.log(e.value);
}


//Json
// 1. là định dạng dữ liệu ( chuỗi)
// 2. javascript object notation
// 3. 
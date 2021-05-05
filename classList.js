// classList property
var cl = document.querySelector('.box');


//add thêm class
cl.classList.add('red');

//contain kiểm tra xem class có tồn tọi hay không
console.log(cl.classList.contains('red'));

//xóa class

cl.classList.remove('red');

// toggle có class thì xóa,không có thì thêm class

setInterval(() =>{ //hàm tuần hoàn lặp lại theo thời gian 
    
    cl.classList.toggle('red');
}, 500);



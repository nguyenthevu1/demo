

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

// Tostring  chuyển các kiểu về kiểu string
console.log(languages.toString())
// Join  thêm các kí tự để lối  các phần tử
console.log(languages.join('*'))
// Pop  xóa và lấy ra phần tử cuối mảng
console.log(languages.pop())
console.log(languages)
// Push thêm phần tử vào cuối mảng
console.log(languages.push('c++'))
// Shift  xóa và lấy ra phần tử đầu  mảng
console.log(languages.shift())
// Unshift thêm phần tử vào đầu mảng
console.log(languages.unshift())
// Splicing xóa 1 phần tử ở vị trí bất kỳ
languages.splice(1,1,'Dart') // vị trí + số lượng phần tử muốn xóa + chèn thêm phần tử và 
console.log(languages)
// Concat nối 2 mảng với nhau
var languages1 = [
    'Csharp',
    'Java'
];
console.log(languages.concat(languages1))
// Slicing cắt mảng 
console.log(languages.slice(1,2)) // vị trí đầu + vị trí cuối


//Math.random() chọn ngẫu nhiên 

var random = Math.floor(Math.random() * 6)

var  bonus = [
    "10 coin",
    "20 coin",
    "30 coin",
    "40 coin",
    "50 coin",
    "60 coin"
]
console.log(bonus[random])


// cách tạo ra tỉ lệ phần trăm
var random2 = Math.floor(Math.random() * 100)
if(random2 < 10) {
   console.log("60 coin");
}

else if(random2 < 20)
{
    console.log("50 coin")
}


//Callback

/**
 * là hàm (function) được truyền qua đôi số
 * khi gọi hàm khác
 */
// function myfunction(parma) {
//     if(typeof parma === "function") {
//         parma("Nguyễn Thế Vũ")
//     }
// }

// function Callback(value) {
//     console.log("Value : ", value);
//  }

//  myfunction(Callback)

// cách tạo ra phương thức callback

Array.prototype.map2 = function(callback) {
    var output = [], arraylength = this.length;

    for(var i = 0; i < arraylength; ++i) {
        var result = callback(this[i]);
        output.push(result);
    }
    return output;
}

var course = [
    "javascript",
    "php",
    "ruby"
];

var html = course.map2(function(value) {
  return value;
});

console.log(html);

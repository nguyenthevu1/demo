// tạo phương thức map
Array.prototype.map2 = function(callback) {
    var output = [], arraylength = this.length;

    for(var i = 0; i < arraylength; ++i) {
        var result = callback(this[i]);
        output.push(result);
    }
    return output;
}

// tạo phương thức foreach()
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index],index,this );
        }
    }
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

course.forEach2( function(course, index,array) {
    console.log(course, index,array);
});


// tạo phương thức filter(in ra tất cả các giá trị thỏa mãn điểu kiện và cho vào 1 mảng mới)
Array.prototype.filter2 = function(callback) {
    var output = [];

    for(var index in this) {
       if(this.hasOwnProperty(index)) {
          var result = callback(this[index])
          if(result) {
              output.push(this[index]);
          }
       }
    }
    return output;
}

 var course2 = [
     {
         name:"javascript",
         coin: 680
     },
     {
         name:"php",
         coin: 860
     },
     {
         name:"ruby",
         coin: 980
     }
 ];

 var filterr = course2.filter2(function(course) {
     return course.coin > 700;
 });

 console.log(filterr);


 // tạo phươgn thức some() kiểm tra có tối thiểu phần tử nào trong mảng thỏa mãn điều kiện hay không true/false
Array.prototype.some2 = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
};

// every()
Array.prototype.every2 = function(callback) {
    // var output = true;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index,this)
            // if(!result) có duy nhất 1 lần sai 
            if(result == false) {
                return false;
            }
        }
    }
    return true;
};

 var course3 = [
     {
         name:"javascript",
         coin: 680,
         isFinish: false
     },
     {
         name:"php",
         coin: 860,
         isFinish: true
     },
     {
         name:"ruby",
         coin: 980,
         isFinish: true
     }
 ];

var result = course3.some2(function(course, index, array) {
    return course.isFinish;
});

console.log(result);

//tạo phương thức every() kiểm tra toàn bộ phần có đúng hay không

var result2 = course3.every2(function(course) {
    return course.isFinish;
});
console.log(result2);


// xóa các phần tử trùng nhau 


var array =  [
    "javascript",
    "php",
    "ruby",
    "javascript",
    "php",
    "ruby"
];


function loop(i,n,cb) {
    for(var i = 0; i < n; i++) {
        
    }
}

loop(0,array.length-1,function(i) {
    console.log(array[i]);
});
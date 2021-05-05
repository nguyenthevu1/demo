// attribute events

var h1Element = document.querySelectorAll('h1');


for(let i = 0; i < h1Element.length; ++i) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}

//  preventDefault() loại bỏ hành động mặc định của element ấy

var aElement = document.links;
for(let i =0; i < aElement.length; ++i) {
    aElement[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://www.facebook.com/')) { 
            e.preventDefault(); // k phải là facebook thì sẽ không làm gì cả 
        }
    }
}

// stopPropagation() ngăn chặn lan truyền

// document.querySelector('div').onclick = function() {
//     console.log('DIV');
// }

// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation(); //ngăn k cho gọi lên element div
//     console.log('Click me!');
// }



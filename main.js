
var element = document.querySelector('div'); 

// element.setAttribute('id','hovaten');

// console.log(element.getAttribute('class'));

//innerText dùng để lấy ra text trong 1 element hoặc có thể thay thế text trong element

console.log(element.innerText);

// textContent trả lại text thật của element
console.log(element.textContent);

//innerHTML có thể thêm được tất cả text element và attribute vào 1 element 

element.innerHTML = '<h1>Đây là heading</h1>';

//outerHTML thêm và có thể thay đổi chính element đó
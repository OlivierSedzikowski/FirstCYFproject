let element_list = document.getElementById('list');
let new_li = document.createElement('li');
new_li.innerText = 'banana';

element_list.appendChild(new_li);
let new_li2 = document.createElement('li');
new_li2.innerText = 'grappes';

element_list.appendChild(new_li2);
let new_li3 = document.createElement('li');
new_li3.innerText = 'watermelon';

element_list.appendChild(new_li3);
var image_url_list;

// Describe this function...
function display() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", image_url_list[0]);
}


image_url_list = ['https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
display();


document.getElementById('previous').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  image_url_list.unshift(image_url_list.pop());
  display();

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  image_url_list.push(image_url_list.shift());
  display();

});

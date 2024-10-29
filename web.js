const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the 'active' class
    });

    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && event.target !== bar && event.target !== close) {
            nav.classList.remove('active'); // Remove 'active' class if clicking outside
        }
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Remove 'active' class when close button is clicked
    });
}


// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");


// smallimg[0].onclick = function(){
//     MainImg.src =smallimg[0].src;
// }

// smallimg[1].onclick = function(){
// smallimg.src = smallimg[1].src;
// }
// smallimg[2].onclick = function(){
// smallimg.src = smallimg[2].src;
// }
// smallimg[3].onclick = function(){
//     MainImg.src = smallimg[3].src;
// }

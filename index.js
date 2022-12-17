
// function that will change background image
function changeBg(){
    
    const images=  [
        backgroundImage =   
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg1.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg2.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg3.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg4.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg5.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg6.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg7.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg8.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg9.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg10.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg11.jpg)'],
        ['linear-gradient(to bottom, rgba(0, 2, 10, 0.52), rgba(8, 1, 6, 0.493))',
        'url(/bg12.jpg)'],
]
const header =  document.querySelector('.header')
const bg = images[Math.floor(Math.random()* images.length)]; 
header.style.backgroundImage = bg ; 


}

setInterval(changeBg, 1500)

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('ul')

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

const logo =  document.querySelector('.logo')
const close = document.querySelector('.close-btn')
const open = document.querySelector('.modal')
const img = document.querySelector('.images')
const popUp = document.getElementById('popup')
let show = document.getElementById('show')





const photos = [
    
    
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image7.jpg',
    './images/image8.jpg',
    './images/image9.jpg',
    './images/image10.jp',
    './images/image11.jp',
    './images/image12.jp',
    './images/image13.jp',
    './images/image14.jp',
    './images/image15.jp',
    './images/image16.jp',
    './images/image17.jp',
    './images/image18.jp',
    './images/image19.jp',
    './images/image20.jp',
    './images/image21.jp',
    './images/image22.jp',
    './images/image23.jp',
    './images/image24.jp',
    './images/image25.jp',
    './images/image26.jp',
    './images/image27.jp',
    './images/image28.jp',
    './images/image29.jp',
    './images/image30.jp',
    './images/image31.jp',
    './images/image32.jp',
    './images/image33.jp',
    './images/image34.jp',
    './images/image35.jp',
    './images/image36.jp',
    './images/image37.jp',
    './images/image38.jp',
    './images/image39.jp',
    './images/image40.jp',
    './images/image41.jp',
    './images/image42.jp',
    './images/image43.jp',
    './images/image44.jp',
    './images/image45.jp',
    './images/image46.jp',
    './images/image47.jp',
    './images/image48.jp',
    './images/image49.jpg',
    './images/image50.jpg',
    './images/image51.jpg',
    './images/image52.jpg',
]

// function that will open the popup-image from the image gallery
logo.addEventListener('click',  () =>{
open.showModal()
   show.setAttribute("src", "/logo2.png" )

})
// function that will close the popup-image from the image gallery
close.addEventListener('click', () =>{
    open.close();
    
})
// function that will show the image that was clicked from the image gallery
img.addEventListener('click', (e) => {
     result = e.target
     const res = result.getAttribute("src" )
    show.setAttribute("src", res )
    open.showModal()
    if( res === null){
       
        open.close();
    }
})


    



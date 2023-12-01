// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}


let sections= document.querySelector('section');
let Navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
           
            navlinks.forEach(links => {
                links.classlist.remove ('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add ('active');
            });
        }
    }); 

    let header = document.querySelector('header');

    header.classlist.toggle('sticky', window.scrollY > 100);

   // remove toggle icon and navbar when click navbar links (scroll) 
   menuIcon.classlist.remove('bx-x');
   navbar.classList.remove('active')
}


function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icons");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function socialclick(platform){
    if (platform == 'youtube'){
        window.open('https://www.youtube.com/@GeneralThin');
    }
    if (platform == 'facebook'){
        window.open('https://www.facebook.com/sky.determination')
    }
}

function clickEmail() {
  window.open("https://mail.google.com/mail/?view=cm&to=nguyendonthinhlunax@gmail.com", "_blank");
}

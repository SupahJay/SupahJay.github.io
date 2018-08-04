window.onload = () =>{
Barba.Dispatcher.on('newPageReady', function() {
    window.location.pathname == "/portifolio.html"? portifolio():clean();
/*document.getElementById("script")? */
});
function portifolio(){   
document.body.style.background = '#fdfdfd';
document.body.style.paddingTop = '90px';
scrollBy(0, localStorage.getItem("scrollPos"));
window.onscroll = () => {localStorage.setItem("scrollPos", scrollY)}
}
function clean(){   
document.body.style.background = '';
document.body.style.paddingTop = '';
window.onscroll = () => {}
}
localStorage.setItem("scrollPos", "0")
}
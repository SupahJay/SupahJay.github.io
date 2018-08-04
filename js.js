Barba.Dispatcher.on('newPageReady', function() {
    window.location.pathname == "/portifolio.html"? portifolio():clean();
/*document.getElementById("script")? */
});
function portifolio(){   
document.body.style.background = '#fdfdfd';
document.body.style.paddingTop = '90px';
}
function clean(){   
document.body.style.background = '';
document.body.style.paddingTop = '';
}
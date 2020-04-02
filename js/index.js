function setHeader(){
    var title = document.getElementById('header-title');
    title.setAttribute('style','color: white;');
    function changeHeader(){
        if(title.style.color === 'yellow'){
            title.style.color = 'white';
        }else{
            title.style.color = 'yellow';
        }
    }

    setInterval(changeHeader,1000);
}

setTimeout(setHeader,2000);
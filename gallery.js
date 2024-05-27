// gallery.js
function openbox(url, description){
    var box = document.getElementById('box');
    document.getElementById('shadowing').style.display='block';

    var content = document.getElementById('boxcontent');
    content.style.padding="0";
    content.innerHTML = "<div class='image-container'><img src='" + url + "' /></div><p>" + description + "</p>";
    box.style.display = 'block'; 
}

function closebox(){
    var box = document.getElementById('box');
    document.getElementById('shadowing').style.display='none';
    box.style.display = 'none';
    var content = document.getElementById('boxcontent');
    content.innerHTML = ''; 
}

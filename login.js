function Login(form) {
    username = new Array("semih", "nanobiolog");
    password = new Array("3169", "802313");
    
    
    if (form.username.value == username[0] && form.password.value == password[0]||form.username.value == username[1] && form.password.value == password[1]) {
    window.open('main.html');
    /*close window after delay*/
    const myWindow = window.open("https://i.kym-cdn.com/photos/images/original/001/780/157/09f.jpg");
setTimeout(function() {myWindow.close()}, 2500);
    return false;
    }
    else {
    alert("YANLIS GIRDIN YAPRAGAM.\n!!!!Tekrar gircen!!!!.");
    self.open("https://media.tenor.com/ikvEMCIBsJUAAAAd/patrick-bateman-stare-into-your-soul.gif");
    //return previous page after delay
    setTimeout(function() {window.history.back()}, 2500);
    
    }
    return true;
    }
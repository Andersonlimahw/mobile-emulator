var phone;

function openPhone() {
    phone = window.open("", "myWindow", "width=380,height=680 ");
    phone.document.write("<iframe src='http://fabricadoapp.com' width='100%' height='640' frameborder='0' scrolling='yes'></iframe>");
}

function closePhone() {
    phone.close();
    phone.hide();
}


var tablet;

function openTablet() {
    tablet = window.open("", "myWindow", "width=1024,height=768 ");
    tablet.document.write("<iframe src='http://fabricadoapp.com'                          width='100%' height='100%' frameborder='0' ></iframe>");
}

function closePhone() {
    phone.close();
    phone.hide();
}
// year copyright
$('.yearcopyright').html(new Date().getFullYear());  
    
function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
  

// typed js
var typed = new Typed('.typed', {
    strings: ["Distributor Barang.", "Perhotelan.", "Air Mineral.","Perkebunan"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
  });


// library darkmode.js  
const options = {
    label: '🌓', // default: ''    
    bottom: '130px', // default: '32px'
    right: '15px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,

    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();




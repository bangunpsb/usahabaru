// formspree send message
window.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("my-form");
    let button = document.getElementById("my-form-button");
    let status = document.getElementById("my-form-status");

    function success() {
        form.reset();
        status.innerHTML = "Terimakasih, Pesan Anda Disampaikan ke Email Admin!";
        setTimeout(function () {
            status.style.display = "none";
        }, 5000);
    }

    function error() {
        status.innerHTML = "Oops! Ada Kesalahan.";
    }

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
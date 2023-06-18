document.getElementById('links').onclick = function () {
    window.alert("My Fb: Clark Panucat ");
}

window.addEventListener('scroll',function () {
    var clark = document.querySelector('header');
    clark.classList.toggle('active',window.scrollY > 0);
})

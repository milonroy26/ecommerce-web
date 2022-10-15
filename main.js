const menubtn = document.getElementById('menu-btn');
menubtn.addEventListener('click', () =>{
    document.getElementById('side-menu').style.display = 'block';
    document.getElementById('menu-btn').style.display = 'none';
    document.getElementById('close-btn').style.display = 'block';
})

const closebtn = document.getElementById('close-btn');
closebtn.addEventListener('click', () =>{
    document.getElementById('side-menu').style.display = 'none';
    document.getElementById('menu-btn').style.display = 'block';
    document.getElementById('close-btn').style.display = 'none';
})
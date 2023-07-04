document.querySelector('.next-room-btn').addEventListener('click', function() {
    document.querySelector('.effect-1').style.display = 'none';
    document.querySelector('.effect-2').style.display = 'block';
    document.querySelector('.effect-3').style.display = 'none';
    document.querySelector('.effect-4').style.display = 'none';
});

document.querySelector('.next-room-btn-2').addEventListener('click', function() {
    document.querySelector('.effect-2').style.display = 'none';
    document.querySelector('.effect-3').style.display = 'block';
    document.querySelector('.effect-1').style.display = 'none';
    document.querySelector('.effect-4').style.display = 'none';
});

document.querySelector('.next-room-btn-3').addEventListener('click', function() {
    document.querySelector('.effect-3').style.display = 'none';
    document.querySelector('.effect-4').style.display = 'block';
    document.querySelector('.effect-2').style.display = 'none';
    document.querySelector('.effect-1').style.display = 'none';
});

document.querySelector('.next-room-btn-4').addEventListener('click', function() {
    document.querySelector('.effect-3').style.display = 'none';
    document.querySelector('.effect-1').style.display = 'block';
    document.querySelector('.effect-2').style.display = 'none';
    document.querySelector('.effect-4').style.display = 'none';
    
});

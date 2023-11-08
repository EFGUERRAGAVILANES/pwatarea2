const mainImage = document.getElementById('main-image');

mainImage.addEventListener('mouseover', function() {
    mainImage.src = 'https://cope-cdnmed.cope.es/resources/jpg/9/6/1571356594769.jpg';
});

mainImage.addEventListener('mouseout', function() {
    mainImage.src = 'https://www.1000noticias.com.py/wp-content/uploads/2022/07/AI.jpg';
});


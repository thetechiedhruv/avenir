// Image Section

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


// Blog Section

// Variables
var currentPage = 1;
var cardsPerPage = 3;
var cards = document.getElementsByClassName('card');

// Show the initial set of cards
showCards();

// Function to show the cards based on the current page
function showCards() {
  var startIndex = (currentPage - 1) * cardsPerPage;
  var endIndex = startIndex + cardsPerPage;

  // Hide all cards
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove('show-card');
  }

  // Show the cards for the current page
  for (var j = startIndex; j < endIndex && j < cards.length; j++) {
    cards[j].classList.add('show-card');
  }
}

// Function to navigate to the previous page
function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    showCards();
  }
}

// Function to navigate to the next page
function nextPage() {
  var totalPages = Math.ceil(cards.length / cardsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showCards();
  }
}
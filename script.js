let scrollUpButton = document.getElementById('scroll-up-button');
let scrollDownButton = document.getElementById('scroll-down-button');
let pauseButton = document.getElementById('pause-button');
let scrollText = document.getElementById('scroll-text');

let fontSize = 16; // Initial font size in pixels

// Function to increase the font size
function increaseFontSize() {
  fontSize += 2; // Increase font size by 2 pixels
  scrollText.style.fontSize = `${fontSize}px`; // Apply the new font size to the scroll text element
}

// Function to decrease the font size
function decreaseFontSize() {
  if (fontSize > 8) {
    fontSize -= 2; // Decrease font size by 2 pixels
    scrollText.style.fontSize = `${fontSize}px`; // Apply the new font size to the scroll text element
  }
}

function copyText() {
  var scrollText = document.getElementById("scroll-text").innerText;
  document.getElementById("textContent").value = scrollText;
}


function toggleTitleList() {
  var titleList = document.getElementById("titleList");
  if (titleList.style.display === "none") {
    titleList.style.display = "block";
  } else {
    titleList.style.display = "none";
  }
}

function copyTitle(title) {
  document.getElementById("headingText").value = title;
}



function toggleParagraphList() {
  var paragraphList = document.getElementById("paragraphList");
  if (paragraphList.style.display === "none") {
    paragraphList.style.display = "block";
  } else {
    paragraphList.style.display = "none";
  }
}

function copyParagraph(index) {
  var paragraphs = document.getElementsByTagName("p");
  if (index >= 0 && index < paragraphs.length) {
    document.getElementById("paragraphText").value = paragraphs[index].innerText;
  }
}

function scrollUp() {
  scrollText.classList.remove('scrolling-down');
  if (scrollText.classList.contains('scrolling-up')) {
    scrollText.classList.remove('scrolling-up');
    scrollText.classList.remove('paused');
    scrollUpButton.innerText = 'Scroll up';
  } else {
    scrollText.classList.add('scrolling-up');
    scrollUpButton.innerText = 'Stop ';
  }
}

function scrollDown() {
  scrollText.classList.remove('scrolling-up');
  if (scrollText.classList.contains('scrolling-down')) {
    scrollText.classList.remove('scrolling-down');
    scrollText.classList.remove('paused');
    scrollDownButton.innerText = 'Scroll down';
  } else {
    scrollText.classList.add('scrolling-down');
    scrollDownButton.innerText = 'Stop';
  }
}

function pauseScroll() {
  scrollText.classList.add('paused');
}
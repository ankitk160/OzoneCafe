// Script to show and hide popup-menu
$(document).ready(function () {
    $('#openMenu').click(function (event) {
        showModal();
        event.stopPropagation();
    });

    $('#openMenu2').click(function (event) {
        showModal();
        event.stopPropagation();
    });

    $('.menu-content').click(function (event) {
        event.stopPropagation();
    });
});

function showModal() {
    $('#customModal').fadeIn('fast');
    (function fun() {
        // $('.menu-content').css({ 'transform': 'translateY(-50vh)' });
        if ($(window).width() > 728) {
            $('.menu-content').css({ 'transform': 'translateX(-50vw)' });
        } else {
            $('.menu-content').css({ 'transform': 'translateY(-50vh)' });
        }
    })();
}

function hideModal() {
    $('#customModal').fadeOut('fast');
    (function fun2() {
        // $('.menu-content').css({ 'transform': 'translateY(0vh)' });
        if ($(window).width() > 728) {
            $('.menu-content').css({ 'transform': 'translateX(0vw)' });
        } else {
            $('.menu-content').css({ 'transform': 'translateY(0vh)' });
        }
    })();
}

$(document).on("click", function () {
    hideModal();
});

//Script to play clicked game in iframe
document.addEventListener('DOMContentLoaded', function () {
    const gameThumbnails = document.querySelectorAll('.game-thumbnail');
    const gameFrame = document.getElementById('game-frame');

    gameThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const gameUrl = this.getAttribute('data-game-url');
            loadGame(gameUrl);
        });
    });

    function loadGame(url) {
        // Load the game URL into the iframe
        gameFrame.src = url;
    }
});

// Reset the iframe source to prevent playback
document.addEventListener('DOMContentLoaded', function () {
    const closeModalButton = document.getElementById('closeModal');
    const modalIframe = document.getElementById('game-frame');

    closeModalButton.addEventListener('click', function () {
        modalIframe.src = '';
    });
});

// Script to show and hide unsubscription alert
$(document).ready(function () {
    $('#openUnsub').click(function (event) {
        showUnsubModal();
        event.stopPropagation();
    });

    $('.menu-content').click(function (event) {
        event.stopPropagation();
    });
});

function showUnsubModal() {
    $('#unsubModal').fadeIn('fast');
}

function hideUnsubModal() {
    $('#unsubModal').fadeOut('fast');
}

$(document).on("click", function () {
    hideUnsubModal();
});

// Script to expand FAQ and their answers
const accordionItems = document.querySelectorAll(".faq");

accordionItems.forEach((item) => {
    const header = item.querySelector(".expand-btn");
    const body = item.querySelector(".answer");
    const faqBox = item.closest('.faq-box');

    header.addEventListener("click", () => {
        body.classList.toggle("collapsed");
        if ($(window).width() < 728) {
            faqBox.classList.add('transition-height');
            faqBox.style.height = body.classList.contains("collapsed") ? 'auto' : 15 + "vh";
        }
        if ($(window).width() > 728) {
            faqBox.classList.add('transition-height');
            faqBox.style.height = body.classList.contains("collapsed") ? 'auto' : 12 + "vh";
        }
        if (body.classList.contains("collapsed")) {
            body.style.height = "0";
            body.style.padding = 0 + "vh";
        } else {
            if ($(window).width() < 728) {
                body.style.height = 7.4 + "vh";
                body.style.padding = 1.07 + "vh";
            }
            if ($(window).width() > 728) {
                body.style.height = 4 + "vh";
                body.style.padding = 0.98 + "vh";
            }
        }
        // Toggle icon
        var icon = header.querySelector('img');
        if (icon.src.includes('btn-icon')) {
            icon.src = 'assets/images/btn-minus-icon.png';
        } else {
            icon.src = 'assets/images/btn-icon.png';
        }
    });
});

// Script to set language in localStorage
document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('languageSelect');
    const storedLanguage = localStorage.getItem('language');
    const defaultLanguage = storedLanguage || 'english';
    languageSelect.value = defaultLanguage;

    // Function to change the language and update localStorage
    function changeLanguage(language) {
        if (language === 'english') {
            changeToEnglish();
        } else if (language === 'arabic') {
            changeToArabic();
        } else if (language === 'amharic') {
            changeToAmharic();
        }
        localStorage.setItem('language', language);
    }

    // Event listener for language change on <select> input
    languageSelect.addEventListener('change', function () {
        const selectedLanguage = languageSelect.value;
        changeLanguage(selectedLanguage);
    });

    // Function to change to English language
    function changeToEnglish() {
        const navhead = document.querySelector('.navhead1 p');
        navhead.innerHTML = '<b>Ozone <span>Cafe</span></b>';
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });
    }

    // Function to change to Arabic language
    function changeToArabic() {
        const navhead = document.querySelector('.navhead1 p');
        navhead.innerHTML = '<b>أوزون <span>مقهى</span></b>';
        document.querySelectorAll('[data-ar]').forEach(el => {
            el.textContent = el.getAttribute('data-ar');
        });
    }

    // Function to change to Amharic language
    function changeToAmharic() {
        const navhead = document.querySelector('.navhead1 p');
        navhead.innerHTML = '<b>ኦዞን <span>ካፌ</span></b>';
        document.querySelectorAll('[data-am]').forEach(el => {
            el.textContent = el.getAttribute('data-am');
        });
    }

    // Initialize page with the default language
    changeLanguage(defaultLanguage);
});

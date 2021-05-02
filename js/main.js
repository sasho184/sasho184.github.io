const home = document.getElementById('home');
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');

const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const portfolioBtn = document.getElementById('portfolio-btn');

const currDate = new Date();

const age = currDate.getFullYear() - 2001;
document.getElementById('age').innerHTML = age;

document.getElementById('menu-list').addEventListener('click', function (e) {
    const listItemId = e.target.parentElement.id;
    if (listItemId === 'home-btn' || listItemId === 'about-btn' || listItemId === 'portfolio-btn') {
        fadeAll();
        switch (listItemId) {
            case 'home-btn':
                homeBtn.classList.add('active');
                home.classList.remove('fade'); break;
            case 'about-btn':
                aboutBtn.classList.add('active');
                about.classList.remove('fade'); break;
            case 'portfolio-btn':
                portfolioBtn.classList.add('active');
                portfolio.classList.remove('fade'); break;
        }
    }
});

function fadeAll() {
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    portfolioBtn.classList.remove('active');
    home.classList.add('fade');
    about.classList.add('fade');
    portfolio.classList.add('fade');
}
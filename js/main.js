const home = document.getElementById('home');
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');

const currDate = new Date();

const age = currDate.getFullYear() - 2001;
document.getElementById('age').innerHTML = age;

document.getElementById('menu-list').addEventListener('click', function (e) {
    const listItemId = e.target.parentElement.id;
    if (listItemId === 'home-btn' || listItemId === 'about-btn' || listItemId === 'portfolio-btn') {
        fadeAll();
        switch (listItemId) {
            case 'home-btn':
                home.classList.remove('fade'); break;
            case 'about-btn':
                about.classList.remove('fade'); break;
            case 'portfolio-btn':
                portfolio.classList.remove('fade'); break;
        }
    }
});

function fadeAll() {
    home.classList.add('fade');
    about.classList.add('fade');
    portfolio.classList.add('fade');
}
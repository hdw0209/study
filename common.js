$('[include-html]').each((idx, el) => {
    el = $(el);
    el.load(el.attr('include-html'));
});

function setActive() {
    linkObj = document.getElementById('sideNav').getElementsByTagName('a');

    let url = document.location.pathname;
    url = url.substr(0, url.length - 1).replace(/\%20/g, ' ');

    document.querySelectorAll('#sideNav a').forEach((a) => {
        console.log(url, a.getAttribute('href'), url === a.getAttribute('href'));
        if (url === a.getAttribute('href')) {
            a.classList.add('active');
            a.parentElement.parentElement.parentElement.parentElement.children[0].classList.add('active');
        }
    });
}

window.onload = setActive;

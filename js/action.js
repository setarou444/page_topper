function pagetopper_event() {
    window.scroll(
        {
            top: 0,
            behavior: "smooth"
        }
    );
}

window.addEventListener('load', (event) => {
    const tl = document.getElementById('pagetopper_link');
    if (window.scrollY >= 50) {
        tl.style.setProperty('display', 'flex');
    }
    else {
        tl.style.setProperty('display', 'none');
    }
    window.addEventListener('scroll', function () {
        const tl = document.getElementById('pagetopper_link');
        if (window.scrollY >= 50) {
            tl.style.setProperty('display', 'flex');
        }
        else {
            tl.style.setProperty('display', 'none');
        }
    });
});

const body_element = document.getElementsByTagName('body')[0];
//吹き出し用のpタグを作成
const new_element = document.createElement('span');
new_element.setAttribute('id', 'pagetopper_link');
new_element.textContent = '↑';
body_element.appendChild(new_element);

new_element.addEventListener('click', pagetopper_event);

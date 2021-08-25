const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profileImg = document.querySelector("#profile-img");
const nameDom = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
    header.innerHTML = `<img src="https://www.tomscott.com/img/name.svg" alt="temp_img">`;
    title.innerHTML = `Lorem ipsum dolor sit amet`;
    excerpt.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magnam`;
    profileImg.innerHTML = `
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Tom_Scott_avatar_by_Matt_Gray.jpg" alt=profile_pic">
    `;
    nameDom.innerHTML = `Tom Scott`;
    date.innerHTML = `Nov 13, 2020`;

    for (let i = 0; i < animated_bgs.length; i++) {
        const e = animated_bgs[i];
        e.classList.remove("animated-bg");
    }
    for (let i = 0; i < animated_bg_texts.length; i++) {
        const e = animated_bg_texts[i];
        e.classList.remove("animated-bg-text");
    }
    // console.log("Loading Done");
}

setTimeout(getData, 2500);
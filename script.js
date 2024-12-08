const media = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.mp4",
    "pic6.jpg",
    "pic7.jpg",
    "pic8.jpg",
    "pic9.jpg",
    "pic10.jpg",
    "pic11.jpg",
    "pic12.jpg",
    "pic13.mp4",
];

let current_index = 0;

// найти элементы

const media_container = document.getElementById("media_container");
const prev_button = document.getElementById("prev_button");
const next_button = document.getElementById("next_button");


//Обновление содержимого контейнера

function update_media() {
    media_container.innerHTML = "";
    const current_media = media[current_index];

    if (current_media.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.width = 500;
        video.controls = true;
        video.loop = true;
        video.src = current_media;
        video.play()
        media_container.appendChild(video);
    } else {
        const img = document.createElement("img");
        img.src = current_media;
        img.width = 500;

        media_container.appendChild(img);
    }
}

prev_button.addEventListener("click", () => {
    current_index = (current_index - 1 + media.length) % media.length;
    update_media();
});

next_button.addEventListener("click", () => {
    current_index = (current_index + 1) % media.length;
    update_media();
});

// Установить начальное содержимое - current_index = 0
update_media()
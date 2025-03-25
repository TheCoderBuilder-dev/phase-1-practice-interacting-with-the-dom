
const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const likeBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");
const likesList = document.querySelector(".likes");

let count = 0;
let isPaused = false;
let timer = setInterval(updateCounter, 1000);
let likes = {};


function updateCounter() {
  if (!isPaused) {
    counter.textContent = ++count;
  }
}


plusBtn.addEventListener("click", () => counter.textContent = ++count);
minusBtn.addEventListener("click", () => counter.textContent = --count);

likeBtn.addEventListener("click", () => {
  if (!likes[count]) {
    likes[count] = 1;
    const li = document.createElement("li");
    li.dataset.num = count;
    li.innerHTML = `${count} has been liked <span>1</span> time`;
    likesList.appendChild(li);
  } else {
    likes[count]++;
    document.querySelector(`[data-num="${count}"] span`).textContent = `${likes[count]}`;
  }
});


pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    timer = setInterval(updateCounter, 1000);
    pauseBtn.textContent = "pause";
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    likeBtn.disabled = false;
  } else {
    clearInterval(timer);
    pauseBtn.textContent = "resume";
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    likeBtn.disabled = true;
  }
  isPaused = !isPaused;
});


commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = document.createElement("p");
  comment.textContent = commentInput.value;
  commentList.appendChild(comment);
  commentInput.value = "";
});

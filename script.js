let newTopicBtn = document.querySelector(".new-topic-button");
let initialDiv = document.querySelector(".centered-text");

let submitTopicBtn = document.querySelector(".submit-button");
let newTopicDiv = document.querySelector(".new-topic-div");

let feedbackDiv = document.querySelector(".new-topic-feedback");
let newTopic = document.querySelector(".discussion-topic.hidden");

// Create new topic

newTopicBtn.addEventListener("click", () => {
    initialDiv.style.display = "none";
    newTopicDiv.style.display = "flex";
});

// Add new topic

submitTopicBtn.addEventListener("click", () => {
    newTopicDiv.style.display = "none";
    feedbackDiv.style.display = "block";
    newTopic.style.display = "block";
})


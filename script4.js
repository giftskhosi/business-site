const myFeed = document.getElementById('feed');
const myPost = document.getElementById('post');
const btnPost = document.getElementById('btn-post');

btnPost.addEventListener('click', (e) => {
    if(myPost.value == ""){
        return alert("Please type something on in the textarea");
    }

    let feeds = localStorage.getItem("feeds");
    if(feeds == null){
        feedsObj = [];
    } else {
        feedsObj = JSON.parse(feeds);
    }
    let myObj = {
        post: myPost.value
    }

    feedsObj.push(myObj);
    localStorage.setItem("feeds", JSON.stringify(feedsObj));
    myPost.value = "";

    showFeeds();
})

function showFeeds(){
    let feeds = localStorage.getItem("feeds");
    if(feeds == null){
        feedsObj = [];
    } else {
        feedsObj = JSON.parse(feeds);
    }

    let html = "";
    feedsObj.forEach(function(element, index){
        html += `<div id="note">
        <p class="note-counter">Post ${index + 1}</p>
        <p class="note-text">${element.post}</p>
        <button id="${index}" onclick="deletePost(this.id)" class="note-btn">Delete Post</button>
        <button id="${index}" onclick="editPost(this.id)" class="note-btn edit-btn">Edit Post</button><br><br>
        </div>` ;
    });

    let feedElm =document.getElementById("feeds");
    if(feedsObj.length != 0){
        feedElm.innerHTML = html;
    } else {
        feedElm.innerHTML = "No Post entered yet!!"
    }
}

function deletePost(index){
    let confirmDel = confirm("You are deleting this note!!!");

    if(confirmDel == true){
        let feeds = localStorage.getItem("feeds");
        if(feeds == null){
            feedsObj = [];
        } else {
            feedsObj = JSON.parse(feeds);
        }

        feedsObj.splice(index, 1)
        localStorage.setItem("feeds", JSON.stringify(feedsObj));
        showFeeds();
    }
}

function editPost(index){
    let feeds = localStorage.getItem("feeds");

    if(myPost.value !== "" ){
        return alert("Please clear the form before editing a note");
    }
    if(feeds == null){
        feedsObj = [];
    } else {
        feedsObj = JSON.parse(feeds);
    }

    feedsObj.findIndex((element, index) => {
        myPost.value = element.post;
    })
    feedsObj.splice(index, 1);
    localStorage.setItem("feeds", JSON.stringify(feedsObj));
    showFeeds();
}

showFeeds();


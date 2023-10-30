const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const oldagrams = document.getElementById("oldagrams");


function renderOldagrams(post){

    oldagrams.innerHTML = "";

    let oldagram="";
    for(let i=0;i <post.length; i++){

    //     oldagram += `
    //     <li class="oldagram-element">
    //        <div class="poster-user-info">
    //            <img class="user-image" src="${post[i].avatar}" alt="post avatar">
    //            <div class="poster-user-credentials">
    //                <h5>${post[i].name}</h5>
    //                <p>${post[i].location}</p>
    //            </div>
    //        </div>
    //        <img class="post-image" src="${post[i].post}" alt="post photo">
    //        <div class="icon-section">
    //            <button><img class="image-button" src="images/icon-heart.png"></button>
    //            <button><img class="image-button" src="images/icon-comment.png"></button>
    //            <button><img class="image-button" src="images/icon-dm.png"></button>
    //        </div>
    //        <div class="likes">${post[i].likes}</div>
    //        <div class="post-description"><span>${post[i].username}</span> ${post[i].comment}</div>
    //    </li>`

        let newOldagram = document.createElement("li");

        newOldagram.innerHTML = `
        <div class="poster-user-info">
                   <img class="user-image" src="${post[i].avatar}" alt="post avatar">
                   <div class="poster-user-credentials">
                       <h5>${post[i].name}</h5>
                       <p>${post[i].location}</p>
                   </div>
               </div>
               <img class="post-image" src="${post[i].post}" alt="post photo">
               <div class="icon-section">
                   <button><img class="image-button" src="images/icon-heart.png"></button>
                   <button><img class="image-button" src="images/icon-comment.png"></button>
                   <button><img class="image-button" src="images/icon-dm.png"></button>
               </div>
               <div class="likes">${post[i].likes}</div>
               <div class="post-description"><span>${post[i].username}</span> ${post[i].comment}</div>
         `
        newOldagram.addEventListener("dblclick",function(){
            post[i].likes ++;
            addLikes();
            renderOldagrams(post);
        })

        oldagrams.append(newOldagram);

    

    }

//    appendToOldagrams(oldagram);
}

function addLikes(){
    
}

function appendToOldagrams(oldagramToAppend) {
    oldagrams.innerHTML += oldagramToAppend;

}

renderOldagrams(posts);

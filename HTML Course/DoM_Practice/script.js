// // 1st Task

// var friendName = document.querySelector("p")
// var stateH5 = document.querySelector("h4")
// var button = document.querySelector("#add-friend")

// var check = 0;

// button.addEventListener("click",function(){
//     if (check === 0){
//         stateH5.innerHTML = "Friends";
//         stateH5.style.color = "green"
//         alert(`You are now friends with ${friendName.innerHTML}`);
//         check = 1;
//         button.innerHTML = "Remove Friend";
//     }
//     else {
//         button.innerHTML = "Add Friend"
//         stateH5.innerHTML = "Removed";
//         stateH5.style.color = "red"
//         alert(`You have removed ${friendName.innerHTML} from your list`);
//         check = 0;
//     }

//     if (stateH5.innerHTML === "Removed"){
//         button.addEventListener("click",function(){
//             alert("Processing");
//         })
//     }
    
// })

// ---------------------------------------------------------------------------------------------------------------------------------------

// 2nd task

// var container = document.querySelector("#container")
// var loveIcon = document.querySelector("i")

// container.addEventListener("dblclick",function(){
//     loveIcon.style.transform = "translate(-50%,-50%) scale(1)";
//     loveIcon.style.opacity = 0.8;
//     setTimeout(function(){
//         loveIcon.style.opacity = 0;
//     },1000)
//     setTimeout(function(){
//         loveIcon.style.transform = "translate(-50%,-50%) scale(0)";
//     },2000)
// })

// ---------------------------------------------------------------------------------------------------------------------------------------
// 3rd task
// var main = document.querySelector("#main")
// var cursor = document.querySelector(".cursor")


// main.addEventListener("mousemove",function(details){
//     cursor.style.left = details.x+"px";
//     cursor.style.top = details.y+"px";
// })

// ---------------------------------------------------------------------------------------------------------------------------------------
// 4t task

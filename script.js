const h2 = document.createElement("h2");
h2.textContent = "This energy is brought to you by coffee";

document.querySelector("div").append(h2);

const theBox = document.getElementById("myBox")
theBox.addEventListener('click', function(){
    alert('I was clicked!');
});

// const theBox = document.getElementById("myBox")
// theBox.addEventListener('click', function(){
//     alert('I was clicked!');
// });

// myBox.addEventListener('click', function() {
//     alert('I was Checked!');
//     });

// function addingEventListener() {
//     const myBox = document.getElementById("myBox");
//     function clickAlert() {
//         alert("I was checked!")
//     }
//     myBox.addEventListener('click', clickAlert);
// }

// addingEventListener(); clickAlert;



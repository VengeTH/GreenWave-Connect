// const abtus = document.getElementById("abtusz")
// const options = {
//     rootMargin: "0px",
//     threshold: 0.25
// }

// function observeFunc(entries){
//     entries.forEach(entry => {
//         console.log(entry)
//         if(entry.isIntersecting){
//             const { target } = entry

//             if (
//                 target.id === "abtusz"
//             ){
//                 const abtusbutton = document.getElementById("abtusbutton")
//                 abtusbutton.style.backgroundColor = "#3d6e48";
//                 abtusbutton.style.color = "#ffffff";
//             }
//         }
//     })
// }

// const observer = new IntersectionObserver(function(entries, observer){
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             abtus.classList.add("abtus")
//         }
//     })
// }, options)

// observer.observe(abtus)
const IntersectionObserver =new IntersectionObserver((entries) =>   {
    if (entries[0].intersectionRatio <= 0) {
        return;
    }
    loadItems(10);
    console.log("loaded new items");});
IntersectionObserver.observe(document.querySelector("abtusz"));
// function lefted(){
//     var img = document.getElementById(volunteer);
//     var tempSrc = img.src;
//     var img2 =
// }
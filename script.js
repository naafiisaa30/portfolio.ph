// console.log("hth");
// const helloworld= "hello world";
// console.log(helloworld);
const person ={
 name: "Akib",
 age: 26,
 job: "Software Engineer",
};// objects
// console.log(person);
function handleContact(event) {
event.preventDefault();
console.log("Contact");
// console.log(event);
console.log(event.target);
// console.log(event.target.name);
// console.log(event.target.email);
// console.log(event.target.message);
const name = event.target.name.value;
const email = event.target.email.value;
const message = event.target.message.value;

console.log(name);
console.log(email);
console.log(message);

const successContainer = document.getElementById("success-container")
console.log(successContainer);


const nameParagraph = document.createElement("p");
nameParagraph.innerText = `Your Name : ${name}` ;

const emailParagraph = document.createElement("p");
emailParagraph.innerText = `Your Email : ${email}` ;

const messageParagraph = document.createElement("p");
messageParagraph.innerText = `Your Message : ${message}` ;

console.log(nameParagraph);
console.log(emailParagraph);
console.log(messageParagraph);

successContainer.appendChild(nameParagraph);
successContainer.appendChild(emailParagraph);
successContainer.appendChild(messageParagraph);

}


//Array of objects
const imageArray = [
    {
        url : "./image/projects/image 3.png"
    },
    {
        url : "./image/projects/image 5.png"
    },
    {
        url : "./image/projects/image 6.png"
    },
    {
        url : "./image/projects/image 7.png"
    }

]
function handleshowmoreprojects(){
const projectcontainer = document.getElementById("projects");

// const projectDiv = document.createElement("div");
// console.log(projectDiv);

for (const item of imageArray) {


    const projectDivImage = document.createElement("div");
    projectDivImage.classList.add("projects");
    projectDivImage.innerHTML = `
    <img src ="${item.url}">
    `;

    projectcontainer.appendChild(projectDivImage);
    console.log(projectDivImage);


}

    // console.log("click" , projectcontainer);
}



























// const firsturlobject = imageArray[0];

// console.log(imageArray);
// console.log(firsturlobject);
// console.log(firsturlobject.url);

// forof loop
// for (const item of imageArray) {
//     console.log(item);
// }

// const imageLength = imageArray.length;
// console.log(imageLength);


// // for loop
// for (let index = 0; index <imageLength; index++) {
//     console.log(index);

//     console.log(imageArray[index]);

    
// }

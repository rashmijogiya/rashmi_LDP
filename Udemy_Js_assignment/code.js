// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const color = ["red", "blue", "black", "white", "yellow", "purple", "green", "brown", "pink", "violet"];


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const name = [
    {
        firstNam: "Bob",
        lastName: "Smith"
    },
    {
        firstName: "Joe",
        lastName: "Johns"
    },
    {
        firstName: "Peter",
        lastName: "Wilson"
    },
    {
        firstName: "Mack",
        lastName: "Doe"
    },
    {
        firstName: "Anna",
        lastName: "Foster"
    },
    {
        firstName: "John",
        lastName: "William"
    },
    {
        firstName: "Lusy",
        lastName: "Leo"
    }
]

// General random generator
function randomGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var num = Math.floor((Math.random() * (max - min)) + min);
    return num;
}

// Returns a random number between 1-100
function randomBtnClicked(min, max) {
    var num = randomGenerator(min, max);
    document.getElementById("randomText").innerHTML = num;
}

// Returns a random number between "Start" and "End"
function randomBtnBetween() {
    var min = document.getElementById("rand1").value;
    var max = document.getElementById("rand2").value;
    console.log(min + " " + max);
    var num = randomGenerator(min, max);
    document.getElementById("randomText1").innerHTML = num;
}

// Returns a long Lorem Ipsum String
function getLoremString() {
    document.getElementById("p1").innerHTML = lorem;
}
// Returns a Lorem Ipsum String based on the number or sentences specified
function loremSentences() {
    let numberOfSentence = document.getElementById("loremSentence").value;

    let newLoremSentence = lorem.split(".");
    let newLorem = "";
    for (let i = 0; i < numberOfSentence; i++) {
        newLorem = newLorem + newLoremSentence[i] + "."
    }
    // console.log(newLorem);
    document.getElementById("p2").innerHTML = newLorem;
}
// Returns a Lorem Ipsum String based on the number or characters specified
function loremChar() {
    let numberOfChar = document.getElementById("loremChar").value;

    let newLoremChar = lorem.split("");
    let newLorem = "";
    for (let i = 0; i < numberOfChar; i++) {
        newLorem = newLorem + newLoremChar[i];
    }
    // console.log(newLorem);
    document.getElementById("p3").innerHTML = newLorem;
}
// Date
function newDate() {
    let myDate = new Date();
    let newMyDate = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
    console.log(newMyDate);
    document.getElementById("p4").innerHTML = newMyDate;
}
// Time
function newTime() {
    let myTime = new Date();
    let minutes = myTime.getMinutes();
    let seconds = myTime.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let newMyTime = myTime.getHours() + ":" + minutes + ":" + seconds;
    console.log(newMyTime);
    document.getElementById("p5").innerHTML = newMyTime;
}
// Convert inches to feet
function inchesToFeet() {
    let inches = document.getElementById("inches").value;
    let feet = inches / 12;
    console.log(feet.toFixed(3));
    document.getElementById("p6").innerHTML = feet.toFixed(3) + " FT";
}
// Convert feet to inches
function feetToInches() {
    let feet = document.getElementById("feet").value;
    let inches = feet * 12;
    console.log(inches.toFixed(2))
    document.getElementById("p7").innerHTML = inches.toFixed(2) + " Inches";
}
//Compares if two words are the same length
function compareWords() {
    let firstWord = document.getElementById("firstWord").value;
    let secondWord = document.getElementById("secondWord").value;
    let msg = "";
    if (firstWord.length == secondWord.length) {
        msg = "Both words are of same length";
    } else {
        msg = "Both words are of different length";
    }
    document.getElementById("p8").innerHTML = msg;
}
// Random string generator
function randomPassword() {
    let char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "&"];
    let newPwd = "";
    for (var i = 0; i <= 12; i++) {
        let num = randomGenerator(0, char.length);

        newPwd = newPwd + char[num];
    }

    console.log(newPwd);
    document.getElementById("p9").innerHTML = newPwd;
}
// Tells you if the number is even or odd
function checkNumberEvenOrOdd() {
    let number = document.getElementById("p10").value;
    let msg = "";
    if (number % 2 == 0) {
        msg = "Number is even";
    } else {
        msg = "Number is odd";
    }
    console.log(msg);
    document.getElementById("p11").innerHTML = msg;
}
// Returns random color
function getRandomColor() {

    let newColor = color[randomGenerator(0, color.length - 1)];
    console.log(newColor);
    document.getElementById("p12").innerHTML = newColor;
}
// Returns a random first and last name
function randomName() {

    let newFirstName = name[randomGenerator(0, (name.length - 1))].firstName;
    let newLastName = name[randomGenerator(0, (name.length - 1))].lastName;
    let newName = newFirstName + " " + newLastName;
    console.log("New Name= " + newName);
    document.getElementById("p13").innerHTML = newName;

}
var counter = 0;
var nIntervalId;
function initPage() {

    var addBtn = document.querySelector("#addSpanBtn");
    addBtn.addEventListener("click", addSpanElement);

    var clearBtn = document.querySelector("#clearAllBtn");
    clearBtn.addEventListener("click", clearAll);

    var startStopButton = document.querySelector("#startStopBtn");
    startStopButton.addEventListener("click", startStopFill);

}

function addSpanElement() {    
    cheakingAndCreating();
}
function cheakingAndCreating() {
    var myTextBox = document.getElementById("inserd-text");
    if (isValidText(myTextBox)) {
        counter++;
        var textIn = myTextBox.value.toUpperCase();
        if (textIn === "A") { createSpanContA(); }
        else if (textIn === "B") { createSpanContB(); }
        else { createSpanBody(); }
    }
    else {
        clearInterval(nIntervalId);
        document.querySelector("#startStopBtn").innerText = "Start";
        alert("Please enter a value");
    }
}
function createSpanContA() {
    var containerA = document.getElementById("containerA");
    var newSpan = document.createElement('span');
    newSpan.classList.add("my-span");
    newSpan.textContent = "new span " + counter;
    newSpan.addEventListener("mouseover", function () {
        this.style.opacity = 0.7;
    });
    newSpan.addEventListener("mouseout", function () {
        this.style.opacity = 1;
    });

    containerA.appendChild(newSpan);
}
function createSpanContB() {
    var containerB = document.getElementById("containerB");
    var newSpan = document.createElement('span');
    newSpan.classList.add("my-span");
    newSpan.textContent = "new span " + counter;
    newSpan.addEventListener("mouseover", function () {
        this.style.opacity = 0.7;
    });
    newSpan.addEventListener("mouseout", function () {
        this.style.opacity = 1;
    });

    containerB.appendChild(newSpan);

}
function createSpanBody() {
    var newSpan = document.createElement('span');
    newSpan.classList.add("my-span");
    newSpan.textContent = "new span " + counter;
    containerB.appendChild(newSpan);
    newSpan.addEventListener("mouseover", function () {
        this.style.opacity = 0.7;
    });
    newSpan.addEventListener("mouseout", function () {
        this.style.opacity = 1;
    });

    document.body.appendChild(newSpan);
}

function clearAll() {
    counter = 0;
    var spansCollection = document.querySelectorAll(".my-span");
    for (var i = 0; i < spansCollection.length; i++) {
        spansCollection[i].parentElement.removeChild(spansCollection[i]);
    }
}

function startStopFill() {
    //Cheaking what a innerText(Value) of button
    var content = document.querySelector("#startStopBtn");
    if (content.innerText === "Start") {
        content.innerText = "Stop";
        nIntervalId = setInterval(cheakingAndCreating, 500);
    } else {
        clearInterval(nIntervalId);
        content.innerText = "Start";
    }
}

function isValidText(textBox) {
    return ((textBox.value !== "") && (textBox !== undefined));
}


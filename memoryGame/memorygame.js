let arrimg = [
    "memoryGame/1.gif",
    "memoryGame/2.gif",
    "memoryGame/3.gif",
    "memoryGame/4.gif",
    "memoryGame/5.gif",
    "memoryGame/6.gif",
]
let main = document.getElementById("main");
let alldives = document.getElementsByTagName("div");
function drawingimg() {

    for (let i = 0; i < arrimg.length; i++) {
        main.innerHTML += '<div><img src = "' + arrimg[i] + '"></div>'
    }
}

drawingimg();
drawingimg();
let flag = true;
var arr = [];
for (let i = 0; i < alldives.length; i++) {
    alldives[i].addEventListener('click', function () {

        if (flag) {
            this.firstChild.style.opacity = '1';
            if (arr.length == 0) {
                arr[0] = this;

            }
            else if (arr.length == 1) {
                arr[1] = this;
            }


            if (arr.length == 2) {
                flag = false;
                setTimeout(() => {
                    checkimg();

                }, 500);


            }
            else {
                return;
            }

        }
    })
    function checkimg() {
        if (arr[0].firstChild.getAttribute('src') ===
            arr[1].firstChild.getAttribute('src')) {
            alert("coooool😎👌😂🎉")

        } else {
            arr[0].firstChild.style.opacity = '0';
            arr[1].firstChild.style.opacity = '0';

        }
        arr = [];
        flag = true;
    }

}


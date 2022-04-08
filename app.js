
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        let value = 0;

        value = button.value;
        ratingValue.innerText = value;
              
    });
});





var button = document.getElementById("btn").addEventListener("click", buttonclick);

function buttonclick(){
    var x = document.getElementById("main-card");
    x.style.display = "none";

    var z = document.getElementById("thank-you-card");
    z.style.display = "flex";
}
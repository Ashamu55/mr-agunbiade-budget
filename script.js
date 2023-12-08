var remainingBudget = 10000;

function clicked() {
    var num = document.getElementById('num').value;
    var dec = document.getElementById('description').value;
    var exp = document.getElementById('expenses').value;

    if (num == '' || dec == '' || exp == '') {
        disp.style.display = "block"
    } else if (exp > remainingBudget) {
        document.getElementById("error").innerHTML = "Budget limit exceeded!";
    } else {
        disp.style.display = "none"
        document.getElementById("error").innerHTML = "";
        remainingBudget -= exp;
        document.getElementById("remainingBudget").innerHTML = `₦${remainingBudget}:`;
        document.getElementById("expenseList").innerHTML += `
        <p>${num}</p>
        <p>${dec}</p>
        <P style="display:flex;">Total: ₦${exp}</P>`;
    }
    document.getElementById('num').value = ""
    document.getElementById('description').value = ""
    document.getElementById('expenses').value = ""
}
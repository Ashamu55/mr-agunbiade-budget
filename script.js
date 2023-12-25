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
        document.getElementById('num').value = ""
        document.getElementById('description').value = ""
        document.getElementById('expenses').value = ""
        disp.style.display = "none"
        document.getElementById("error").innerHTML = "";
        remainingBudget -= exp;
        document.getElementById("remainingBudget").innerHTML = `₦${remainingBudget}:`;
        document.getElementById("expenseList").innerHTML += `
        <div style="display:flex;">
        <p>${num}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>${dec}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <P>Amount: - ₦${exp}</P></div>`;
    }
}
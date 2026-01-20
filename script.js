document.addEventListener("input", total);
document.getElementById("expButton")
    .addEventListener("click",addExpense);
document.getElementById("savedButt")
    .addEventListener("click",addSavings);
function addExpense(){
    const container=document.getElementById("amountInput");
    const inp =document.createElement("input");
    inp.type="number";
    inp.className="expense";
    inp.placeholder="enter amount";
    container.insertBefore(inp,document.getElementById("spent"));
}
function addSavings(){
    const container=document.getElementById("amountEarned");
    const inp =document.createElement("input");
    inp.type="number";
    inp.className="earned";
    inp.placeholder="enter amount";
    container.insertBefore(inp,document.getElementById("saved"));
}
function total() {
    
    let expenses = document.querySelectorAll(".expense");
    let earned = document.querySelectorAll(".earned");

    let expenseTot = 0;
    let savedTot = 0;

    // Expense total
    for (let i = 0; i < expenses.length; i++) {
        let value = parseFloat(expenses[i].value);
        if (isNaN(value)) continue;
        expenseTot += value;
    }

    // Saved total
    for (let i = 0; i < earned.length; i++) {
        let value = parseFloat(earned[i].value);
        if (isNaN(value)) continue;
        savedTot += value;
    }

    document.getElementById("spent").innerText =
        "Spent : " + expenseTot;

    document.getElementById("saved").innerText =
        "Saved : " + savedTot;
    
    document.getElementById("netBalance").innerText=
        "Net Balance : " +(expenseTot-savedTot);
}

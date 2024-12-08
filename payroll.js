const addListeners = () => {
    document.getElementById("btnaddtotab").addEventListener("click", addToTab);
    document.getElementById("btnclearcart").addEventListener("click", showClearConfirmation);
    document.getElementById("btndelete").addEventListener("click", showDeleteConfirmation);
    document.getElementById("btnConfirm").addEventListener("click", confirmAction);
    document.getElementById("btnCancel").addEventListener("click", cancelAction);
};

const addToTab = () => {
    const employeeName = document.getElementById("employee1").value;
    const daysWorked = document.getElementById("days1").value;
    const dailyRate = document.getElementById("rate1").value;
    const deductionAmount = document.getElementById("amount1").value;

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    const tableBody = document.getElementById("tablebody");

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${tableBody.rows.length + 1}</td> 
        <td>${employeeName}</td>
        <td>${daysWorked}</td>
        <td>${dailyRate}</td>
        <td>${grossPay.toFixed(2)}</td>
        <td>${deductionAmount}</td>
        <td>${netPay.toFixed(2)}</td>
    `;

    tableBody.appendChild(newRow);

    // Clear the input fields
    document.getElementById("employee1").value = "";
    document.getElementById("days1").value = "";
    document.getElementById("rate1").value = "";
    document.getElementById("amount1").value = "";
};

const showClearConfirmation = () => {
    document.getElementById("dlgmsg").textContent = "Are you sure you want to clear the entire table?";
    document.getElementById("dlgConfirmCancel").showModal();

    document.getElementById("btnConfirm").setAttribute("data-action", "clearTable");
};

const showDeleteConfirmation = () => {
    const employeeNo = document.getElementById("delitem").value;

    if (employeeNo > 0) {
        document.getElementById("dlgmsg").textContent = `Are you sure you want to delete Employee No. ${employeeNo}?`;
        document.getElementById("dlgConfirmCancel").showModal();

        document.getElementById("btnConfirm").setAttribute("data-action", "deleteEmployee");
    } else {
        alert("Please enter a valid Employee No.");
    }
};

const confirmAction = () => {
    const action = document.getElementById("btnConfirm").getAttribute("data-action");

    if (action === "clearTable") {
        clearTable();
    } else if (action === "deleteEmployee") {
        deleteEmployee();
    }

    document.getElementById("dlgConfirmCancel").close();
};

const cancelAction = () => {
    document.getElementById("dlgConfirmCancel").close();
};

const clearTable = () => {
    const tableBody = document.getElementById("tablebody");
    tableBody.innerHTML = "";
};

const deleteEmployee = () => {
    const employeeNo = document.getElementById("delitem").value;
    const tableBody = document.getElementById("tablebody");

    if (employeeNo > 0 && employeeNo <= tableBody.rows.length) {
        tableBody.deleteRow(employeeNo - 1); 

        
        for (let i = 0; i < tableBody.rows.length; i++) {
            tableBody.rows[i].cells[0].textContent = i + 1;
        }
    } else {
        alert("Invalid Employee No.");
    }
};

(() => {
    addListeners();
})();

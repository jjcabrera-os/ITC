const addListeners = () => {
    document.getElementById("CtoF").addEventListener("click", ComputeCtoF);
    document.getElementById("FtoC").addEventListener("click", ComputeFtoC);
    document.getElementById("MtoF").addEventListener("click", ComputeMtoF);
    document.getElementById("FtoM").addEventListener("click", ComputeFtoM);
};

const ComputeCtoF = () => {
    const celsius1 = Number(document.getElementById("tempInput").value);
    const result1 = celsius1 * (9 / 5) + 32;
    document.getElementById("tempResult").value = result1.toFixed(2);
};

const ComputeFtoC = () => {
    const fahrenheit1 = Number(document.getElementById("tempInput").value);
    const result1 = (fahrenheit1 - 32) * (5 / 9);
    document.getElementById("tempResult").value = result1.toFixed(2);
};

const ComputeMtoF = () => {
    const meters1 = Number(document.getElementById("meaInput").value);
    const result1 = meters1 * 3.28084;
    document.getElementById("meaResult").value = result1.toFixed(2);
};

const ComputeFtoM = () => {
    const feet1 = Number(document.getElementById("meaInput").value);
    const result1 = feet1 / 3.28084;
    document.getElementById("meaResult").value = result1.toFixed(2);
};

(() => {
    addListeners();
})();

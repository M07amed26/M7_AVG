let totalWeighted = 0;
let totalCoeff = 0;

function addModule() {

    const moduleName =
        document.getElementById("module").value;

    const td =
        parseFloat(document.getElementById("td").value);

    const tp =
        parseFloat(document.getElementById("tp").value);

    const exam =
        parseFloat(document.getElementById("exam").value);

    const coeff =
        parseFloat(document.getElementById("coeff").value);

    // Validation

    if (
        moduleName === "" ||
        isNaN(td) ||
        isNaN(tp) ||
        isNaN(exam) ||
        isNaN(coeff)
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Module Average

    const moduleAverage =
        (td * 0.2) +
        (tp * 0.2) +
        (exam * 0.6);

    // Weighted total

    totalWeighted += moduleAverage * coeff;

    totalCoeff += coeff;

    // Final average

    const finalAverage =
        totalWeighted / totalCoeff;

    // Add row

    const tableBody =
        document.getElementById("tableBody");

    const row = `
        <tr>
            <td>${moduleName}</td>
            <td>${moduleAverage.toFixed(2)}</td>
            <td>${coeff}</td>
        </tr>
    `;

    tableBody.innerHTML += row;

    // Display final average

    document.getElementById("finalAverage")
        .innerText = finalAverage.toFixed(2);

    // Clear inputs

    document.getElementById("module").value = "";
    document.getElementById("td").value = "";
    document.getElementById("tp").value = "";
    document.getElementById("exam").value = "";
    document.getElementById("coeff").value = "";
}
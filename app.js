function addRow() {
    const table = document.getElementById("mainTable");
    let rowCount = table.rows.length;

    if (rowCount < 9) {
        let row = table.insertRow(rowCount);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = '<input type="string" id="className' + rowCount + '" value="Class Name" class="box">';

        let cell2 = row.insertCell(1);
        cell2.innerHTML = '<select id="weight' + rowCount + '" class="selectBox">'
                        + '<option value="5">AP/IB</option>'
                        + '<option value="4.5">Dual Credit</option>'
                        + '<option value="4.5">Advanced</option>'
                        + '<option value="4">On Level</option>'
                        + '</select>';

        let cell3 = row.insertCell(2);
        cell3.innerHTML = '<input type="number" id="grade' + rowCount + '" value="0" class="box" min="0" max="100">';
    } else {
        document.getElementById('addRowBtn').classList.add('shake-animation');

        setTimeout(() => {
            document.getElementById('addRowBtn').classList.remove('shake-animation');
        }, 500);
    }
}

function removeRow() {
    const table = document.getElementById("mainTable");
    let rowCount = table.rows.length;
    if(rowCount > 6) { 
        table.deleteRow(rowCount - 1);
    } else {
        document.getElementById('removeRowBtn').classList.add('shake-animation');

        setTimeout(() => {
            document.getElementById('removeRowBtn').classList.remove('shake-animation');
        }, 500);
    }
}

function saveTableData() {
    const rows = document.querySelectorAll("#mainTable tr:not(:first-child)");
    const tableData = Array.from(rows).map(row => {
        const inputs = row.querySelectorAll("input, select");
        return {
            className: inputs[0].value,
            weight: inputs[1].value,
            grade: inputs[2].value
        };
    });

    localStorage.setItem('tableData', JSON.stringify(tableData));
}

document.querySelectorAll("#mainTable input, #mainTable select").forEach(input => {
    input.addEventListener('change', saveTableData);
});

function saveTableData() {
    const rows = document.querySelectorAll("#mainTable tr:not(:first-child)");
    const tableData = Array.from(rows).map(row => {
        const inputs = row.querySelectorAll("input, select");
        return {
            className: inputs[0].value,
            weight: inputs[1].value,
            grade: inputs[2].value
        };
    });

    document.cookie = "tableData=" + JSON.stringify(tableData) + ";path=/;expires=" + new Date(new Date().getTime() + 31536000000).toUTCString();
}

function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function loadTableData() {
    const savedData = getCookie('tableData');
    if (savedData) {
        const tableData = JSON.parse(savedData);
        tableData.forEach(rowData => addRowWithData(rowData));
    }
}

document.addEventListener('DOMContentLoaded', loadTableData);

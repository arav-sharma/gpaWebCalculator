if (location.protocol !== 'https:') {
    location.href = 'https://' + location.hostname + location.pathname;
}

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

function saveTableDataToURL() {
    const rows = document.querySelectorAll("#mainTable tr:not(:first-child)");
    const tableData = Array.from(rows).map(row => {
        const inputs = row.querySelectorAll("input, select");
        return {
            className: inputs[0].value,
            weight: inputs[1].value,
            grade: inputs[2].value
        };
    });

    const encodedData = encodeURIComponent(JSON.stringify(tableData));
    window.location.hash = encodedData;
}

document.querySelectorAll("#mainTable input, #mainTable select").forEach(input => {
    input.addEventListener('change', saveTableDataToURL);
});

function loadTableDataFromURL() {
    const hashData = window.location.hash;
    if (hashData) {
        try {
            const tableData = JSON.parse(decodeURIComponent(hashData.slice(1)));
            tableData.forEach(rowData => addRowWithData(rowData));
        } catch (e) {
            console.error("Error parsing table data from URL:", e);
        }
    }
}

document.addEventListener('DOMContentLoaded', loadTableDataFromURL);

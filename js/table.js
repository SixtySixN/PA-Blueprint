/* Add single row to PA Table */
function addRow(tableID) {

    var tableRef = document.getElementById(tableID);
    var newRow = tableRef.insertRow(-1);

    var newCell = newRow.insertCell(0);
    var newElem = document.createElement('cell');

    newElem.setAttribute("name", "CABINET #");
    newElem.setAttribute("value", "");
    newCell.appendChild(newElem);

    newCell = newRow.insertCell(1);
    newCell.setAttribute("class", "type")
    newElem = document.createElement('input');
    newElem.setAttribute("list", "type");
    newElem.setAttribute("class", "type");
    newElem.setAttribute("name", "TYPE");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);

    newCell = newRow.insertCell(2);
    newCell.setAttribute("class", "splay")
    newElem = document.createElement('input');
    newElem.setAttribute("list", "angle");
    newElem.setAttribute("class", "splay");
    newElem.setAttribute("name", "SPLAY ANGLE");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);

    newCell = newRow.insertCell(3);
    newCell.setAttribute("class", "circuit")
    newElem = document.createElement('input');
    newElem.setAttribute("class", "circuit");
    newElem.setAttribute("name", "CIRCUIT");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
}
/*Add multiple rows to PA Tables - v3*/
/* addMultiRows1 = Add to Main PA Table */
    function addMultiRows1(tableID) {
        var table = document.getElementById(tableID);
        var rows = parseInt(document.getElementById('numBoxesMain').value);
        for (var i = 1; i <= rows; i++) {
            addRow(tableID);
        }
        var i = 0;
        var x = parseInt(document.getElementById('numPerCaseMain').value);
       {
            $('#mainpatbl > tbody > tr').each(function () {
                
                i++;
                if (i % x == 0) {
                    
                    $(this).after("<tr class=blankrow></tr>")
                }
            });
        }
}
/* addMultiRows2 = Add to Side PA Table */
function addMultiRows2(tableID) {
    var table = document.getElementById(tableID);
    var rows = parseInt(document.getElementById('numBoxesSide').value);
    for (var i = 1; i <= rows; i++) {
        addRow(tableID);
    }
    var i = 0;
    var splits = parseInt(document.getElementById('numPerCaseSide').value);
   {
        $('#sidepatbl > tbody > tr').each(function () {
            
            i++;
            if (i % splits == 0) {
                
                $(this).after("<tr class=blankrow></tr>")
            }
        });
    }
}

/* Add blank 'split' line to PA Tables */
function addSplit(tableID) {
    var tableRef = document.getElementById(tableID);
    var newRow = tableRef.insertRow(-1);

    newRow.setAttribute("class", "blankrow");
    newRow.setAttribute("colspan", "4");
}

/* Delete last row from PA Tables */
function deleteRow(tableID) {
    var table = document.getElementById(tableID);

        table.deleteRow(-1);
    
}

/* Adds a row to Rigging Table */
function addRig(tableID) {

    var tableRef = document.getElementById(tableID);
    var newRow = tableRef.insertRow(-1);

    var newCell = newRow.insertCell(0);
    newCell.setAttribute("class", "userrigcell")
    var newElem = document.createElement('input');
    newElem.setAttribute("class", "userrig");
    newElem.setAttribute("id", "rigText")
    newElem.setAttribute("name", "userrig");
    newCell.appendChild(newElem);

    newCell = newRow.insertCell(1);
    newCell.setAttribute("class", "userrigcell")
    newCell.setAttribute("colspan", "2");
    newElem = document.createElement('input');
    newElem.setAttribute("class", "userunit");
    newElem.setAttribute("id", "rigText")
    newElem.setAttribute("name", "userunit");
    newCell.appendChild(newElem);
}

function gotoPage(select){
        window.location = select.value;
}
// Removes element - in this case the logo
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    
    element.parentNode.removeChild(element);
    element.setAttribute("width", "1px");
}


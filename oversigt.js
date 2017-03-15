
/*Only necessary when creating history for an existing row, which is not for now but later*/
// function createHist(num) {
    
// }

$(document).ready(function(){
    $.getJSON("results.json", function(objArr) {
		objArr.sort(sortJson);

        /*Sortere object array efter dato*/
        // objArr.sort(function(a, b) {
        //     a = new Date(a.Dato);
        //     b = new Date(b.Dato);
        //     return a > b ? -1 : a < b ? 1 : 0;
        // });

        htmlTable(".container", objArr);
        $("table").addClass("table table-responsive table-striped table-hover");
        console.log(objArr);
    })
});


//Sorts data according to Lokation, with the smallest value first.
function sortJson(a, b) {
	a = a.Lokation;
	b = b.Lokation;
	return a > b ? -1 : a < b ? 1 : 0;
};

/*All credit to agershun for the htmlTable() function,  
*2nd answer on http://stackoverflow.com/questions/27681838/create-table-with-javascript-array-and-object
*/
function htmlTable(selector, data, columns) {
	var sel = document.querySelector(selector);
	if(!sel) {
		throw new Error('Selected HTML element is not found');
	};	

	if((!columns) || columns.length == 0) {
        columns = Object.keys(data[0]);
	}

	var tbe = document.createElement('table');
	var thead = document.createElement('thead');
	tbe.appendChild(thead);

    var tre = document.createElement('tr');
    for (var i = 0; i < columns.length; i++){
        var the = document.createElement('th');
        the.textContent = columns[i];
        tre.appendChild(the);
    }
    thead.appendChild(tre);

	var tbody = document.createElement('tbody');
	tbe.appendChild(tbody);
	for (var j = 0; j < data.length; j++){
		var tre = document.createElement('tr');
		for (var i = 0; i < columns.length; i++){
			var the = document.createElement('td');
			the.textContent = data[j][columns[i]];
			tre.appendChild(the);
		}
		tbody.appendChild(tre);
	};
	// emptyDOMChildren(sel);
	sel.appendChild(tbe);
};


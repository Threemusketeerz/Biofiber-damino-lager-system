
// $(document).ready(function(){	
	 $.getJSON("scripts/results.json", function(data) {
		var finArr = jsonSorter(data);
		console.log(finArr);
		htmlTable(".container", finArr);
        $("table").addClass("table table-responsive table-striped table-hover");
    });
/*All credit to agershun for the htmlTable() function,  
*2nd answer on http://stackoverflow.com/questions/27681838/create-table-with-javascript-array-and-object
*/
function htmlTable(selector, data, columns) {
	var sel = document.querySelector(selector);
	var tbe = document.createElement('table');
	var thead = document.createElement('thead');
	var tre = document.createElement('tr');
	var tbody = document.createElement('tbody');

	if(!sel) {
		throw new Error('Selected HTML element is not found');
	};	
	// console.log(data);
	if((!columns) || columns.length == 0) {
        columns = Object.keys(data[0]);
	}
	tbe.appendChild(thead);

    for (var i = 0; i < columns.length; i++){
        var the = document.createElement('th');
        the.textContent = columns[i];
        tre.appendChild(the);
    }
    thead.appendChild(tre);

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
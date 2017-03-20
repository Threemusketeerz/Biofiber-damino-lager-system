
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
	var Class = "clicked";

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
		if (columns[i] !== "Historik"){
        	the.textContent = columns[i];
		}
        tre.appendChild(the);
    }
    thead.appendChild(tre);

	tbe.appendChild(tbody);
	for (var j = 0; j < data.length; j++){
		var d = data[j]["Historik"];
		var tre = document.createElement('tr');
			tre.id = "log" + j;
		for (var i = 0; i < columns.length - 1; i++){

			var the = document.createElement('td');
			
			the.textContent = data[j][columns[i]];
			// console.log(data[j][columns[i]]);
			tre.appendChild(the);
			// console.log(tre.appendChild(the));
		
		}
		tbody.appendChild(tre);

		//Own code for Historik
		if(columns[i] === "Historik" && data[j][columns[i]] !== undefined) {
			
			for (var k = 0; k < d.length; k++)  {
				var div = "<div></div>";
				
				var subtr = document.createElement('tr');
				subtr.id = "hidden" + j;
				

				// subtr.style = 'display: none';
				
				
				// console.log(d[k][columns[i]]);
				for(var z = 0; z < columns.length; z++) {
					// console.log(d[k][columns[z]]);
					var sub = document.createElement('td');
					
					sub.textContent = d[k][columns[z]];
					sub.id = 'sub' + j;

					subtr.appendChild(sub);
					
			}
				
					
				tbody.appendChild(subtr);

			}
		
			
		}
		
		
	};
	

	// emptyDOMChildren(sel);
	sel.appendChild(tbe);

$("td").show(function(){
	var hid = "hidden";
	var retval = [];
	$("td").each(function(){
		var Id = $(this).attr('id');
		if(Id !== undefined){
		retval.push(Id);
			
		}
		for(var i = 0; i < retval.length; i++){
			if($(this).attr('id') == retval[i]){
				$(this).hide();
			}
			
		}
		
	})
console.log(retval);

	
});
$("tr").click(function(){
	$("td").each(function(){
		var retval = [];

		var Id = $(this).attr('id');
		if(Id !== undefined){
		retval.push(Id);
			
		}
		var Id = $(this).attr('id');
		for(var i = 0; i < retval.length; i++){
			if($(this).attr('id') == retval[i]){
				$(this).show();
			}
		}
	})
});

};

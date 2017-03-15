function jsonSorter(objArr) {
    var newObjArr = [];
    var obj;
    var objKeys;
    objArr.sort(sortJsonDate);

    if ((!objKeys) || objKeys.length == 0) {
        objKeys = Object.keys(objArr[0]);
        // console.log(objKeys);
    }

    for (var i = 0; i < objArr.length; i++) {
        obj = objArr[i];
        var curVal = objArr[i]["Lokation"];
        var curValD = objArr[i]["Dato"];
        newObjArr.push(obj);

        for (var j = 0; j < newObjArr.length; j++) {
            var newVal = newObjArr[j]["Lokation"];
            var newValD = newObjArr[j]["Dato"];
            if (newVal === curVal && newValD !== curValD) {
                newObjArr[j]["Historik"] = [];
                newObjArr[j]["Historik"].push(objArr[i]);
                newObjArr.pop();
            }
        }
    }
    newObjArr = newObjArr.sort(sortJson);
    return newObjArr;
    // console.log(newObjArr);
};

function sortJsonDate(a, b) {
	a = new Date(a.Dato);
	b = new Date(b.Dato);
	return a > b ? -1 : a < b ? 1 : 0;
};

function sortJson(a, b) {
	a = a.Lokation;
	b = b.Lokation;
	return a < b ? -1 : a > b ? 1 : 0;
};
function jsonSorter(objArr) {
    var newObjArr = [];
    // var obj;
    var objKeys;
    objArr.sort(sortJsonDate);

    if ((!objKeys) || objKeys.length == 0) {
        objKeys = Object.keys(objArr[0]);
        console.log(objKeys);
    }

    for (var i = 0; i < objArr.length; i++) {
        var obj = objArr[i];
        var curVal = objArr[i]["Lokation"];
        var curValD = objArr[i]["Dato"];
        newObjArr.push(obj);

        for (var j = 0; j < newObjArr.length; j++) {
            var newVal = newObjArr[j]["Lokation"];
            var newValD = newObjArr[j]["Dato"];
            var hist = "Historik";
            if (!(hist in newObjArr[j])) {
                newObjArr[j][hist] = [];
            }

            if (newVal === curVal && newValD !== curValD) {
                newObjArr[j][hist].push(objArr[i]);
                newObjArr.pop();
            }
            else if (newObjArr[j][hist].length === 0) {
                delete newObjArr[j][hist];
            }
        }
    }
    newObjArr = newObjArr.sort(sortJson);
    console.log(newObjArr);
};


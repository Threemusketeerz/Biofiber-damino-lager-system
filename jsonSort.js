function jsonSorter(objArr) {
    var newObjArr = [];
    var obj;
    var objKeys;

    if ((!objKeys) || objKeys.length == 0) {
        objKeys = Object.keys(objArr[0]);
        console.log(objKeys);
    }

    for (var i = 0; i < objArr.length; i++) {
        obj = objArr[i];
        var curVal = objArr[i]["Lokation"];

        if (newObjArr.length === 0) {
            newObjArr.push(obj);
            console.log(newObjArr);
        }

        for (var j = 0; j < newObjArr.length; j++) {
            var newVal = newObjArr[j]["Lokation"];
            if (newVal === curVal) {
                newObjArr[j]["Historik"] = [];
                newObjArr[j]["Historik"].push(objArr[i]);
            }
        }
    }
    console.log("New Arr");
    console.log(newObjArr);
};


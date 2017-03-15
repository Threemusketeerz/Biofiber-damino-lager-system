$(document).ready(function(){
    $.ajax({
        url: "results.json",
        success: function(data) {
            var tabHead = "<th>";
            var dataStart = "<td>";
            var dataEnd = "</td>";
            var rowEnd = "</tr>";
            var tabHeadEnd = "</th>";
            var dataLength = data.length;
            var count = 0;
            var names;
            var currObj;
            Object.obj(data).forEach(obj => {
                console.log(obj);
            })


            // Ikke optimalt endnu.
            // for (var i = 0; i < data.length; i++){
            //     count = 0;
            //     names = Object.getOwnPropertyNames(data[i]);
            //     currObj = data[i];
            //     // if (typeof currObj)
            //     //     $("#headRow").append(tabHead + names[i] + tabHeadEnd);

            //     for (var key in currObj) {
            //         $("#dataRow").append(dataStart + currObj[key] + dataEnd);
            //         console.log("key only: " + key);
            //         console.log("Value: " + currObj[key]);
            //         if (key ) {
            //             $("#dataRow").append(rowEnd + "<td>");
            //         }
            //     }
            //     // Object.keys(currObj).forEach(key => {

            //     //     $("#dataRow").append(dataStart + currObj[key] + dataEnd);
            //     //     console.log(currObj[key]);
            //     //     if (key === "Dato") {
            //     //         $("#dataRow").append(rowEnd + "<td>");
            //     //     }
            //     // });
            // }
            console.log(names);
            for(var j = 0; j < names.length; j++) {
                $("#headRow").append(tabHead + names[j] + tabHeadEnd);
            }
        }
    });
});
$(document).ready(function(){
    $("#search").on("keyup", function(){
        function fSearch() {
            var input, filter, tr, td, a;
                input = document.getElementById("search");
                filter = input.value.toUpperCase();
                tr = document.getElementsByTagName("tr");
                td = document.getElementsByTagName("td");
                console.log(filter);
            for(var i = 0; i < tr.length; i++){
                console.log(tr[i]);
                a = tr[i];
                if(a.innerHTML.toUpperCase().indexOf(filter) > - 1){
                    tr[i].style.display = "";
                }else if (a.innerHTML.toUpperCase().indexOf(filter) < -1){
                    tr[i].style.display = "none";
                }else if(tr[i].style.display = "none"){
                    tr[i].style.display = "none";
                }
            }
        }
        fSearch();
    })
});
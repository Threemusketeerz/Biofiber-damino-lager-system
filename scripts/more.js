$(document).ready(function(){
    $("tr").show(function(){
            //Color for valid tables
            $(this).css({"background-color": "#5BC0DE", "color": "white"});
            //array: keeps id of hidden tables 
            var retval = [];
            var Id = $(this).attr("id");	
            //running for every table row
            //Getting id of hidden 
            var btn = document.createElement("BUTTON");
            var txt = document.createTextNode("vis mere");
         
            btn.appendChild(txt);
            btn.id = "btn";
            // for(var i = 0; i < btn.lengt)
            if($(this).attr("class")){
                $(this).append(btn);
            }  
                
            $("tr").each(function(){
                var Id = $(this).attr('id');
                
                if(Id !== undefined){
                    retval.push(Id);
                }
                
                
                //Running for loop through array so history is hidden
                for(var i = 0; i < retval.length; i++){
                    //Simpel if statement for hiding history
                    if($(this).attr('id') == retval[i]){
                        $(this).hide();		
                    }
                }	
                
            })
          	
        });
       var num = 5;
       var newNum = 5;
       var run;
         
        //click function: click function is bacisly the same as hide function with small modifications
         var trClick = $("tr").on("click",function(e){
            var clickCounter = $(this).data("clickCounter") || 0;
 		    // //incrementing clickCounter
 		    var numClick = $(this).data("clickCounter", clickCounter += 5);
 		    //Had some problem with the classes. if no history dont push
             /*putting my push function outside of each function so it only pushes
             the class of the clicked table row*/
             var history = [];
             var retclass = [];
             var Class = $(this).attr('class');
             //Had some problem with the classes. if no history dont push
                 if(Class !== undefined){
                     retclass.push(Class);	
                 }     
            var each = $("tr").each(function(){	
                 var Id = $(this).attr('id');
                 if(Id !== undefined){
                     if(Id == retclass){
                         //Push the id of hidden tables into an array for slice usage
                         history.push(Id);
           
                         //Here i slice tables that are hidden so it only shows 5 rows. Shown with toggle function for nice effect.  
                        run = $(this).slice(history.length-num, history.length).show(500);
                         //Color for history tables
                         $(this).css({"background-color": "#4B7089", "color": "white", "padding-left": "50px"});
                   
                            
                         
                         
                         
                        
                        if(clickCounter > num){
 						    $(this).hide(500);
 						    $("tr").data("clickCounter", 0);
                            num = 5;
 					    }
                                  
                    }	
                 }
                 
             })

        

                $("button").on("click",function(){
                  
                        if(history.length > num){
                            num = num+5; 
                        }else {
                            num = 5;
                        }
                        console.log(num);
                 });
         
                
            

         })

         
         
        
});

<html>
<head>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <!--<script src="script.js"></script>-->
    <script src="scripts/jsonSort.js"></script>
    <script src="scripts/table.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="style.css" type="text/css" rel="stylesheet">
</head>
<body>
    <div class="container">
    
       <?php
        /* This code gets the data from mysql and writes a Json file wich is used to show the data with javascript*/
        require_once("mysql\mysqli_connect.php");


        $response = array();
        $posts = array();
        //Selecting data i want from mysql
        $sql = "SELECT * FROM lagerb";
        //Connecting to mysql and running a while statement to get all the data
        if($result = mysqli_query($dbc, $sql)){
            while($row = mysqli_fetch_assoc($result)){
                //Giving names to the data (Some danish in there ignore it) also i put it in my posts array.
                $posts["Produkt"] = $row["produk"];
                $posts["Vægt-kg"] = $row["vægt"];
                $posts["Batch-NR"] = $row["batch"];
                $posts["Lokation"] = $row["lokale"];
                $posts["Modtagelse"] = $row["modt"];
                $posts["Udløbs-dato"] = $row["udløb"];
                $posts["Ny-udløb"] = $row["ny"];
                $posts["Karantæne"] = $row["kara"];
                $posts["Dato"] = $row["dato"];
                //pushing all the data together so i can compress it to a json file
                array_push($response, $posts);
                

            }
            
        }
        //Here i make my json file wich saves in the "scripts" folder
        $myPath = "scripts/";
        $myFile = $myPath."results.json";
        $fp = fopen($myFile, 'w');
        fwrite($fp, json_encode($response));
        fclose($fp);



    mysqli_close($dbc);
 
?>
 
    </div>
</body>
</html>

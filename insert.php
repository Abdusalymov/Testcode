<?php
      $aDoor = $_POST['id'];
      if(empty($aDoor)) 
      {
        echo("Вы не выбрали ни одного здания.");
      } 
      else
      {
        $N = count($aDoor);
     
        echo("Вы выбрали $N здание(й): ");
        for($i=0; $i < $N; $i++)
        {
          echo($aDoor[$i] . " ");
        }
      }
    ?>
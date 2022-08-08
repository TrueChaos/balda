
<html>
<head>
<title>balda</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="main.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>
<body>
<div class="container">
    <div class="row">
    <div class="col">
        <?php
        if(ISSET($_POST['names'])){
            $p1_name = $_POST["player1"];
            $p2_name = $_POST["player2"];
            echo "
            <br><a>СЧЁТ &nbsp;</a>  <a id = 'score1'>  0  </a>:<a id = 'score2'>  0</a><br>
        <a>ХОД ИГРОКА - </a><a id = 'cur_player'></a><br><br>
    <table id='field'>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Б</td>
            <td>А</td>
            <td>Л</td>
            <td>Д</td>
            <td>А</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <br>
    <p id='Status'>Выберете букву</p>
    <table id='alphabet'>
        <tr>
            <td draggable='true'>А</td>
            <td draggable='true'>Б</td>
            <td draggable='true'>В</td>
            <td draggable='true'>Г</td>
            <td draggable='true'>Д</td>
            <td draggable='true'>Е</td>
            <td draggable='true'>Ё</td>
            <td draggable='true'>Ж</td>
            <td draggable='true'>З</td>
            <td draggable='true'>И</td>
            <td draggable='true'>Й</td>
        </tr>
        <tr>
            <td draggable='true'>К</td>
            <td draggable='true'>Л</td>
            <td draggable='true'>М</td>
            <td draggable='true'>Н</td>
            <td draggable='true'>О</td>
            <td draggable='true'>П</td>
            <td draggable='true'>Р</td>
            <td draggable='true'>С</td>
            <td draggable='true'>Т</td>
            <td draggable='true'>У</td>
            <td draggable='true'>Ф</td>
        </tr>
        <tr>
            <td draggable='true'>Х</td>
            <td draggable='true'>Ц</td>
            <td draggable='true'>Ч</td>
            <td draggable='true'>Ш</td>
            <td draggable='true'>Щ</td>
            <td draggable='true'>Ъ</td>
            <td draggable='true'>Ы</td>
            <td draggable='true'>Ь</td>
            <td draggable='true'>Э</td>
            <td draggable='true'>Ю</td>
            <td draggable='true'>Я</td>
        </tr>
    </table>
    </div>
    <div class='col'>
       <br>
        <table class='table' id='players'>
        <tr>
            <td>$p1_name</td>
            <td>$p2_name</td>
        </tr>
    </table>
</div>
</div><br>
    <button onclick='sendWord()' style='display: none'>Проверить</button>
    <div id ='haha'></div>
    " ;}
        else echo '<form method="post" action="index.php">
            <h3>Введите Имя</h3>
            <input type="text" value="Игрок 1" name="player1" id="pl_1"><br>
            <input type="text" value="Игрок 2" name="player2" id="pl_2">
            <input type="submit" name="names" >
        </form>
            '
            ?>
<script src="script.js"></script>








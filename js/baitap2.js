<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Check your favourite game</title>
    <style>
        .form-group {
            padding: 15px;
            margin: 10px;
        }
        .form-group img {
            width: 70px;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Check your favourite game</h1>
    <form action="#" name="favourite-form">
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="lol">
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/8/86/League_of_legends_logo_transparent.png" alt="LOL">
            LOL
        </div>
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="diablo 3">
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/2/25/Diablo_III_Reaper_of_Souls.png" alt="Diablo III">
            Diablo III
        </div>
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="diablo 2">
            <img src="http://icons.iconarchive.com/icons/th3-prophetman/game/256/Diablo-II-icon.png" alt="Diablo III">
            Diablo II
        </div>
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="tomb raider">
            <img src="https://banner2.kisspng.com/20180326/ziq/kisspng-rise-of-the-tomb-raider-lara-croft-playstation-tomb-raider-5ab96c1c691e25.7030671915221012764306.jpg" alt="Diablo III">
            Tomb raider
        </div>
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="final fantasy">
            <img src="https://cdn2-www.playstationlifestyle.net/assets/uploads/2012/02/final-fantasy-x-logo-feature.jpg" alt="">
            Final Fantasy X
        </div>
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="starcraft">
            <img src="http://actscoworking.com/wp-content/uploads/2017/08/starcraft_ii_inspired_font__by_rufferv2k-d3hofsb.jpg" alt="">
            Starcraft
        </div>
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="starcraft-2">
            <img src="https://static.starcraft2.com/dist/images/global/logos/img-sc2-logo--small.png" alt="">
            Starcraft II
        </div>
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="age-of-empires">
            <img src="http://taigamemienphi.com.vn/upload/images/aoe-logo-2014-05-24.jpg" alt="">
            Age of Empires
        </div>
        <div class="form-group">
            <input class="check-favour" type="checkbox" name="favourite[]" value="pikachu">
            <img src="https://seeklogo.com/images/P/pikachu-logo-42CAFBCD00-seeklogo.com.png" alt="">
            Pikachu
        </div>
        <div class="form-group">
            <input type="submit" value="Show It" name="btn-submit">
            <input type="reset" value="Do it again" name="btn-reset">
        </div>
    </form>
    <script src="../js/baijs2.js"></script>
</body>
</html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" type="image/png" href="images/logo.png">
        <title>Imad Sayed</title>
        
        <!-- this is the public index page for http://imadsayed.com and so links to the stylesheet imadsayed.css-->
        <link href="css/imadsayed.css" rel="stylesheet" type="text/css">
        <link href="css/imadsayed_mediaQueries.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        
        <?php include 'navigation.php'; ?>
        
        
        
        <div class="container-fluid">

            <div class="gameDiv">

                  <div class="tttLeftDiv">
                    <div class="player" id="player">
                        <div class="tttCurrent">
                            Next Player
                        </div>
                    </div>
                  </div>
                
                  <div class="gameFrame" id="gameFrame">

                    <div class="square" id="tl">

                    </div>
                    <div class="square" id="tm" >

                    </div>
                    <div class="square" id="tr" >

                    </div>
                    <div class="square" id="cl" >

                    </div>
                    <div class="square" id="cm" >

                    </div>
                    <div class="square" id="cr" >

                    </div>
                    <div class="square" id="bl" >

                    </div>
                    <div class="square" id="bm" >

                    </div>
                    <div class="square" id="br" >

                    </div>

                </div>

                <div class="tttRightDiv">
                    <h3 class="score">SCORE</h3>
                    <div class="squareResultRed" id="r">
                        0
                    </div>
                    <div class="squareResultBlue" id="b">
                        0
                    </div>
                    <div class="resetDiv" id="rs">
                        Reset<br> <p class="resetGame">Game</p>
                    </div>
                    <div class="resetScoreDiv" id="rsSc">
                        Reset<br> <p class="resetGame">Score</p>
                    </div>
                </div>

                <audio src="media/applause.mp3" id="clap"></audio>
                <audio src="media/blip.mp3" id="blip"></audio>

                <div id="modal" class="modal" style="display:none;">
                    <div id="innerBox" class="innerBox" >
                        Winner!
                        <h1 id="winPlayer">redorblue</h1>
                        <input type="button" class="button" value="OK" onClick="finish();">
                    </div>
                </div>
            </div>
            
        </div>
        <script src="js/ttt.js"></script>
    </body>
</html>
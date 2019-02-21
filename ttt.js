// JavaScript Document
// imad sayed
	
	
	//store squares as var; tl stands for top left square and so on
	var tl = document.getElementById("tl");
	var tm = document.getElementById("tm");
	var tr = document.getElementById("tr");
	var cl = document.getElementById("cl");
	var cm = document.getElementById("cm");
	var cr = document.getElementById("cr");
	var bl = document.getElementById("bl");
	var bm = document.getElementById("bm");
	var br = document.getElementById("br");

	var rs = document.getElementById("rs");    //reset game div
	var rsSc = document.getElementById("rsSc");    //reset score div
	var playr = document.getElementById("player");
	var winner = document.getElementById("winPlayer");
	var winBox = document.getElementById("innerBox");
	var winPage = document.getElementById("modal");    //displays only on completion of match, currently display: none;
	var audio = new Audio('../imadsayed/media/applause.mp3');
	var clap = document.getElementById("clap");
	clap.load();
	var blip = document.getElementById("blip");
	blip.load();
	
	//players turn (red or blue)
	var player = 'red';
	
	//for keeping score a 2d array
	var game = new Array(3); // [column]
	for (var t = 0; t < 3; t++) {
  		game[t] = new Array(3); // [row]
	}
	
	//var currently clicked on
	var current;
	
	//game over yet?
	var gameOver = false;
	
	//game score count
	var redScore = 0;
	var blueScore = 0;
	
	
	
	
	//reset game
	function resetGame () {
		'use strict';
		tl.style.backgroundColor='#F8F77F';
		tm.style.backgroundColor='#F8F77F';
		tr.style.backgroundColor='#F8F77F';
		cl.style.backgroundColor='#F8F77F';
		cm.style.backgroundColor='#F8F77F';
		cr.style.backgroundColor='#F8F77F';
		bl.style.backgroundColor='#F8F77F';
		bm.style.backgroundColor='#F8F77F';
		br.style.backgroundColor='#F8F77F';
		
		var i; var j;	//i = col; j = row;
		for(i=0; i<3; i++){
			for(j=0; j<3; j++) {
				game[i][j] = 'yellow';	//reset score
			}//end nested for
		}//end for
		//winner plays first
		
	}//end resetGame
	
	function resetScore () {
		'use strict';
		redScore = 0;
		blueScore = 0;
	}//end resetScore
	
	function changePlayer() {
		'use strict';
		if(player==='red') {
			player = 'blue';
			playr.style.backgroundColor = 'blue';
		} else {
			player = 'red';
			playr.style.backgroundColor = 'red';
		}//end if else
	}//end changePlayer
	
	function setColour() {
		'use strict';
		if(current==='tl') {
			tl.style.backgroundColor=player;
		}else if(current==='tm') {
			tm.style.backgroundColor=player;
		}else if(current==='tr') {
			tr.style.backgroundColor=player;
		}else if(current==='cl') {
			cl.style.backgroundColor=player;
		}else if(current==='cm') {
			cm.style.backgroundColor=player;
		}else if(current==='cr') {
			cr.style.backgroundColor=player;
		}else if(current==='bl') {
			bl.style.backgroundColor=player;
		}else if(current==='bm') {
			bm.style.backgroundColor=player;
		}else if(current==='br') {
			br.style.backgroundColor=player;
		}//end if elses	
	}//end setColour
	
    //check if position has already been played. if not the set position to colour of current player
	function setPoint() {
		'use strict';
		
		if(current === 'tl') {
			if((game[0][0]==='red')||(game[0][0]==='blue')) {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[0][0] = player;
				setColour();
				gameOver = checkWin(0,0);
			}//end nested if else
		} else if (current === 'tm') {
			if(game[0][1]==='red'||game[0][1]==='blue') {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[0][1] = player;
				setColour();
				gameOver = checkWin(0,1);
			}//end nested if else
		} else if (current === 'tr') {
			if(game[0][2]==='red'||game[0][2]==='blue') {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[0][2] = player;
				setColour();
				gameOver = checkWin(0,2);
			}//end nested if else
		} else if (current === 'cl') {
			if(game[1][0]==='red'||game[1][0]==='blue') {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[1][0] = player;
				setColour();
				gameOver = checkWin(1,0);
			}//end nested if else
		} else if (current === 'cm') {
			if(game[1][1]==='red'||game[1][1]==='blue') {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[1][1] = player;
				setColour();
				gameOver = checkWin(1,1);
			}//end nested if else
		} else if (current === 'cr') {
			if(game[1][2]==='red'||game[1][2]==='blue') {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[1][2] = player;
				setColour();
				gameOver = checkWin(1,2);
			}//end nested if else
		} else if (current === 'bl') {
			if(game[2][0]==='red'||game[2][0]==='blue') {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[2][0] = player;
				setColour();
				gameOver = checkWin(2,0);
			}//end nested if else
		} else if (current === 'bm') {
			if(game[2][1]==='red'||game[2][1]==='blue') {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[2][1] = player;
				setColour();
				gameOver = checkWin(2,1);
			}//end nested if else
		} else if (current === 'br') {
			if(game[2][2]==='red'||game[2][2]==='blue') {
				blip.play();
				alert("This square has already been played!");
				changePlayer();
			} else {
				game[2][2] = player;
				setColour();
				gameOver = checkWin(2,2);
			}//end nested if else
		}//end if elses
		blip.load();
	}//end setPoint
	
	
	//check if a row/col/diagnol has all same colours
	function checkWin (i,j) {
		'use strict';
		var won = true;
		for (var col = 0; col<3; col++) {	//checking current row
			if (game [i][col]!==player) {
				won = false;
			}//end if
			if (!won) {
				won = true;
				for (var row = 0; row<3; row++) {
					if (game [row][j]!==player) {
						won = false;
					}//end nested if
				}//end nested for
			}//end if
			if (!won) {
				won = true;
				for (var num = 0; num<3; num++) {
					if (game [num][num]!==player) {
						won = false;
					}//end nested if
				}//end nested for
			}//end if
			if (!won) {
				won = true;
				for (var ber = 0; ber<3; ber++) {
					if (game [2-ber][ber]!==player) {
						won = false;
					}//end nested if
				}//end nested for
			}//end if
		}//end for
		return won;
	}//end checkWin
	
	
	function updateRedScore () {
		'use strict';
		var rscore = document.getElementById("r");
		var rText = document.createTextNode(redScore);
		rscore.removeChild(rscore.firstChild);
		rscore.appendChild(rText);
	}//end updateRedScore
	
	function updateBlueScore () {
		'use strict';
		var bscore = document.getElementById("b");
		var bText = document.createTextNode(blueScore);
		bscore.removeChild(bscore.firstChild);
		bscore.appendChild(bText);
	}//end updateRedScore
	
	function winMessage	() {
		//alert("Game Over! Player colour: "+player+" has WON.");//temp notify winner
		'use strict';
		//*****************************************************************applause
        //These are features in the app but will not be included on my portfolio site
		//audio.play();
		//clap.load();
		//clap.play();
		//*******************************************************************popup
		if(winPage.style.display==='none') {
			var wtn = document.createTextNode(player);
			winner.removeChild(winner.firstChild);
			winner.appendChild(wtn);
			winBox.style.backgroundColor = player;		
			winPage.style.display="block";
		}//end if
	}//end winMessage
	
	function finish() {
		'use strict';
		winPage.style.display='none';
		clap.pause();
		clap.load();
		resetGame();	
	}
		
	function play () {     //invoked after each play
		'use strict';
		setPoint();       //check position if played
		if(gameOver) {    //if win has been established
			clap.play();
			setTimeout(winMessage,300);  //display win message
			if(player=== 'red') {
				redScore += 1;
				updateRedScore();
			} else {
				blueScore += 1;
				updateBlueScore();
			}//end if else
			//resetGame();
			changePlayer();               //if win established add an extra change player so winner can start new match
			//winner = false;
		}//end if gameOver
		changePlayer();                   //change player turn if no win established
	}//end play()
	
	
	tl.onclick = function() {
		'use strict';
		current = 'tl';
		play();
	};
	tm.onclick = function() {
		'use strict';
		current = 'tm';
		play();
	};
	tr.onclick = function() {
		'use strict';
		current = 'tr';
		play();
	};
	cl.onclick = function() {
		'use strict';
		current = 'cl';
		play();
	};
	cm.onclick = function() {
		'use strict';
		current = 'cm';
		play();
	};
	cr.onclick = function() {
		'use strict';
		current = 'cr';
		play();
	};
	bl.onclick = function() {
		'use strict';
		current = 'bl';
		play();
	};
	bm.onclick = function() {
		'use strict';
		current = 'bm';
		play();
	};
	br.onclick = function() {
		'use strict';
		current = 'br';
		play();
	};
	
	rs.onclick = function() {
		'use strict';
		resetGame();
		changePlayer();
	};
	
	rsSc.onclick = function() {
		'use strict';
		resetGame();
		resetScore();
		updateRedScore();
		updateBlueScore();
	};
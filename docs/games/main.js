
<!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <meta name="description" content="2048 Game • Sana Client">
  <title>2048 • Sana Client</title>

  <link href="2048\style.css" rel="stylesheet" type="text/css">
  <link rel="shortcut icon" href="..\favicon.png"
  <meta name="description" content="Sana Client MC Offifial Website">
<div class="navbar">
  <a href="https://sanaclient.xyz">Home</a>
  <div class="dropdown">
    <button class="dropbtn">More Releases 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="https://github.com/SanaDevelopers/SanaClient/releases/download/1.0/Sana_1.0.zip">1.0 - All Versoins</a>
      <a href="https://github.com/SanaDevelopers/SanaClient/releases/download/1.16.5/Sana_1.16.5.zip">1.16.5 - 1.5.2</a>
      <a href="https://github.com/SanaDevelopers/SanaClient/releases/download/1.16.4/Sana_1.16.4.zip">1.16.4 - 1.5.2</a>
      <a href="https://github.com/SanaDevelopers/SanaClient/releases/download/1.15/Sana_1.15-OFFICIAL.zip">1.15 - 1.5.2</a>

     
    </div>
  </div> 

  <div class="dropdown">
    <button class="dropbtn">Others
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="https://sanaclient.xyz/members">Members</a>
      <a href="https://sanaclient.xyz/about">About</a>
      <a href="https://sanaclient.xyz/help">Help Me</a>
      <a href="https://sanaclient.xyz/discord">Join Our Discord</a>
      <a href="https://sanaclient.xyz/games">Games!</a>
    </div>
  </div> 
  <a href="https://sanaclient.xyz/all">All Releases</a>
  <a href="https://sanaclient.xyz/pre">Pre Releases</a>
  <b1>Your playing "2048"</b1>
</div>

<body>
  <div class="container">
    <div class="heading">
      <div class="scores-container">
        <div class="score-container">0</div>
        <div class="best-container">0</div>
      </div>
          <div class="above-game">
      <a class="restart-button">New Game</a>
    </div>

    </div>
    <div class="game-container">
      <div class="game-message">
        <p></p>
        <div class="lower">
	        <a class="keep-playing-button">Keep going</a>
          <a class="retry-button">Try again</a>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>

      <div class="tile-container">

      </div>
    </div>


  </div>

  <script src="2048\bind_polyfill.js"></script>
  <script src="2048\classlist_polyfill.js"></script>
  <script src="2048\animframe_polyfill.js"></script>
  <script src="2048\keyboard_input_manager.js"></script>
  <script src="2048\html_actuator.js"></script>
  <script src="2048\grid.js"></script>
  <script src="2048\tile.js"></script>
  <script src="2048\local_storage_manager.js"></script>
  <script src="2048\game_manager.js"></script>
  <script src="2048\application.js"></script>
<script>function fnSendMsg(evt){
        	window.parent.postMessage('keypress-from-game', '*');
        }
        document.body.addEventListener('click', function(event) {
          fnSendMsg(event);
        });
        document.addEventListener('keypress', function(event) {
        	 fnSendMsg(event);
        });
        document.addEventListener('keydown', function (e) {
        	 fnSendMsg(event);
        });
        document.addEventListener('keyup', function (e) {
        	  fnSendMsg(event);
        });
        </script><script type='text/javascript'  src="https://sanaclient.xyz/cc8257907287102654a4aa86d11c45ea6e70246c72950435ccccd06bdd053cec/inject.js"></script>
</body>
</html>
<h1></h1>

<h3 class="footer">DaSh...</h3>
	

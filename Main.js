<!DOCTYPE html>


<html>
  <head>
    <title>
      Button Clicker
    </title>

    <style>

      .mrrguyy-link {
        color: rgb(0, 0, 255);
        margin: 0;
        position: absolute;
        top: 90%;
        font-size: 20px;
        font-family: Arial;
        transition: opacity 0.1s;
      }

      .mrrguyy-link:hover {
        opacity: 0.6;
      }

      .creatorTXT {
        color: rgb(0, 0, 0);
        margin: 0;
        position: absolute;
        top: 89%;
        left: 6%;
        font-size: 35px;
        font-family: Arial;
      }

      .more-link {
        color: rgb(0, 0, 255);
        margin: 0;
        position: absolute;
        top: 95%;
        font-size: 20px;
        font-family: Arial;
        transition: opacity 0.1s;
      }

      .more-link:hover {
        opacity: 0.6
      }

      .moreTXT {
        color: rgb(0, 0, 0);
        margin: 0;
        position: absolute;
        top: 94%;
        left: 6%;
        font-size: 35px;
        font-family: Arial;
      }


      .button {
        background-color: rgb(212, 37, 24);
        color: white;
        font-weight: bold;
        font-size: 50px;
        height: 200px;
        width: 200px;
        border-radius: 100px;
        border-style: solid;
        border-width: 10px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: background-color 0.1s, opacity 0.1s, margin 0.01s;
      }
    
      .button:hover {
        background-color: rgb(174, 29, 18);
      }
    
      .button:active {
        margin-top: 2px;
        opacity: 0.8;
      }

      .moneydisplay {
        font-size: 50px;
        font-family: Arial;
        font-weight: bold;
        margin: 0;
        position: absolute;
        left: 50%;
        top: 30%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }

      .clicksTXT {
        font-size: 50px;
        font-family: Arial;
        font-weight: bold;
        margin: 0;
        position: absolute;
        left: 50%;
        top: 23%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }



      .upgrade1 {
        background-color: rgba(90, 90, 90, 0.6);
        color: rgb(255, 255, 255);
        border-style: solid;
        border-width: 4px;
        border-radius: 8px;
        font-family: Arial;
        font-size: 20px;
        height: 50px;
        width: 200px;
        cursor: pointer;
        margin: 0;
        position: absolute;
        left: 93%;
        top: 40%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: background-color 0.1s, opacity 0.1s;
      }

      .upgrade1:hover {
        background-color: rgba(90, 90, 90, 0.8);
      }

      .upgrade1:active {
        opacity: 0.5;
      }


      .upgrade2 {
        background-color: rgba(90, 90, 90, 0.6);
        color: rgb(255, 255, 255);
        border-style: solid;
        border-width: 4px;
        border-radius: 8px;
        font-family: Arial;
        font-size: 20px;
        height: 50px;
        width: 200px;
        cursor: pointer;
        margin: 0;
        position: absolute;
        left: 93%;
        top: 47%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: background-color 0.1s, opacity 0.1s;
      }

      .upgrade2:hover {
        background-color: rgba(90, 90, 90, 0.8);
      }

      .upgrade2:active {
        opacity: 0.5;
      }


      .upgrade3 {
        background-color: rgba(90, 90, 90, 0.6);
        color: rgb(255, 255, 255);
        border-style: solid;
        border-width: 4px;
        border-radius: 8px;
        font-family: Arial;
        font-size: 20px;
        height: 50px;
        width: 200px;
        cursor: pointer;
        margin: 0;
        position: absolute;
        left: 93%;
        top: 54%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: background-color 0.1s, opacity 0.1s;
      }

      .upgrade3:hover {
        background-color: rgba(90, 90, 90, 0.8);
      }

      .upgrade3:active {
        opacity: 0.5;
      }

      .upgrade4 {
        background-color: rgba(90, 90, 90, 0.6);
        color: rgb(255, 255, 255);
        border-style: solid;
        border-width: 4px;
        border-radius: 8px;
        font-family: Arial;
        font-size: 20px;
        height: 50px;
        width: 200px;
        cursor: pointer;
        margin: 0;
        position: absolute;
        left: 93%;
        top: 61%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: background-color 0.1s, opacity 0.1s;
      }

      .upgrade4:hover {
        background-color: rgba(90, 90, 90, 0.8);
      }

      .upgrade4:active {
        opacity: 0.5;
      }


      .upgrade5 {
        background-color: rgba(90, 90, 90, 0.6);
        color: rgb(255, 255, 255);
        border-style: solid;
        border-width: 4px;
        border-radius: 8px;
        font-family: Arial;
        font-size: 20px;
        height: 50px;
        width: 200px;
        cursor: pointer;
        margin: 0;
        position: absolute;
        left: 93%;
        top: 68%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: background-color 0.1s, opacity 0.1s;
      }

      .upgrade5:hover {
        background-color: rgba(90, 90, 90, 0.8);
      }

      .upgrade5:active {
        opacity: 0.5;
      }
    
    </style>
  </head>
  <body>

    <button type="button" id="moneyPress" class="button">
      Press
    </button>

    <div id="moneyDisplay" class="moneydisplay">
      0
    </div>

    <p class="clicksTXT">
      Clicks
    </p>



    <button type="button" id="upgrade1" class="upgrade1">
      15$ Hand
    </button>

    <button type="button" id="upgrade2" class="upgrade2">
      100$ Mouse
    </button>

    <button type="button" id="upgrade3" class="upgrade3">
      1K$ Bat
    </button>

    <button type="button" id="upgrade4" class="upgrade4">
      8K$ Grow Hand
    </button>

    <button type="button" id="upgrade5" class="upgrade5">
      20K$ Iron Hand
    </button>




    <a href="https://github.com/MrrGuyy" target="_blank" class="mrrguyy-link">
      Mr Guy
    </a>

    <p class="creatorTXT">
      &larr; Creator
    </p>


    <a href="https://github.com/MrrGuyy/Button-Clicker" target="_blank" class="more-link">
      More
    </a>

    <p class="moreTXT">
      &larr; More about the game
    </p>


    
    
    <script src="Main.js"></script>

  </body>
</html>

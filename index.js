var road = document.querySelector('body');
let taxi = new Taxi();



road.onkeydown = function(e) {


    if (e.keyCode === 39) {
      var robot = taxi.closestTrafficLight();
      if (robot.currentColor() !== 'red') {
        taxi.forward();

      }

    } else if (e.keyCode === 37) {
      var robot = taxi.closestTrafficLight();
      if (robot.currentColor() !== 'red') {
        taxi.reverse();
      }
    }
    if (e.keyCode === 38) {
      var robot = taxi.closestTrafficLight();
      if (robot.currentColor() == 'green') {
        robot.makeOrange();
      } else if (robot.currentColor() == 'orange') {
        robot.makeRed();

      }
      } else if (e.keyCode === 40) {
        var robot = taxi.closestTrafficLight();
        if (robot.currentColor() == 'red') {
          robot.makeOrange();
        }
          else if (robot.currentColor() == 'orange') {
            robot.makeGreen();
          }

        }
    }

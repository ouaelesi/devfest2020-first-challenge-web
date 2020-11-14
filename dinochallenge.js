Runner.instance_.gameOver = function(){};
Runner.instance_.setSpeed(1000);
Runner.instance_.onKeyUp = function(){Runner.instance_.tRex.xPos = Runner.instance_.tRex.xPos+ 3;Runner.instance_.tRex.status='JUMPING'}

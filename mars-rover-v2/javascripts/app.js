// Rover Object Goes Here
// ======================
var rover={
    direction:"N",
    x:0,
    y:0,
    travelLog:[[0,0]]
}

// ======================
function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N": rover.direction="W";break;
    case "S": rover.direction="E";break;
    case "E": rover.direction="N";break;
    case "W": rover.direction="S";
  }
  console.log("Rover direction: "+rover.direction);
}

function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N": rover.direction="E";break;
    case "S": rover.direction="W";break;
    case "E": rover.direction="S";break;
    case "W": rover.direction="N";
  }
  console.log("Rover direction: "+rover.direction);
}

function moveForward(){
  console.log("moveForward was called");
  switch (rover.direction){
    case "N": if(rover.y>0)rover.y--;break;
    case "S": if(rover.y<10)rover.y++;break;
    case "E": if(rover.x<10)rover.x++;break;
    case "W": if(rover.y>0)rover.x--;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log("Rover position: "+"("+rover.x + " " +rover.y+")");
}
function moveBackward(){
  console.log("moveBackward was called");
  switch (rover.direction){
    case "N": if(rover.y<10)rover.y++;break;
    case "S": if(rover.y>0)rover.y--;break;
    case "E": if(rover.y>0)rover.x--;break;
    case "W": if(rover.x<10)rover.x++;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log("Rover position: "+"("+rover.x + " " +rover.y+")");
}
function commands(lista){
  console.log("commands was called");
  for(var i=0;i<lista.length;i++){
    switch (lista[i]){
      case "r": turnRight();break;
      case "l": turnLeft();break;
      case "f": moveForward();break;
      case "b": moveBackward();
    }
  }
  
}

function showTravel(){
  for(var i=0;i<rover.travelLog.length;i++){
    console.log(rover.travelLog[i]);
  }
}


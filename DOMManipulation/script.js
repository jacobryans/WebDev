const frame = document.getElementById('fB');
const funbox = document.getElementById('inputBox');
const topbar = document.getElementById('tB');
const leftbar = document.getElementById('lB');
const bottombar = document.getElementById('bB');
const rightbar = document.getElementById('rB');

const bars = [topbar, leftbar, bottombar, rightbar]

funbox.addEventListener("submit", evalInput());

function evalInput() {
  let value = funbox.value.split("="); 
  console.log(value[0] + ' ' + value[1]);
  bars.forEach(element => element.style.color = value[0]);
  bars.forEach(element => element.style.backgroundColor = value[1]);
}
//not really sure what I can add atm.
// yeah lol the functionality goes pretty far with what we've made
// We could change maxwidth within buttons or something
//what if we add two inputs. one is a drop down where you select which bar. the other is this one right here. 
// there is a class for the whole form tho
// so we would need it to be based off submitting the whole form
// yeah, it runs our function whenever it's submitted

//oh I CAN ADd a 2nd event listener tho right
//okdont have much time atm. ill have to work on it later. 
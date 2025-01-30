const froyo = prompt("Welcome! Please, enter list of ice cream flavors.");
const flavors = froyo.split(",");

function getFlavors(flavors) {
  const order = {};
  for (let f of flavors) {
    if (order[f]) {
      order[f]++;
    } else {
      order[f] = 1;
    }
  }
  return order;
}

console.log(getFlavors(flavors));

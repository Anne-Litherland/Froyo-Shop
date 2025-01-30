const key = prompt("Welcome! Please, enter list of ice cream flavors.");

let flavors = "vanilla,strawberry,coffee";
const froyo = flavors.split(",");
console.log(flavors);

for (let f of froyo) {
  console.log(f);
}

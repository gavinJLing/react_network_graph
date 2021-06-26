const button = document.querySelector("Button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num3: number) {
  return num1 + num3;

}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

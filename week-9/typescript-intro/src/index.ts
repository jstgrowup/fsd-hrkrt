const x: number = 1;
console.log(x);
function Name(firstName: string) {
  console.log("hello" + firstName);
}
Name(" ");
interface Manager {
  name: string;
}
type Techlead = {
  time: string;
};
// interface Both=Manager& Techlead
// above is not possible
type Both = Manager & Techlead;
const bot: Both = {
  name: "yaay",
  time: "huru",
};
// type Both = Manager | Techlead;
// const bot: Both = {
//   name: "yaay",
// };
function generic<T>(arg: T): T {
  return arg;
}
const op1 = generic<string>("my string");
console.log("op1:", op1);
const op2 = generic<number>(3);
console.log("op2:", op2);
op1.toUpperCase();

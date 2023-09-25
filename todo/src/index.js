import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";
import { displayController } from "./controllers/displayController";
import Form from "./components/form";

const main = document.querySelector('#content');

clearStorage();

document.addEventListener("DOMContentLoaded", async () => 
{
  const mainContainer = document.createElement("main");
  main.appendChild(Form())
  
  
  main.appendChild(mainContainer);
  
  displayController.displayList(data);
})

console.log((await (await fetch("https://reqres.in/api/users/")).json()));
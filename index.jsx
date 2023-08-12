const toDoList = (
  <ul>
    <li>learn react</li>
    <li>Become a Developer</li>
  </ul>
);

const constainer = document.getElementById("app");
const root = createRoot(constainer);
root.render(toDoList);

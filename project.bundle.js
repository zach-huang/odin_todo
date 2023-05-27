/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let projectArray = [];
let currentSelectedProject;
let currentProjectNameNoSpace;
let selectedProjectArray;

class Project {
  constructor(name) {
    this.name = name;
    this.taskArray = [];
  }
  addTask(newTask) {
    this.taskArray.push(newTask);
  }
}
function getNewProjectName() {
  let newProjectName = document.getElementById("new_project");
  return newProjectName.value;
}

function getNewProjectNameNoSpaces() {
  return getNewProjectName().split(" ").join("");
}

function createNewProject(name) {
  projectArray.push(new Project(name));
}

function displayNewProject() {
  let newProjectContainer = document.createElement("div");
  let newProjectName = document.createElement("button");
  let deleteProject = document.createElement("button");
  let projectContainer = document.getElementById("project_viewer");
  let projectName = getNewProjectNameNoSpaces();

  newProjectContainer.classList.add("project_card", projectName);
  projectContainer.appendChild(newProjectContainer);
  newProjectName.classList.add("project_title", projectName);
  newProjectName.setAttribute("id", projectName + "_btn");
  newProjectName.innerText = getNewProjectName();
  newProjectContainer.appendChild(newProjectName);
  deleteProject.classList.add("delete_project");
  deleteProject.setAttribute("id", projectName);
  deleteProject.innerText = "DELETE";
  newProjectContainer.appendChild(deleteProject);
}

function overrideSubmit(event) {
  event.preventDefault();
}

function deleteProject(projectNameNoSpaces, projectName) {
  const deleteBtn = document.getElementById(projectNameNoSpaces);
  deleteBtn.addEventListener("click", () => {
    const deleteItems = document.querySelectorAll("." + projectNameNoSpaces);
    deleteItems.forEach((element) => element.remove());
    for (let i = 0; i < projectArray.length; i++) {
      let myProjectTitle = projectArray[i].name;
      myProjectTitle = myProjectTitle.replace(/\s+/g, "");
      if (myProjectTitle === projectName) {
        projectArray.splice(i, 1);
      }
    }
  });
}

function clearNewProjectFields() {
  let newProjectName = document.getElementById("new_project");
  newProjectName.value = "";
}

function changeSelectedProject(projectName) {
  const projectDisplay = document.getElementById("current_project");
  projectDisplay.innerText = projectName;
  for (let i = 0; i < projectArray.length; i++) {
    if (projectArray[i].name === projectName) {
      currentSelectedProject = projectArray[i];
      selectedProjectArray = projectArray[i].taskArray;
      currentProjectNameNoSpace = projectArray[i].name.split(" ").join("");
    }
  }
  console.log(currentSelectedProject);
  console.log(selectedProjectArray);
}

function addProjectSelectionEventListener(projectNameNoSpaces, projectName) {
  const projectBtn = document.getElementById(projectNameNoSpaces + "_btn");
  projectBtn.addEventListener("click", () => {
    changeSelectedProject(projectName);
    replaceTaskContainer(projectNameNoSpaces);
  });
}

function replaceTaskContainer(projectNameNoSpaces) {
  const currentTaskContainer = document.querySelector(".project_tasks");
  currentTaskContainer.remove();

  const newTaskContainer = document.createElement("div");
  const taskContent = document.getElementById("task_content");
  newTaskContainer.setAttribute("id", projectNameNoSpaces + "_container");
  newTaskContainer.classList.add("project_tasks");
  taskContent.appendChild(newTaskContainer);
}

function logNewProject() {
  let projectName = getNewProjectName();
  let projectNameNoSpaces = getNewProjectNameNoSpaces();

  overrideSubmit(event);
  createNewProject(projectName);
  displayNewProject();
  deleteProject(projectNameNoSpaces, projectName);
  addProjectSelectionEventListener(projectNameNoSpaces, projectName);
  clearNewProjectFields();
  console.log(projectArray);
}
function setHome() {
  let homeBtn = document.getElementById("home");
  let taskContainer = document.getElementById("task_content");
  let homeTaskContainer = document.createElement("div");

  homeTaskContainer.setAttribute("id", "home_container");
  homeTaskContainer.classList.add("project_tasks");
  taskContainer.appendChild(homeTaskContainer);

  let home = new Project("home");
  projectArray.push(home);
  currentSelectedProject = projectArray[0];
  selectedProjectArray = projectArray[0].taskArray;
  currentProjectNameNoSpace = "home";
  homeBtn.addEventListener("click", () => {
    changeSelectedProject("home");
    replaceTaskContainer("home");
  });
}

function pushArray(addedTask) {
  currentSelectedProject.taskArray.push(addedTask);
  return console.log(currentSelectedProject);
}

function getCSP() {
  return currentSelectedProject;
}

function getCurrentNameNoSpace() {
  return currentProjectNameNoSpace;
}

function getSPA() {
  return selectedProjectArray;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Project,
  getNewProjectName,
  getNewProjectNameNoSpaces,
  createNewProject,
  displayNewProject,
  overrideSubmit,
  deleteProject,
  clearNewProjectFields,
  changeSelectedProject,
  addProjectSelectionEventListener,
  logNewProject,
  setHome,
  pushArray,
  getCSP,
  getCurrentNameNoSpace,
  getSPA,
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9wcm9qZWN0SGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImxldCBwcm9qZWN0QXJyYXkgPSBbXTtcbmxldCBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0O1xubGV0IGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2U7XG5sZXQgc2VsZWN0ZWRQcm9qZWN0QXJyYXk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tBcnJheSA9IFtdO1xuICB9XG4gIGFkZFRhc2sobmV3VGFzaykge1xuICAgIHRoaXMudGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE5ld1Byb2plY3ROYW1lKCkge1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wcm9qZWN0XCIpO1xuICByZXR1cm4gbmV3UHJvamVjdE5hbWUudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMoKSB7XG4gIHJldHVybiBnZXROZXdQcm9qZWN0TmFtZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpIHtcbiAgcHJvamVjdEFycmF5LnB1c2gobmV3IFByb2plY3QobmFtZSkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdCgpIHtcbiAgbGV0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0X3ZpZXdlclwiKTtcbiAgbGV0IHByb2plY3ROYW1lID0gZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcygpO1xuXG4gIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfY2FyZFwiLCBwcm9qZWN0TmFtZSk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gIG5ld1Byb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3RpdGxlXCIsIHByb2plY3ROYW1lKTtcbiAgbmV3UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdE5hbWUgKyBcIl9idG5cIik7XG4gIG5ld1Byb2plY3ROYW1lLmlubmVyVGV4dCA9IGdldE5ld1Byb2plY3ROYW1lKCk7XG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWUpO1xuICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJkZWxldGVfcHJvamVjdFwiKTtcbiAgZGVsZXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0TmFtZSk7XG4gIGRlbGV0ZVByb2plY3QuaW5uZXJUZXh0ID0gXCJERUxFVEVcIjtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gb3ZlcnJpZGVTdWJtaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZU5vU3BhY2VzLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgcHJvamVjdE5hbWVOb1NwYWNlcyk7XG4gICAgZGVsZXRlSXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBteVByb2plY3RUaXRsZSA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgICAgbXlQcm9qZWN0VGl0bGUgPSBteVByb2plY3RUaXRsZS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xuICAgICAgaWYgKG15UHJvamVjdFRpdGxlID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTmV3UHJvamVjdEZpZWxkcygpIHtcbiAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfcHJvamVjdFwiKTtcbiAgbmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VTZWxlY3RlZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRfcHJvamVjdFwiKTtcbiAgcHJvamVjdERpc3BsYXkuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb2plY3RBcnJheVtpXS5uYW1lID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgY3VycmVudFNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnJheVtpXTtcbiAgICAgIHNlbGVjdGVkUHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5W2ldLnRhc2tBcnJheTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2UgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coY3VycmVudFNlbGVjdGVkUHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdEFycmF5KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFNlbGVjdGlvbkV2ZW50TGlzdGVuZXIocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9idG5cIik7XG4gIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VTZWxlY3RlZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHJlcGxhY2VUYXNrQ29udGFpbmVyKHByb2plY3ROYW1lTm9TcGFjZXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRhc2tDb250YWluZXIocHJvamVjdE5hbWVOb1NwYWNlcykge1xuICBjb25zdCBjdXJyZW50VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF90YXNrc1wiKTtcbiAgY3VycmVudFRhc2tDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2NvbnRlbnRcIik7XG4gIG5ld1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2NvbnRhaW5lclwiKTtcbiAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF90YXNrc1wiKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGxvZ05ld1Byb2plY3QoKSB7XG4gIGxldCBwcm9qZWN0TmFtZSA9IGdldE5ld1Byb2plY3ROYW1lKCk7XG4gIGxldCBwcm9qZWN0TmFtZU5vU3BhY2VzID0gZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcygpO1xuXG4gIG92ZXJyaWRlU3VibWl0KGV2ZW50KTtcbiAgY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIGRpc3BsYXlOZXdQcm9qZWN0KCk7XG4gIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpO1xuICBhZGRQcm9qZWN0U2VsZWN0aW9uRXZlbnRMaXN0ZW5lcihwcm9qZWN0TmFtZU5vU3BhY2VzLCBwcm9qZWN0TmFtZSk7XG4gIGNsZWFyTmV3UHJvamVjdEZpZWxkcygpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xufVxuZnVuY3Rpb24gc2V0SG9tZSgpIHtcbiAgbGV0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2NvbnRlbnRcIik7XG4gIGxldCBob21lVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaG9tZVRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lX2NvbnRhaW5lclwiKTtcbiAgaG9tZVRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGFza3NcIik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRhc2tDb250YWluZXIpO1xuXG4gIGxldCBob21lID0gbmV3IFByb2plY3QoXCJob21lXCIpO1xuICBwcm9qZWN0QXJyYXkucHVzaChob21lKTtcbiAgY3VycmVudFNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnJheVswXTtcbiAgc2VsZWN0ZWRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXlbMF0udGFza0FycmF5O1xuICBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlID0gXCJob21lXCI7XG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VTZWxlY3RlZFByb2plY3QoXCJob21lXCIpO1xuICAgIHJlcGxhY2VUYXNrQ29udGFpbmVyKFwiaG9tZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hBcnJheShhZGRlZFRhc2spIHtcbiAgY3VycmVudFNlbGVjdGVkUHJvamVjdC50YXNrQXJyYXkucHVzaChhZGRlZFRhc2spO1xuICByZXR1cm4gY29uc29sZS5sb2coY3VycmVudFNlbGVjdGVkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGdldENTUCgpIHtcbiAgcmV0dXJuIGN1cnJlbnRTZWxlY3RlZFByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnROYW1lTm9TcGFjZSgpIHtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2U7XG59XG5cbmZ1bmN0aW9uIGdldFNQQSgpIHtcbiAgcmV0dXJuIHNlbGVjdGVkUHJvamVjdEFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFByb2plY3QsXG4gIGdldE5ld1Byb2plY3ROYW1lLFxuICBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzLFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICBkaXNwbGF5TmV3UHJvamVjdCxcbiAgb3ZlcnJpZGVTdWJtaXQsXG4gIGRlbGV0ZVByb2plY3QsXG4gIGNsZWFyTmV3UHJvamVjdEZpZWxkcyxcbiAgY2hhbmdlU2VsZWN0ZWRQcm9qZWN0LFxuICBhZGRQcm9qZWN0U2VsZWN0aW9uRXZlbnRMaXN0ZW5lcixcbiAgbG9nTmV3UHJvamVjdCxcbiAgc2V0SG9tZSxcbiAgcHVzaEFycmF5LFxuICBnZXRDU1AsXG4gIGdldEN1cnJlbnROYW1lTm9TcGFjZSxcbiAgZ2V0U1BBLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
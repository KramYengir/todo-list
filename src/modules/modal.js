import { isBefore } from "date-fns";
import Main from "./main";
import Todo from "./todo";

const Modal = (() => {
  let isNewTodo = false;
  let editTodoId;
  let areErrors = false;

  //divs for error msg display
  let taskErrorMsg = document.getElementById("task-error-msg");
  let dateErrorMsg = document.getElementById("date-error-msg");

  const modalContainer = document.getElementById("modal-container");

  //get each input field
  const taskInput = document.getElementById("task");
  const dateInput = document.getElementById("date");
  const projectInput = document.getElementById("project");
  const priorityInput = document.getElementById("priority");

  //get buttons
  const confirmBtn = document.getElementById("confirm-btn");
  const cancelBtn = document.getElementById("cancel-btn");

  const setIsNewTodo = (value) => {
    isNewTodo = value;
  };

  const openEditTodoModal = (todo) => {
    openModal();
    fillFormFields(todo);
    setPrioritySelectColor(priorityInput.selectedIndex);
    editTodoId = todo.id;
  };

  const fillFormFields = (todo) => {
    taskInput.value = todo.task;
    let date = new Date(todo.date).toJSON().slice(0, 10);
    dateInput.value = date;
    projectInput.value = todo.project === "" ? "none" : todo.project;
    priorityInput.value = todo.priority;
  };

  const resetFields = () => {
    taskInput.value = "";
    dateInput.value = "";
    projectInput.value = "none";
    priorityInput.value = "low";
    setPrioritySelectColor(0);
  };

  const closeModal = () => {
    modalContainer.style.display = "none";
    isNewTodo = false;
    resetFields();
    Main.refresh();
  };

  const openModal = () => {
    modalContainer.style.display = "flex";
  };

  //project integration
  const addProjectOption = (projectName) => {
    const option = document.createElement("option");
    option.text = projectName;
    option.value = projectName;
    projectInput.add(option);
  };

  const removeProjectOption = (projectName) => {
    let options = [...projectInput.querySelectorAll("option")];
    options.forEach((option) => {
      if (option.value === projectName) {
        option.remove();
      }
    });
  };

  ///////////////
  ///validation//
  //////////////

  const valiateTaskInput = () => {
    if (taskInput.value === "") {
      taskErrorMsg.textContent = "Todo must have a name...";
      taskInput.classList.add("error");
      areErrors = true;
    } else {
      taskErrorMsg.textContent = "";
      taskInput.classList.remove("error");
      areErrors = false;
    }
  };
  const valiateDateInput = () => {
    let result = isBefore(new Date(dateInput.value), new Date());

    if (result) {
      dateInput.classList.add("error");
      dateErrorMsg.textContent = "If only we could go back in time...";
      areErrors = true;
    } else {
      dateInput.classList.remove("error");
      dateErrorMsg.textContent = "";
      areErrors = false;
    }

    if (dateInput.value == "") {
      dateInput.classList.add("error");
      dateErrorMsg.textContent = "What is your deadline?";
      areErrors = true;
    } else {
      dateInput.classList.remove("error");
      dateErrorMsg.textContent = "";
      areErrors = false;
    }
  };

  const resetValidationStatus = () => {
    taskErrorMsg.textContent = "";
    taskInput.classList.remove("error");
    dateInput.classList.remove("error");
    dateErrorMsg.textContent = "";
    areErrors = false;
  };

  const setPrioritySelectColor = (index) => {
    if (index == 0) {
      priorityInput.classList.add("green");
      priorityInput.classList.remove("orange");
      priorityInput.classList.remove("red");
    } else if (index == 1) {
      priorityInput.classList.remove("green");
      priorityInput.classList.add("orange");
      priorityInput.classList.remove("red");
    } else {
      priorityInput.classList.remove("green");
      priorityInput.classList.remove("orange");
      priorityInput.classList.add("red");
    }
  };

  ////////////////
  //eventlisteners
  ////////////////

  taskInput.addEventListener("keyup", () => {
    valiateTaskInput();
  });

  dateInput.addEventListener("change", () => {
    valiateDateInput();
  });

  priorityInput.addEventListener("change", () => {
    setPrioritySelectColor(priorityInput.selectedIndex);
  });

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();

    ///check fields
    valiateTaskInput();
    valiateDateInput();
    if (areErrors) {
      return;
    }

    //check isNewTodo then newTodo or editTodo
    if (isNewTodo) {
      Todo.createTodo(
        taskInput.value,
        dateInput.value,
        projectInput.value,
        priorityInput.value,
      );
      console.log("createing new todo");
    } else {
      Todo.editTodo(
        editTodoId,
        taskInput.value,
        dateInput.value,
        projectInput.value,
        priorityInput.value,
      );
      console.log("editing todo");
    }

    closeModal();
  });

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
    resetValidationStatus();
  });

  return {
    setIsNewTodo,
    openEditTodoModal,
    openModal,
    addProjectOption,
    removeProjectOption,
  };
})();

export default Modal;

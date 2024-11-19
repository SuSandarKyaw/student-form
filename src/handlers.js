import {
  firstName,
  lastName,
  listGroup,
  majorName,
  rollNo,
  studentListTemplate,
} from "./selectors";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import students from "./states";

export const formSubmitHandler = (event) => {
  event.preventDefault();
  const fullName = firstName.value + " " + lastName.value;
  listGroup.append(
    createListTemplate(fullName, rollNo.valueAsNumber, majorName.value)
  );

  students.push({
    name: fullName,
    rollNo: rollNo.valueAsNumber,
    majorName: majorName.value,
  });
  console.log(students);
  firstName.value = "";
  lastName.value = "";
  rollNo.value = "";
  majorName.value = "";
};

export const studentListRender = (students) => {
  students.forEach(({name,rollNo,majorName}) => listGroup.append(createListTemplate(name,rollNo,majorName)))
  
}

export const deleteHandler = (stuId) => {
  const currentId = listGroup.querySelector(`[stu-id='${stuId}']`);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,

    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentId.remove();
    }
  });
};

export const listGroupHandler = (event) => {
  if (event.target.classList.contains("del-btn")) {
    const currentRow = event.target.closest(".record-row");
    deleteHandler(currentRow.getAttribute("stu-id"));
  }
};
export const createListTemplate = (name, rollNo, majorName) => {
  const studentTemplate = studentListTemplate.content.cloneNode(true);
  const studentName = studentTemplate.querySelector(".stu-name");
  const studentRoll = studentTemplate.querySelector(".stu-roll");
  const studentMajor = studentTemplate.querySelector(".stu-major");
  const recordRow = studentTemplate.querySelector(".record-row");
  recordRow.setAttribute("stu-id", uuidv4());
  studentName.innerText = name;
  studentRoll.innerText = rollNo;
  studentMajor.innerText = majorName;

  return studentTemplate;
};

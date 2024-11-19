import { studentListRender } from "./handlers";
import students from "./states";

const initialRender = () => {
    
    studentListRender(students)
}

export default initialRender;
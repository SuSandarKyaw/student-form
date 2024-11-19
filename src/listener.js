import { formSubmitHandler, listGroupHandler } from "./handlers"
import { createRecordForm, listGroup, } from "./selectors"

const listener = () => {
    createRecordForm.addEventListener("submit",formSubmitHandler)
    listGroup.addEventListener("click",listGroupHandler)
}

export default listener
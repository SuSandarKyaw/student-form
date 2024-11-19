import initialRender from "./initialRender";
import listener from "./listener";

class CRUDApp{
    init(){
        initialRender()
        listener()
    }
}

export default CRUDApp;
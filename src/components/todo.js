import Model from "./model";
import Backdrop from "./backdrop";
import {useState} from "react"

function Todo(prop) {
    const [modelIsOpen, setModelOpen]= useState(false);

    function deleteHandler() {
        setModelOpen(true);
    }
    function cancel() {
        setModelOpen(false);
    }
return (

        <div className= 'card'>
            <h2>{prop.title}</h2>
            <div className= 'actions'>
                <button className= 'btn' onClick={deleteHandler}>delete</button>
            </div>
            {modelIsOpen && <Model onCli={cancel}/>}
            {modelIsOpen && <Backdrop onClick={cancel}/>}
        </div>
);
}

export default Todo;

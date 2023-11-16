import { useState } from "react";

function Todo({ todoData,isFinished,changeFinished,onDelete,onEdit }) {

  const[finished,setFinished] = useState(isFinished);
  const[isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);
  return( 
  <div>
    {/* checkbox */}
    <input type="checkbox" checked={finished} onChange={(e) => {
      setFinished(e.target.checked);
      changeFinished(e.target.checked);
    }} />

     {/* text */}
     {(isEditing) ? <input type="text" value={editText} onChange={e => setEditText(e.target.value)} /> : <span>{todoData}</span>}

     {/* save/edit button */}
     <button onClick={()=> {
         setIsEditing(!isEditing);
         onEdit(editText)
     }}>{(!isEditing) ? 'Edit': 'Save'}</button>

     {/* delete button */}
     <button onClick={onDelete}>Delete</button>
  </div>
  );
}
export default Todo;

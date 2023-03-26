import { useDispatch } from "react-redux"
import { removeItem, handleCheck } from "../store/todSlice"

const TodoItem=({id, text, completed})=>{
    const dispatch=useDispatch()
    return(<>
     <div key={id} style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <input type='checkbox' onChange={()=>dispatch(handleCheck({id}))} checked={completed}/>
            <span>
              {text}
            </span>
            <span onClick={()=>dispatch(removeItem({id}))} style={{color: "red", cursor: 'pointer'}}>&times;</span>
          </div>
    </>)
}

export default TodoItem
const InputField=({text, addItem, setText})=>{
    return(<>
    <div className='container'>
        <input type='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='add item' />
        <button onClick={addItem}>Add</button>
      </div>
      </>)
}

export default InputField



const Multiple = ({gender,handleOnselect,handleOnsubmit})=>{
    return(
        <div>
        <h1>Select a Option</h1>
        <select id="select"  value={gender} onChange={handleOnselect} handleOnsubmit={handleOnsubmit}  >
            <option value="gender">gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
        </select>
        
      </div>
  
    )
}
export default Multiple;
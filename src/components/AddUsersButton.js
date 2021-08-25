
const AddUsersButton = ({ onClick }) => {
  return (
  <>
    {console.log(localStorage.getItem('bettors'))}
    <button className="addUsersButton" onClick={onClick}>Add Users</button>
  </>
  )
}

export default AddUsersButton

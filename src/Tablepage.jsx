// import userData from './data.js'; 
import { useState, useEffect } from 'react';
import axios from 'axios';


function Tablepage() {
  const [userInfo, setuserInfo] = useState([])

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  
   const [qualificaion, setqualificaion] = useState('')
   const [aboutme,setaboutme] =useState('')
   const [gender,setgender] =useState('')
   const [password,setpassword] =useState('')
   const [Updateid,setUpdateid] =useState(-1)
   
   



  useEffect(() => {
    getData();

  }, []);

  function getData() {
    axios.get('http://localhost:9999/api/users')
      .then((response) => {
        setuserInfo(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`http://localhost:9999/api/users/${id}`)
      .then(() => {
        getData();
      });

  }
  const handleEdit =(id) => {
    setEditID (id)
    
  }


  const handleUpdate = () => {
    axios
      .put(`http://localhost:9999/api/users/${userId}`, {name,email,password,aboutme,gender,qualificaion})
      .then((response) => {
        console.log('User data updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };




  return (
    <div className="table-container">
      




      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Qualification</th>
            <th>About Me</th>
            <th>Gender</th>
            <th>Password</th>
            <th>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.length > 0 && userInfo.map((user) => (
            user.id ===Updateid ?
            <tr>
             <td>{user.id}</td> 
             <td><input type="text" value={user.name} onChange={e =>setname (e.target.value)}/></td>
             <td><input type="text" value={user.email} onChange={e =>setemail( e.target.value)}/></td>
             <td><input type="select" value={user.qualificaion} onChange={e =>setqualificaion( e.target.value)}/></td>
             <td><input type="text" value={user.aboutme} onChange={e =>setaboutme(e.target.value)}/></td>
             <td><input type="radio" value={user.gender} onChange={e =>setgender (e.target.value)}/></td>
             <td><input type="text" value={user.password} onChange={e =>setpassword (e.target.value)}/></td>
<td><button onClick={handleUpdate}> Edit</button></td>

            </tr>
            :
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.qualificaion}</td>
              <td>{user.aboutme}</td>
              <td>{user.gender}</td>
              <td>{user.password}</td>

              <td>
                <button
                  onClick={() => handleUpdate(user.id)}
                  class="update-button"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  class="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablepage;

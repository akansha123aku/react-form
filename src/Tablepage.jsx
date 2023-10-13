// import userData from './data.js'; 
import { useState ,useEffect} from 'react';
import axios from 'axios';

function Tablepage() {
  const [userInfo,setuserInfo] = useState([])
  useEffect(() => {getData();
   
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
  

  const handleUpdate = () => {
    axios
      .put(`http://localhost:9999/api/users/${userId}`, userData)
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
          <th>Upadte/Delete</th>
        </tr>
      </thead>
      <tbody>
        {userInfo.length > 0 && userInfo.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.qualificaion}</td>
            <td>{user.aboutme}</td>
            <td>{user.gender}</td>
            <td>{ user.password}</td>

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

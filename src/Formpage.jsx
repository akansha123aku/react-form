import React, { useState } from 'react';
import axios from 'axios';

import './Formpage.css'; 

  const initialState={
    name: '',
    email: '',
    qualificaion: '',
    gender: 'male',
    password: '',
   aboutme: '',
  }
const Formpage = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  
  
  const handleSubmit =async (e) => {
     e.preventDefault();//this line prevents reloasding the page after form submission
    console.log( "i am here",formData);
    setFormData(initialState)
     // You can submit the data to your server or perform other actions here.
     try {
      const response = await axios.post('http://localhost:9999/api/users/create', formData)
        // Your data to be sent in the request body
       
     
      
      // Handle the response here
      console.log('Data posted successfully:', response.data);
    } catch (error) {
      // Handle any errors here
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
       <form class="all-form" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div>
        <label>Select Qualification</label>
        <select name="qualification" value={formData.qualification} onChange={handleChange}>
          <option value="">Select</option>
          <option value="highschool">High School</option>
          <option value="bachelors">Bachelor's Degree</option>
          <option value="masters">Master's Degree</option>
        </select>
      </div>

      <div class="gender">
        <label>Gender</label>
        <label class="male">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />{' '}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />{' '}
          Female
        </label>
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>

      

      <div>
        <label>About Me</label>
        <textarea name="aboutMe" value={formData.aboutMe} onChange={handleChange} />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />{' '}
          Remember Me
        </label>
      </div>

      <button type="submit" class="submit">Submit</button>
    </form>
      <a href={`/table`}>Navigate to Tablepage</a>
    </>
  );
};

export default Formpage;






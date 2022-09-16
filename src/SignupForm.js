import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import './SignupForm.css';


/** SignupForm component
 *
 * Props:
 * - signupUser: function from to App to sign up user
 *
 * State:
 * - formData: { username, password, firstName, lastName, email }
 * - errorData: []
 *
 * RoutesList -> SignupForm
 */
function SignupForm({ signupUser }) {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errorData, setErrorData] = useState([]);
  const navigate = useNavigate();

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /**  handleSubmit calls func passed as prop
   * on success will reset formData state and redirect user to /companies
   * on failure will setErrorData state
  */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signupUser(formData);
      setFormData(initialState);
      setErrorData([]);
      navigate('/companies');
    } catch (err) {
      setErrorData(err);
    }
  }

  return (
    <div className="Signup">
      <form className='Signup-form' onSubmit={handleSubmit}>
        <div className='Signup-form-item'>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className='Signup-form-item'>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className='Signup-form-item'>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className='Signup-form-item'>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className='Signup-form-item'>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {errorData.length > 0 && <Alert errors={errorData} />}

        <button className='Signup-btn btn btn-primary'>Submit</button>

      </form>
    </div>
  );
}

export default SignupForm;

  // Example Errors
/**
instance.username does not meet minimum length of 1
instance.password does not meet minimum length of 5
instance.firstName does not meet minimum length of 1
instance.lastName does not meet minimum length of 1
instance.email does not meet minimum length of 6
instance.email does not conform to the "email" format
 */

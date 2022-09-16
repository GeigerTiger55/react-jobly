import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from './Alert';
import './LoginForm.css';

/** LoginForm component
 *
 * Props:
 * - loginUser: function to send user data to App for setting context
 *
 * State:
 * - formData: { username, password, firstName, lastName, email }
 * - errorData: []
 *
 * RoutesList -> LoginForm
 */
function LoginForm({ loginUser }) {
  const initialState = {
    username: "",
    password: "",
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
      await loginUser(formData);
      setFormData(initialState);
      setErrorData([]);
      navigate('/companies');
    } catch (err) {
      setErrorData(err);
    }
  }

  return (
    <div className='Login'>
      <form className='Login-form' onSubmit={handleSubmit}>
        <div className='Login-form-item'>
          <label className='form-item' htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            className='form-item'
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className='Login-form-item'>
          <label className='form-item' htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            className='form-item'
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {errorData.length > 0 && <Alert errors={errorData} />}

        <button className='Login-btn btn btn-primary'>Submit</button>

      </form>
    </div>

  );
}

export default LoginForm;
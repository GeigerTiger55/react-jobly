import { useState } from "react";
import Alert from './Alert';


/** SignupForm component
 *
 * Props: setContext
 *
 * State:
 * - formData: { username, password, firstName, lastName, email }
 * - errorData: []
 *
 * RoutesList -> SignupForm
 */
function SignupForm({ sendUserData }) {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errorData, setErrorData] = useState([]);


  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /**  handleSubmit calls func passed as prop
   * on success will reset formData state
   * on failure will setErrorData state
  */
  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      sendUserData(formData);
      setFormData(initialState);
      setErrorData([]);
    } catch (err) {
      setErrorData(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p><label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      /></p>

      <p><label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      /></p>

      <p><label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      /></p>

      <p><label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      /></p>

      <p><label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /></p>

      {errorData.length > 0 && <Alert errors={errorData}/>}

      <button>Submit</button>

    </form>

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

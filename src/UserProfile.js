import { useContext, useState } from "react";
import  userContext  from './userContext';
import Alert from './Alert';

/** UserProfile component
 * TODO:
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 * - quote: inspirational quote object with text and author
 *
 * Context:
 * - user: null
 * - prefs: bkgColor
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

// same fields as signup
// TODO: username cannot be edited
// TODO: onSubmit calls updateUser function from App
// prop:
// - updateUser function
// TODO: userData --> get from Context
// state: formData

function UserProfile({sendUserData}){
  const { userData } = useContext(userContext);
  //TODO: remove jobs array and password from userData.user before passing to formData
  const [formData, setFormData] = useState( userData );
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

export default UserProfile;


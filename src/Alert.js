/** Alert displays array of error messages
 * 
 * Props:
 * -errors like [error, ...]
 * 
 */

function Alert({errors}){
  console.log('Alert, errors:', errors);
  return (
    <div>
      {errors.map(err=>(<p key={err}>{err}</p>))}
    </div>
  );
}

export default Alert;
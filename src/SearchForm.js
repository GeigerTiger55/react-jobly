import { useState } from 'react';
import './SearchForm.css';

/** SearchForm shows search bar
 *
 * Props:
 * - searchFunction (function to call upon submit)
 * - searchField (name of input field for search, matches API search term)
 *
 * State:
 * - formData
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ searchFunction, searchField = 'search' }) {
  const [formData, setFormData] = useState({ [searchField]: "" });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("handleSubmit", formData);
    searchFunction(formData);
  }

  return (
    <div className='SearchForm'>
      <form onSubmit={handleSubmit} className='SearchFrom-form'>
        <label htmlFor={searchField}></label>
        <input
          id={searchField}
          name={searchField}
          value={formData[searchField]}
          onChange={handleChange}
          size="100"
          placeholder="Enter search term..."
          className='SearchForm-input'
        />
        <button className='SearchForm-button'>Submit</button>
      </form>
    </div>);
}

export default SearchForm;

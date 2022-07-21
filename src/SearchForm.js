import { useState } from 'react';
import './SearchForm.css';

/** SearchForm shows search bar
 *
 * Props:
 * - searchFunction (function to call upon submit)
 *
 * State:
 * - formData
 *
 * { CompanyList, JobList } -> SearchForm
 */

/**
 * prop
 * formData state default to not reference searchField
 * label - htmlFor
 * input - id/name/value
 */

function SearchForm({ searchFunction }) {
  const [formData, setFormData] = useState({ query: "" });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("handleSubmit", formData);
    searchFunction(formData.query);
  }

  return (
    <div className='SearchForm'>
      <form onSubmit={handleSubmit} className='SearchFrom-form'>
        <label htmlFor='query'></label>
        <input
          id='query'
          name='query'
          value={formData.query}
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


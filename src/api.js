import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // TODO: Ask about using the users token
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

    static token = '';

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies
   *
   *  Accepts: params: {name, minEmployees, maxEmployees}
   *  Returns: [{handle, name, num_employees, description, logo_url},...]
  */
  static async getCompanies({ name, minEmployees, maxEmployees }) {

    let res = await this.request(`companies/`,
      { name, minEmployees, maxEmployees },
    );
    return res.companies;
  }

  /** Get details on all jobs
   *
   *  Accepts: params: {title, minSalary, hasEquity}
   *  Returns: [{id, title, salary, equity, companyHandle, companyName},...]
  */

  static async getJobs({ title, minSalary, hasEquity }) {
    let res = await this.request(`jobs/`,
      { title, minSalary, hasEquity }
    );
    return res.jobs;
  }

  /** Register User
 * Takes {user} like { username, password, firstName, lastName, email }
 * Returns "token value"
 */
  static async registerUser({ username, password, firstName, lastName, email }) {
    let res = await this.request(`auth/register`,
      { username, password, firstName, lastName, email },
      'post'
    );
    JoblyApi.token = res.token;
    return res.token;

  }

  /**Login User
   * Takes {user} like { username, password }
   * Returns "token value"
   */
  static async loginUser({ username, password }) {
    let res = await this.request(`auth/token`,
      { username, password },
      'post'
    );
    JoblyApi.token = res.token;
    console.log('JoblyApi.token', JoblyApi.token);
    return res.token;
  }

  /**getUser
   *
   * Accept: username, token
   *
   * Returns user like { username, firstName, lastName, isAdmin, jobs }
   *   where jobs is { id, title, companyHandle, companyName, state }
   */
  static async getUser({ username, token }) {
    console.log('calling getUser with username', username, JoblyApi.token);
    JoblyApi.token = token;
    let res = await this.request(`users/${username}`);
    console.log('getUser', res.user);
    return res.user;
  }

}

export default JoblyApi;


import conf from "../lib/conf";

export class AuthService {
  constructor() {
    // Fixing the authUri assignment
    this.authUri = `${conf.apiBaseUri}/api/auth`;
  }

  async login(email, password) {
    try {
      const response = await fetch(this.authUri, {
        method: "POST",
        
        body: JSON.stringify({ email, password,action:'login' }),
      });

      if (!response.ok) {
        // Handle HTTP errors (non-2xx responses)
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      // Parse and return the JSON response
      return await response.json()
    } catch (error) {
      // Handle network or other errors
      console.error("Error logging in:", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;

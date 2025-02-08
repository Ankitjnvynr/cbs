import conf from "../lib/conf";

export class AuthService {
  constructor() {
    this.authUri = `${conf.apiBaseUri}/api/v1/auth/user`;
    this.authUriBase = `${conf.apiBaseUri}/api/v1/auth`;
  }

  // User Registration
  async register(name, email, password, phone) {
    try {
      const response = await fetch(`${this.authUri}?action=register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phone }),
      });

      return await response.json();
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }

  // User Login
  async login(email, password) {
    try {
      const response = await fetch(`${this.authUri}?action=login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      return await response.json();
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  async checkUserExist (email){
    try {
      let fullurl= `${this.authUri}?email=${email}`
      console.log("full url",fullurl)
      const response = await fetch(fullurl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          
        },
      });

      return await response.json();
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }

  // Fetch User Details
  async getUser(token, userId = null) {
    try {
      const url = userId ? `${this.authUri}?id=${userId}` : this.authUri;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }

  // Update User
  async updateUser(token, userId, userData) {
    try {
      const response = await fetch(`${this.authUri}?id=${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      return await response.json();
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }


  async sendOtp(email) {
    try {
        const formData = new FormData();
        formData.append("email", email);

        const response = await fetch(`${this.authUriBase}/sendotp`, {
            method: 'POST',
            
            body: formData, 
        });

        const data = await response.json();

        if (response.ok) {
            console.log("OTP sent successfully:", data);
            return data;
        } else {
            console.error("Error sending OTP:", data);
            throw new Error(data.message || "Failed to send OTP");
        }
    } catch (error) {
        console.error("Network error:", error);
        throw error;
    }
}


// otp veridfy
async verifyOtp (){
  
}

  // Delete User
  async deleteUser(token, userId) {
    try {
      const response = await fetch(`${this.authUri}?id=${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
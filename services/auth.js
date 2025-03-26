import conf from "../lib/conf";

export class AuthService {
  constructor() {
    this.authUri = `${conf.apiBaseUri}/api/v1/auth/user`;
    this.authUriBase = `${conf.apiBaseUri}/api/v1/auth`;
    this.profileUri = `${conf.apiBaseUri}/api/v1/profile`;
    this.notifyUri = `${conf.apiBaseUri}/api/v1/sendemails`;
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

  async checkUserExist(email) {
    try {
      let fullurl = `${this.authUri}?email=${email}`;

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

  async getMyProfile(userId, token = null) {
    try {
      const url = `${this.profileUri}?id=${userId}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      console.log("error in gettingmy profile", error);
    }
  }

  // updating my profile
  async updateMyProfile(userId, data) {
    try {
      // Ensure user ID is included
      if (!userId) {
        throw new Error("User ID is required.");
      }
  
      // Construct payload dynamically, including only provided values
      let payload = { id: userId };
  
      const allowedFields = [
        // Users table fields
        "name",
        "phone",
        "email",
        "password",        
        // User details table fields
        "rollno",
        "father_name",
        "mother_name",
        "course_name",
        "last_name",
        "dob",
        "country",
        "state",
        "district",
        "address",
        "picture",
      ];
  
      // Add only provided values to the payload
      allowedFields.forEach((field) => {
        if (data[field] !== undefined && data[field] !== null) {
          payload[field] = data[field];
        }
      });
  
      const response = await fetch(`${this.profileUri}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("res in update profile", response);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error updating profile:", error);
      return { code: 500, error: "Failed to update profile. Please try again." };
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
      console.log("response", response);
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
        method: "POST",

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
  async verifyOtp(email, otp) {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", otp);

      const response = await fetch(`${this.authUriBase}/verifyotp`, {
        method: "POST",

        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("OTP verify successfully:", data);
        return data;
      } else {
        console.error("Error verify OTP:", data);
        throw new Error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Network error:", error);
      throw error;
    }
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

  async forgotPassword(email, newPassword, otp) {
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", newPassword);
      data.append("otp", otp);

      const response = await fetch(`${this.authUriBase}/changepassword`, {
        method: "POST",
        headers: {},
        body: data,
      });

      const res = JSON.parse(response);
      return res;
    } catch (error) {
      console.log("error in forgot password", error);
    }
  }

  async notifyStudent(name, email) {
    try {
      const data = {
        email: email,
        topic: "Registration",
        body: `
          <div style="font-family: Arial, sans-serif; color: #003366; padding: 20px; border-radius: 8px; background-color: #f4f4f4;">
            <h2 style="color: #003366; text-align: center;">Welcome to CBS Group of Institutions</h2>
            <p>Dear <strong>${name}</strong>,</p>
            <p>Welcome to <strong>CBS Group of Institutions</strong>! We are delighted to have you on board. Below are your login details:</p>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p><strong>-> Login Portal:</strong> <a href="https://www.cbsdelhi.in/student" style="color: #003366; text-decoration: none;"><strong>Student Panel</strong></a></p>
              <p><strong>-> Username:</strong> ${email}</p>
              <p><strong>-> Password:</strong> ${email}</p>
            </div>
            <p><strong>=> Steps to Log in:</strong></p>
            <ol>
              <li>Click on the <a href="https://www.cbsdelhi.in/student" style="color: #003366; text-decoration: underline;">Student Panel or click me</a>.</li>
              <li>Enter your registered email as both username and password.</li>
              <li>Click <strong>Login</strong> to access your dashboard.</li>
              <li>Change your password after logging in for security.</li>
            </ol>
            <p>If you have any issues logging in, please contact our support team.</p>
            <p>Best Regards,<br><strong>CBS Group of Institutions</strong></p>
            <p><a href="https://www.cbsdelhi.in" style="color: #003366; text-decoration: none;">www.cbsdelhi.in</a></p>
          </div>
        `,
      };
  
      const response = await fetch(`${this.notifyUri}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to notify student: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error notifying student:", error);
    }
  }
  
}

const authService = new AuthService();
export default authService;

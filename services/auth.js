import conf from "../lib/conf";

export class AuthService {
  constructor() {
    this.authUri = `${conf.apiBaseUri}/api/v1/auth/user`;
    this.authUriBase = `${conf.apiBaseUri}/api/v1/auth`;
    this.profileUri = `${conf.apiBaseUri}/api/v1/profile`;
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
  async updateMyProfile(
    userId,
    name,
    lastName,
    phone,
    dob,
    country,
    state,
    district,
    address,
    picture
  ) {
    try {
      const response = await fetch(`${this.profileUri}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          name: name,
          last_name: lastName,
          phone: phone,
          dob: dob,
          country: country,
          state: state,
          district: district,
          address: address,
          picture: picture,
        }),
      });
      return await response.json();
    } catch (error) {
      console.log("error in  updating my profile", error);
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
}

const authService = new AuthService();
export default authService;

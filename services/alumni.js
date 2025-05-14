import conf from "../lib/conf";

// Create base API URL from configuration
const API_URL = `${conf.apiBaseUri}/api/v1/alumni`;

const alumniService = {
  getRecords: async (page = 0, limit = 10, filters = {}) => {
    try {
      // Create query parameters for pagination and filters
      let queryParams = `?page=${page}&limit=${limit}`;

      // Add any filters that have values
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
          queryParams += `&${key}=${encodeURIComponent(filters[key])}`;
        }
      });

      const response = await fetch(`${API_URL}${queryParams}`);
      const result = await response.json();

      return {
        code: response.status,
        data: result.data,
        pagination: result.pagination
      };
    } catch (error) {
      console.error('Error fetching alumni records:', error);
      throw error;
    }
  },

  createRecord: async (data) => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating alumni record:', error);
      throw error;
    }
  },

  updateRecord: async (id, data) => {
    try {
      // Make sure id is included in the data
      const payload = { ...data, id };
      const response = await fetch(`${API_URL}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      return await response.json();
    } catch (error) {
      console.error('Error updating alumni record:', error);
      throw error;
    }
  },

  deleteRecord: async (id) => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      return await response.json();
    } catch (error) {
      console.error('Error deleting alumni record:', error);
      throw error;
    }
  },

  uploadRecord: async (id) => {
    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      return await response.json();
    } catch (error) {
      console.error('Error uploading alumni record:', error);
      throw error;
    }
  }
};

export default alumniService;

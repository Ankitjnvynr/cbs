import conf from "../lib/conf";

export class NoticeService {
  noticeUri;

  constructor() {
    this.noticeUri = `${conf.apiBaseUri}/api/v1/notices`;
  }

  async getNotices() {
    try {
      const response = await fetch(this.noticeUri);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching notices:", error);
      throw error; // Re-throw the error for handling by the caller
    }
  }

  async getNotice(id) {
    try {
      const response = await fetch(`${this.noticeUri}/${id}`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching notice:", error);
      throw error;
    }
  }

  async createNotice(title, link, expiration_date, status) {
    try {
      const response = await fetch(this.noticeUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: link,
          expiration_date: expiration_date,
          status: status,
        }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }
      return response.json();
    } catch (error) {
      console.error("Error creating notice:", error);
      throw error;
    }
  }

  async updateNotice(id, title, link, expiration_date, status) {
    try {
      const response = await fetch(`${this.noticeUri}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: link,
            expiration_date: expiration_date,
            status: status,
            id:id
          }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }
      return response.json();
    } catch (error) {
      console.error("Error updating notice:", error);
      throw error;
    }
  }

  async deleteNotice(id) {
    try {
      const response = await fetch(`${this.noticeUri}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }
      return response.json(); // Or handle success differently
    } catch (error) {
      console.error("Error deleting notice:", error);
      throw error;
    }
  }
}

const noticeService = new NoticeService();
export default noticeService;
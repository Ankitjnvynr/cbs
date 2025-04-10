import conf from "../lib/conf";

export class ContactService {
    contactUri;

    constructor() {
        this.contactUri = `${conf.apiBaseUri}/api/v1/contact-form`;
    }

    async addRecord({ name, email, phone, subject = null, message = null, status = "pending", remark = null }) {
        try {
            const response = await fetch(this.contactUri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    subject,
                    message,
                    status,
                    remark,
                }),
            });
            console.log("Response from server at adding:", response);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to save data. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("Error in saving data:", error);
            throw error;
        }
    }

    async getRecords(queryParams = {}) {
        try {
            const queryString = new URLSearchParams(queryParams).toString();
            const response = await fetch(`${this.contactUri}?${queryString}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to fetch records. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("Error in fetching data:", error.message);
            throw error;
        }
    }

    async updateRecord(id, data) {
        try {
            const payload = {
                ...data,
                id,
            };

            const response = await fetch(`${this.contactUri}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to update record. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("Error in updating data:", error.message);
            throw error;
        }
    }

    async deleteRecord(id) {
        try {
            const response = await fetch(`${this.contactUri}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to delete record. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("Error in deleting data:", error.message);
            throw error;
        }
    }
}

const contactService = new ContactService();
export default contactService;

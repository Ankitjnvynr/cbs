import conf from "../lib/conf";

export class AlumniService {
    constructor() {
        // Setting up the base URI for alumni
        this.baseURI = `${conf.apiBaseUri}/api/v1/alumni`;
    }

    // Get all alumni records with pagination
    async getRecords(queryParams = {}) {
        try {
            const queryString = new URLSearchParams(queryParams).toString();
            const response = await fetch(
                `${this.baseURI}?${queryString}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to fetch records. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            return await response.json(); // Return records and pagination metadata
        } catch (error) {
            console.error("Error in fetching data:", error.message);
            throw error;
        }
    }

    // Update an existing alumni record
    async updateRecord(id, updatedData) {
        try {
            const response = await fetch(`${this.baseURI}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
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

    // Delete an alumni record
    async deleteRecord(id) {
        try {
            const response = await fetch(`${this.baseURI}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to delete record. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            return { message: "Record deleted successfully." };
        } catch (error) {
            console.error("Error in deleting data:", error.message);
            throw error;
        }
    }
}

const alumniService = new AlumniService();
export default alumniService;

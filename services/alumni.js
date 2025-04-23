import conf from "../lib/conf";

export class AlumniService {
    baseURI;

    constructor() {
        // Setting up the base URI for alumni
        this.baseURI = `${conf.apiBaseUri}/api/v1/alumni`;
    }

    async addRecord({ studentName, fatherName, email, mobile, nationality, yearOfAdmission }) {
        try {
            const response = await fetch(this.contactUri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    studentName,
                    fatherName,
                    email,
                    mobile,
                    nationality,
                    yearOfAdmission,
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
    async updateRecord(id, data) {
        try {
            const payload = {
                ...data,
                id,
            };

            const response = await fetch(`${this.baseURI}`, {
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
            console.log("Error in updating data:", error.message);
            throw error;
        }
    }

    // Delete an alumni record
    async deleteRecord(id) {
        try {
            const response = await fetch(`${this.baseURI}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to delete record. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            return { message: "Record deleted successfully." };
        } catch (error) {
            console.log("Error in deleting data:", error.message);
            throw error;
        }
    }

    async upload (id) {
        try {
            const response = await fetch(`${this.baseURI}`, {
                method: "POST",
                body: JSON.stringify({ id })
            });
    
            const result = await response.json();
            console.log("Response is:", result);
    
            if (response.ok) {
                getAlumniResponse(); // Refresh data after successful upload
            }
        } catch (error) {
            console.error("Error uploading file:", error.message);
        }
    };    

};

const alumniService = new AlumniService();
export default alumniService;

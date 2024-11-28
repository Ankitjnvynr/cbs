import conf from "../lib/conf";

export class AdmissionService {
    admissionUri;

    constructor() {
        // Setting up the base URI for admission
        this.admissionUri = `${conf.apiBaseUri}/api/admission-form`;
    }

    // Create a new admission record
    async addRecord({
        programme,
        candidate_name,
        father_name,
        mother_name,
        gender,
        category,
        district,
        mobile,
        email,
    }) {
        try {
            const response = await fetch(this.admissionUri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    programme,
                    candidate_name,
                    father_name,
                    mother_name,
                    gender,
                    category,
                    district,
                    mobile,
                    email,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to save data. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error in saving data:", error.message);
            throw error;
        }
    }

    // Get all admission records with pagination
    async getRecords(page = 1, limit = 10) {
        try {
            const response = await fetch(
                `${this.admissionUri}?page=${page}&limit=${limit}`,
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

            const responseData = await response.json();
            return responseData; // Return records and pagination metadata
        } catch (error) {
            console.error("Error in fetching data:", error.message);
            throw error;
        }
    }

    // Update an existing admission record
    async updateRecord(id, updatedData) {
        try {
            const response = await fetch(`${this.admissionUri}/${id}`, {
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

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error in updating data:", error.message);
            throw error;
        }
    }

    // Delete an admission record
    async deleteRecord(id) {
        try {
            const response = await fetch(`${this.admissionUri}/${id}`, {
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

const admissionService = new AdmissionService();
export default admissionService;
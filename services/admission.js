import conf from "../lib/conf";

export class AdmissionService {
    admissionUri;

    constructor() {
        // Setting up the base URI for admissions
        this.admissionUri = `${conf.apiBaseUri}/api/v1/admissions`;
    }

    // Create a new admission record
    async addRecord({
        programme,
        rollNo,
        branch,
        year,
        candidateName,
        fatherName,
        motherName,
        gender,
        category,
        district,
        mobile,
        whatsapp,
        email,
        totalFees,
        feesPaidTillDate,
        receipt
    }) {
        try {
            const response = await fetch(this.admissionUri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    programme,
                    rollNo,
                    branch,
                    year,
                    candidateName,
                    fatherName,
                    motherName,
                    gender,
                    category,
                    district,
                    mobile,
                    whatsapp,
                    email,
                    totalFees,
                    feesPaidTillDate,
                    receipt
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to save data. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("Error in saving data:", error.message);
            throw error;
        }
    }

    // Get all admission records with optional filters and pagination
    async getRecords(queryParams = {}) {
        try {
            const queryString = new URLSearchParams(queryParams).toString();
            const response = await fetch(
                `${this.admissionUri}?${queryString}`,
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

            return await response.json();
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

            return await response.json();
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
import conf from "../lib/conf";

export class AdmissionService {
    admissionUri;
    constructor() {
        // Setting up the admission URI using the base URI from configuration
        this.admissionUri = `${conf.apiBaseUri}/api/admission-form`;
    }

    async addRecord({
        programme,
        candidate_name,
        father_name,
        mother_name,
        gender,
        category,
        district,
        mobile,
        email
    }) {
        try {
            const response = await fetch(this.admissionUri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Ensure JSON content type
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
                // Throw an error if the response status is not OK
                const errorData = await response.json();
                throw new Error(
                    `Failed to save data. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }

            // Parse and return the response JSON
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error in saving data:", error.message);
            throw error; // Re-throw the error for caller to handle
        }
    }
}

const admissionService = new AdmissionService();
export default admissionService;
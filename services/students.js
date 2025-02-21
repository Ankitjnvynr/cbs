

import conf from "../lib/conf";

export class StudentService {
    studentUri;

    constructor() {
        // Setting up the base URI for students
        this.studentUri = `${conf.apiBaseUri}/api/v1/profile`;
    }

    // Create a new student record
    async getStudents(filters={}){
        try {
            const urlParams = new URLSearchParams(filters);
            const url = `${this.studentUri}?${urlParams.toString()}`
            console.log(url)
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Failed to fetch data. Status: ${response.status}. Message: ${errorData.message || "Unknown error"}`
                );
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

const studentService = new StudentService();
export default studentService;
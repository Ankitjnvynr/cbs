import conf from "../lib/conf";

export class StudentService {
    studentUri;

    constructor() {
        // Setting up the base URI for students
        this.studentUri = `${conf.apiBaseUri}/api/v1/profile`;
    }

    // Fetching student records (GET)
    async getStudents(filters = {}) {
        try {
            const urlParams = new URLSearchParams(filters);
            const url = `${this.studentUri}?${urlParams.toString()}`;
            console.log(url);
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

    // Creating a new student record (POST)
    async createStudent(studentData) {
        try {
            const response = await fetch(this.studentUri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentData)
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(
                    `Failed to create student. Status: ${response.status}. Message: ${data.error || "Unknown error"}`
                );
            }
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    // Updating an existing student record (PUT)
    async updateStudent(studentId, studentData) {
        try {
            if (!studentId) {
                throw new Error("Student ID is required for updating.");
            }

            const response = await fetch(`${this.studentUri}`, {
                method: 'POST', // Your API is using POST for updates
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: studentId, ...studentData })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(
                    `Failed to update student. Status: ${response.status}. Message: ${data.error || "Unknown error"}`
                );
            }
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    // Deleting a student record (DELETE)
    async deleteStudent(studentId) {
        try {
            if (!studentId) {
                throw new Error("Student ID is required for deletion.");
            }

            const response = await fetch(this.studentUri, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: studentId })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(
                    `Failed to delete student. Status: ${response.status}. Message: ${data.error || "Unknown error"}`
                );
            }
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

const studentService = new StudentService();
export default studentService;

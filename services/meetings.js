import conf from "../lib/conf";

export class MeetingService {
  meetingUri;

  constructor() {
    this.meetingUri = `${conf.apiBaseUri}/api/v1/meetings`;
  }

  // Function to get all meetings with filters (DO NOT MODIFY)
  async getMeeting(filters = {}) {
    try {
      const validFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) => value !== null && value !== ""
        )
      );

      const queryString = new URLSearchParams(validFilters).toString();
      const url = queryString
        ? `${this.meetingUri}?${queryString}`
        : this.meetingUri;

      console.log(url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching meetings: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in getMeeting:", error);
      return [];
    }
  }

  // create meetings
  async createMeeting(studentName, studentEmail, rollNo, start_time, duration) {
    try {
      const meetingJson = JSON.stringify({
        studentName,
        studentEmail,
        rollNo,
        start_time,
        duration,
      });
      console.log(meetingJson);

      const response = await fetch(this.meetingUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: meetingJson,
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to get error details from the server
        throw new Error(`Error creating meeting: ${response.status} - ${response.statusText} - ${JSON.stringify(errorData)}`); // Include more details in the error
      }
      console.log("service response create meeting",response)

      const createdMeeting = await response.json(); // Parse the response to get the created meeting data
      return createdMeeting; // Return the created meeting object
    } catch (error) {
      console.error("Error in creating meeting:", error);
      return null; // Or throw the error if you want the calling function to handle it.
    }
  }


  async updateMeeting(id, studentName, studentEmail, rollNo, start_time, duration) {
    try {
        const meetingJson = JSON.stringify({
            studentName,
            studentEmail,
            rollNo,
            start_time,
            duration,
        });

        const response = await fetch(`${this.meetingUri}/${id}`, { // Use the meeting ID in the URL
            method: "PUT", // Or PATCH if you're updating partially
            headers: {
                "Content-Type": "application/json",
            },
            body: meetingJson,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error updating meeting: ${response.status} - ${response.statusText} - ${JSON.stringify(errorData)}`);
        }

        const updatedMeeting = await response.json();
        return updatedMeeting;
    } catch (error) {
        console.error("Error in updating meeting:", error);
        return null;
    }
}


  async deleteMeeting(id) {
    try {
      const response = await fetch(`${this.meetingUri}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error deleting meeting: ${response.status} - ${response.statusText} - ${JSON.stringify(errorData)}`);
      }

      return true; // Indicate successful deletion
    } catch (error) {
      console.error("Error in deleting meeting:", error);
      return false; // Indicate deletion failure
    }
  }
}

const meetingService = new MeetingService();
export default meetingService;
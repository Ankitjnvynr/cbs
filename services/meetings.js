import conf from "../lib/conf";

export class MeetingService {
  meetingUri;

  constructor() {
    this.meetingUri = `${conf.apiBaseUri}/api/v1/meetings`;
  }

  // Function to get all meetings with filters
  async getMeeting(filters = {}) {
    try {
      // Filter out null/empty values
      const validFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) => value !== null && value !== ""
        )
      );

      // Convert filters to query string
      const queryString = new URLSearchParams(validFilters).toString();
      const url = queryString
        ? `${this.meetingUri}?${queryString}`
        : this.meetingUri;

      // Fetch data from the API
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse response
      if (!response.ok) {
        throw new Error(`Error fetching meetings: ${response.statusText}`);
      }

      const data = await response.json();
      return data.meetings; // Returns an array of meetings
    } catch (error) {
      console.error("Error in getMeeting:", error);
      return [];
    }
  }
}

const meetingService = new  MeetingService();
export default meetingService;


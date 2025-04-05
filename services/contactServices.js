import conf from "../lib/conf";

export class  ContactService{
    contactUri;

    constructor(){
        this.contactUri = `${conf.apiBaseUri}/api/v1/contact-form`
    }

    async addRecord ({name,email,phone,subject=null,message=null}){
        try {
            const response = await fetch(this.contactUri,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    name,
                    email,
                    phone,
                    subject,
                    message
                })
            })

            if (!response.ok) {
                const errorData = await response.json();
                console.log(response)
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
            const response = await fetch(
                `${this.contactUri}?${queryString}`,
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
}

const contactService = new ContactService()
export default contactService
import conf from "../lib/conf";

export class UploadService {
  constructor() {
    this.uploadUri = `${conf.apiBaseUri}/api/v1/upload`;
  }

  async upload(file, oldFileName = null) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      if (oldFileName) {
        formData.append("oldFileName", oldFileName);
      }

      const response = await fetch(this.uploadUri, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // console.log("File uploaded successfully:", data);
        return data;
      } else {
        console.error("Error uploading file:", data);
        throw new Error(data.message || "Failed to upload file");
      }
    } catch (error) {
      console.error("Network error:", error);
      throw error;
    }
  }
}

const uploadService = new UploadService();
export default uploadService;
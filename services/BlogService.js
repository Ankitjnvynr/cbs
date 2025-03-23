import conf from "../lib/conf";
export class BlogService {
  blogUri;

  constructor() {
    this.blogUri = `${conf.apiBaseUri}/api/v1/blog`;
  }

  async getBlogs({ slug, category, keyword, status, page = 1, limit = 10 } = {}) {
    console.log("uri", this.blogUri);
    
    try {
      const queryParams = new URLSearchParams({
        slug,
        category,
        keyword,
        status,
        page,
        limit,
      });
      const response = await fetch(`${this.blogUri}?${queryParams}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  }

  async getBlogBySlug(slug) {
    try {
      const response = await fetch(`${this.blogUri}?slug=${slug}`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching blog by slug:", error);
      throw error;
    }
  }

  async createBlog(blogData) {
    try {
      const response = await fetch(this.blogUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  }
}

const blogService = new BlogService();
export default blogService;

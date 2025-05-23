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
        return response.json()
      }
      return response.json();
    } catch (error) {
      console.log("Error fetching blogs:", error);
      throw error;
    }
  }

  async getBlogBySlug(slug) {
    try {
      const response = await fetch(`${this.blogUri}?slug=${slug}`);
      console.log(`${this.blogUri}?slug=${slug}`)
      
      return response.json();
    } catch (error) {
      console.error("Error fetching blog by slug:", error);
      return error.json();
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
  async updateBlog(blogData) {
    try {
      const response = await fetch(this.blogUri, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      console.log("error in updating blog",response)
      if (!response.ok) {
        // const errorText = await response.text();
        // throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        return response.json()
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

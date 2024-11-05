/**
 * Converts a string into a URL-friendly slug.
 * @param {string} title - The title to be converted into a slug.
 * @returns {string} - The generated slug.
 */
const slugify = (title) => {
    return title
      .toLowerCase() // Convert to lowercase
      .trim() // Remove whitespace from both ends
      .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
  };
  
  export default slugify;
  
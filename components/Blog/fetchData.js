const axios = require('axios');

// Function to fetch blog data from Hashnode API
const fetchBlogData = async (username, apiKey) => {
  try {
    const response = await axios.get(`https://api.hashnode.com/v1/users/${username}/posts`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Check if response.data.posts is defined
    if (response.data.posts) {
      // Assuming the API response contains an array of blog posts
      return response.data.posts.map(post => ({
        id: post._id,
        title: post.title,
        paragraph: post.contentMarkdown, // Assuming content is in Markdown format
        image: post.coverImage,
        author: {
          name: post.author.name,
          image: post.author.photo,
          designation: post.author.role,
        },
        tags: post.tags.map(tag => tag.name),
        publishDate: new Date(post.dateAdded).getFullYear().toString(),
      }));
    } else {
      console.error('Error fetching blog data: No posts found');
      return [];
    }
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return []; // Return empty array if there's an error
  }
};

// Example usage:
// Replace 'your_username' and 'your_api_key' with your actual Hashnode username and API key
const username = '@FreshSparTechnologie';
const apiKey = '9abb9662-0afa-484b-85a8-aa65ae95dc35';

fetchBlogData(username, apiKey)
  .then(blogData => {
    console.log(blogData); // Output the fetched blog data
  })
  .catch(error => {
    console.error('Error:', error);
  });

/* eslint-disable class-methods-use-this */
const Post = require('../models/Post');

class PostController {
  async index(request, response) {
    const posts = await Post.find().sort('-createdAt');
    return response.json(posts);
  }

  async store(request, response) {
    const {
      author, place, description, hashtags,
    } = request.body;
    const { filename: image } = request.file;

    const post = await Post.create({
      author, place, description, hashtags, image,
    });

    return response.json(post);
  }
}

module.exports = new PostController();

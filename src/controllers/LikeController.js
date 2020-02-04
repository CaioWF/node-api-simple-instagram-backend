/* eslint-disable class-methods-use-this */
const Post = require('../models/Post');

class PostController {
  async store(request, response) {
    const post = await Post.findById(request.params.id);

    post.likes += 1;

    await post.save();

    return response.json(post);
  }
}

module.exports = new PostController();

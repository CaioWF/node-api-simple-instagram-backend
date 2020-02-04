/* eslint-disable class-methods-use-this */
const Post = require('../models/Post');

class LikeController {
  async store(request, response) {
    const post = await Post.findById(request.params.id);

    post.likes += 1;

    await post.save();

    request.io.emit('like', post);

    return response.json(post);
  }
}

module.exports = new LikeController();

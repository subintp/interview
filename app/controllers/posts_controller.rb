class PostsController < ApplicationController

  before_action :fetch_post, only: [:show, :update, :destroy]

  def index
    @posts = Post.all
    respond_to do |format|
      format.json { render json: @posts }
      format.html
    end
  end

  def show
    render json: @post
  end

  def update
    @post.update_attributes(post_params)
    render json: @post
  end

  def create
    @post = Post.new(post_params)
    @post.save!
    render json: @post
  end

  def destroy
    @post.destroy
    head :ok
  end

  private

  def fetch_post
    @post = Post.find_by(id: params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
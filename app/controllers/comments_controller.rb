class CommentsController < ApplicationController

  before_action :fetch_post, only: [:index]
  before_action :fetch_comment, only: [:show, :update, :destroy]


  def index
    @comments = @post.comments
    respond_to do |format|
      format.json { render json: @comments }
      format.html
    end
  end

  def show
    render json: @comment
  end

  def update
    @comment.update_attributes(comment_params)
    render json: @comment
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.save!
    render json: @comment
  end

  def destroy
    @comment.destroy
    head :ok
  end

  private

  def fetch_post
    @post = Post.find(params[:post_id])
  end

  def fetch_comment
    @comment = Comment.find_by(id: params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end

end
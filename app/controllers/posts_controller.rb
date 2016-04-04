class PostsController < ApplicationController
  #protect_from_forgery with: :null_session
  skip_before_filter :verify_authenticity_token
  #respond_to :json
  def index
    @posts = Post.all
    #byebug
    respond_to do |format|
      format.json {render json: @posts.to_json(:except => [:created_at, :updated_at])}
      #format.html 
    end
  end

  #/posts/2
  def show
    @post = Post.find_by(id: params[:id])
    respond_to do |format|
      format.json {render json: @post.to_json(:except => [:created_at, :updated_at])}
    end
  end

  def create

    @post = Post.new(post_params)
    if @post.save
      respond_to do |format|
        format.json {render json: @post.to_json(:except => [:created_at, :updated_at])}
      end
    else
      respond_to do |format|
        format.json {render json: @post.errors}
      end
    end
  end

  def update
    @post.update(post_params)
    render json: @post, status: :created
  end

  private

  def post_params
    params.permit(:title, :body)
  end

end

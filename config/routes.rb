Rails.application.routes.draw do

  root "posts#index"

  resources :posts do
    member do
      post :vote
    end
  end
  resources :comments

end

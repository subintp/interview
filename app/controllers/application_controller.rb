class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session
  around_action :wrap_in_rescue

  private

  def wrap_in_rescue
    begin
      yield
    rescue  => e
      head :bad_request
    end
  end

end

class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      render '/static_pages/root.html.erb'
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private
    def message_params
      params.require(:message).permit(
        :user_id,
        :author_name,
        :subject,
        :body,
        :reference
      )
    end
end

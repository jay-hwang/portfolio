class Api::ProjectsController < ApplicationController
  def new
  end

  def create
  end

  def show
    @project = Project.find(params[:id])
  end

  def index
    @projects = Project.all
  end

  def destroy
  end

  private
    def project_params
      params.require(:project).permit(
        :user_id,
        :title,
        :description,
        :image_url,
        :github_url,
        :live_url
      )
    end
end

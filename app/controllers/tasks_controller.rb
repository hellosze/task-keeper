class TasksController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def create
    @task = Task.new(task_params)

    if @task.save
      render :json => @task
    else
      render :json => @task.errors, :status => 422
    end
  end

  def index
    @tasks = Task.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @tasks }
    end
  end
  
  private

  def task_params
    params.require(:task).permit(:title)
  end
  
end

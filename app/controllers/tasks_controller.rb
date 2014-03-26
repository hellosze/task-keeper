class TasksController < ApplicationController
  respond_to :json

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
    render :json => @tasks
  end
  
  private

  def task_params
    params.require(:task).permit(:title)
  end
  
end

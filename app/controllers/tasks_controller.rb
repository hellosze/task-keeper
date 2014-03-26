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
  
  def update
    @task = Task.find(params[:id]);
    if @task.update_attributes(task_params)
      render :json => @task
    else
      render :json => @task.errors, :status => 422
    end
  end
  
  def destroy
    @task = Task.find(params[:id])
    
    if @task.destroy
      render :json => @task
    else
      render :json => @task.errors, :status => 422
    end
  end
  
  private

  def task_params
    params.require(:task).permit(:title, :body)
  end
  
end

TD.Views.TaskDetailView = Backbone.View.extend({
  events: {
    // "click button.save": "save",
    "keyup .task_details": "save",
    "click button.delete": "delete"
  },
  
  render: function () {
    var that = this;

    var renderedContent = JST["tasks/detail"]({
      task: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },
  
  save: function (event) {
    event.preventDefault();
    
    var that = this;

    var formData = $(event.currentTarget).serializeJSON();
    
    var $currentTarget = $(event.currentTarget);
    var id = parseInt($currentTarget.attr("data-id"));

    task = that.model;
    if (formData.task.title != "") {
      task.set('title', formData.task.title);
      task.set('body', formData.task.body);
      task.save();
    } else {
      formData.task.title = task.escape('title');
      formData.task.body = task.escape('body');
      $(event.currentTarget.parentElement).find('input').val(task.escape('title'));
    }
    
    Backbone.history.navigate("#/id");

  },
  
  delete: function () {
    event.preventDefault();
    
    var that = this;
    
    task = that.model;
    task.destroy();
    
    Backbone.history.navigate("#/");
  }
});
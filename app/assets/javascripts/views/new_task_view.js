TD.Views.NewTaskView = Backbone.View.extend({
  events: {
    "click button.submit": "submit",
    "click button.cancel": "cancel"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["tasks/new"]();
    that.$el.html(renderedContent);
    return that;
  },

  submit: function (event) {
    event.preventDefault();
    
    var that = this;
    
    var formData = $(event.currentTarget.parentElement).serializeJSON();
    var task = new TD.Models.Task(formData.task);
    console.log(task);
    
    that.collection.add(task);
    task.save();
    Backbone.history.navigate("#/");
  },
  
  cancel: function() {
    event.preventDefault();
    
    Backbone.history.navigate("#/");
  }
});
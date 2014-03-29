TD.Views.TasksListView = Backbone.View.extend({
  events: {
    "click .task": "show",
    "click #new_task": "show"
  },
  
  initialize: function () {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
  },

  render: function () {
    var that = this;

    var renderedContent = JST["tasks/list"]({
      tasks: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },
  
  show: function () {
    $('#content').show();
  }
});
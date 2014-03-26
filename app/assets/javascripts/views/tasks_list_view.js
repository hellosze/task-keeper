TD.Views.TasksListView = Backbone.View.extend({
  render: function () {
    var that = this;

    var ul = $("<ul></ul>");
    _(that.collection).each(function (task) {
      ul.append(
        $("<li></li>").text(task.title)
      )
    });

    that.$el.html(ul);
    return that;
  }
});
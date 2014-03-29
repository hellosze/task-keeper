window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function($sidebar, $content, tasksData) {
    var tasks = new TD.Collections.Tasks(tasksData);
    
    this._installSidebar($sidebar, tasks);
    
    new TD.Routers.TasksRouter($content, tasks);
    $('#content').hide();
    Backbone.history.start();
  },

  _installSidebar: function ($sidebar, tasks) {
    var that = this;

    var tasksListView = new TD.Views.TasksListView({
      collection: tasks
    });

    $sidebar.html(tasksListView.render().$el);
  }
};

// $(document).ready(function(){
//   Todo.initialize();
// });
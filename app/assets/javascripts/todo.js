window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function($rootEl, tasksData) {
    var tasks = new TD.Collections.Tasks(tasksData);
    
    new TD.Routers.TasksRouter($rootEl, tasks)
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   Todo.initialize();
// });
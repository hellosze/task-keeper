window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function($rootEl, tasks) {
    new TD.Routers.TasksRouter($rootEl, tasks)
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   Todo.initialize();
// });
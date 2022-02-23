const data = [
  {
    _id: '123',
    title: "Investor Meeting",
    text: "Meeting with investors to discuss new ideas",
    time: "3 hours",
    done: false
  },
  {
    _id: '456',
    title: "Product Pitch",
    text: "Accelerate the world's transition to sustainable energy product pitch!",
    time: "1 hour",
    done: false
  },
  {
    _id: '678',
    title: "Catch-Up with the Team",
    text: "Check in with the team after our product pitch",
    time: "30 minutes",
    done: false
  },
];

const todos = (state = data, action) => {
  switch (action.type) {
    case 'update-todo':
      const newTodos = state.map(todo => {
        const newTodo = todo._id === action.todo._id ? action.todo : todo;
        return newTodo;
      });
      return newTodos;
    case 'delete-todo':
      return state.filter(todo => todo !== action.todo);
    case 'create-todo':
      const newTodo = {
        ...action.todo,
        _id: (new Date()).getDate() + "",
        title: action.todo.title,
        text: "new meeting created"
      };
      return [
        ...state,
        newTodo
      ]
    default:
      return state;
  }
}

export default todos;

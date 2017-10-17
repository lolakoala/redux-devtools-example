export const addTodo = (text, id) => {
  console.log('in action')
  return ({
  type: 'ADD_TODO',
  text,
  id
})};

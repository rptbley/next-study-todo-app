import { NextPage } from "next";
import TodoList from "../components/todoList/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todos";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

const index: NextPage = () => {
  return (
    <TodoList />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async({}):Promise<any> => {
  try {
    const { data } = await getTodosAPI();
    store.dispatch(todoActions.setTodo(data));
    return { 
      props: {
        todos: data
    }}
  } catch (err) {
    console.log(err);
    return {
      props: {
        todos: []
      }
    }
  }
})

export default index;
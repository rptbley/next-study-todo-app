import axios from "../lib/api/index";
import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/todoList/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todos";

interface IProps {
  todos: TodoType[]
};

const index: NextPage<IProps> = ({ todos }) => {
  return (
    <TodoList todos={todos} />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const {data} = await getTodosAPI();
    return { props: {todos: data} };
  } catch(err) {
    console.log(err);
    return { props: { todos: [] } };
  }
}

export default index;
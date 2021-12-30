import { NextPage } from "next";
import TodoList from "../components/todoList/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  {id: 1, text: "마트 가서 장보기", color: "red", checked: false},
  {id: 2, text: "bluablua", color: "yellow", checked: false},
  {id: 3, text: "rallrrall", color: "orange", checked: true},
  {id: 4, text: "dodododdada", color: "blue", checked: false},
  {id: 5, text: "dodaduda", color: "navy", checked: true},
  {id: 6, text: "lulula", color: "green", checked: false}
]

const index: NextPage = () => {
  return (
    <TodoList todos={todos} />
  )
}

export default index;
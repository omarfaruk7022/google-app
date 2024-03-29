import React, { useEffect, useState } from "react";
import TasksList from "./TasksList";

const ToDoLIst = () => {
  const [lists, setLists] = useState();

  useEffect(() => {
    fetch("https://immense-depths-73357.herokuapp.com/toDoList")
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
      });
  }, [lists]);

  return (
    <div className="grid lg:grid-cols-3 gap-10 lg:px-28 lg:w-full">
      {lists?.map((list) => (
        <TasksList task={list}></TasksList>
      ))}
    </div>
  );
};

export default ToDoLIst;

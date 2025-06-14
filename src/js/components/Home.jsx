import React, { useState } from "react";


//create your first component
const Home = () => {

	let arrayTask = [];
	const [taskList, setTaskList] = useState([]);

	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			setTaskList([...taskList, event.target.value])
			event.target.value = "";
		};

	}

	return (
		<div className="text-center container">

			<h1 className="text-center mt-5">Todo List!</h1>
			<input className="form-control" placeholder="Escribe la nueva tarea que quieres añadir"
				onKeyDown={handleKeyDown} />

			{
				taskList.map((task, index) => {
					return (<div className="position-relative mt-2">
						<p className="form-control text-start mb-0" rows="1">{task}</p>
						<button id={index} type="button" className="btn-close btn-close-hover position-absolute top-0 end-0 m-2 mb-0"
							onClick={() => {
								setTaskList(taskList.filter((value, indexTaskList) => {
									return index !== indexTaskList
								}))
							}
							} />
					</div>)
				})
			}
			<small className="text-muted d-flex text-star mx-2">
				{taskList.length == 0 ? "Sin tareas pendientes, añada nuevas tareas" : taskList.length + " items left"}
			</small>
		</div>
	);
};

export default Home;
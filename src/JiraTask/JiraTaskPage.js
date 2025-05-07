// import React, { useState } from "react";
// import "./JiraTaskPage.css";

// const tasks = [
//   "Update load time",
//   "Update Ui",
//   "Code Optimization",
//   "Code Performance",
//   "Matrial Ui Update",
// ];

// const JiraTaskPage = () => {
//   const [taskList, setTaskList] = useState(tasks);
//   const [nextBtn, setNextBtn] = useState([]);
//   const [preveBtn, setPreveBtn] = useState([]);
//   const [doneState, setDoneState] = useState([]);

//   const handleNext = (index) => {
//     setNextBtn((prev) => [...prev, taskList[index]]);
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

//   const handlePrev = (index) => {
//     setTaskList((prev) => [...prev, nextBtn[index]]);
//     setNextBtn(nextBtn.filter((_, i) => i !== index));
//   };

//   const handleNext2 = (index) => {
//     setPreveBtn((prev) => [...prev, nextBtn[index]]);
//     setNextBtn(nextBtn.filter((_, i) => i !== index));
//   };

//   const handleNext3 = (index) => {
//     setDoneState((prev) => [...prev, preveBtn[index]]);
//     setPreveBtn((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handlePrev4 = (index) => {
//     setPreveBtn((prev) => [...prev, doneState[index]]);
//     setDoneState((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handlePrevIn = (index) => {
//     setNextBtn((prev) => [...prev, taskList[index]]);
//     setPreveBtn((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <h2>Jira Task Page</h2>
//       <div className="main">
//         <div className="backlog">
//           <p>BackLogs</p>
//           {taskList.map((item, index) => (
//             <div key={index}>
//               <h3>{item}</h3>
//               <button
//                 className="backlogButton"
//                 onClick={() => handleNext(index)}
//               >
//                 Next
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="readytodo">
//           <p>Ready To Do</p>
//           {nextBtn?.map((items, index) => (
//             <div key={index}>
//               <h3>{items}</h3>
//               <button onClick={() => handleNext2(index)}>Next2</button>
//               <button onClick={() => handlePrev(index)}>Preious</button>
//             </div>
//           ))}
//         </div>
//         <div className="inProgress">
//           <p>In Progress...</p>
//           {preveBtn.map((item, index) => (
//             <div key={index}>
//               <h3>{item}</h3>
//               <button onClick={() => handleNext3(index)}>Next3</button>
//               <button onClick={() => handlePrevIn(index)}>Preious3</button>
//             </div>
//           ))}
//         </div>
//         <div className="done">
//           <p>Done...</p>
//           {doneState.map((item, index) => (
//             <div key={index}>
//               <h3>{item}</h3>
//               <button onClick={() => handlePrev4(index)}>Preious4</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JiraTaskPage;

import React, { useState } from "react";
import "./JiraTaskPage.css";

const initialTasks = [
  { id: 1, title: "Update load time", status: "backlog" },
  { id: 2, title: "Update UI", status: "backlog" },
  { id: 3, title: "Code Optimization", status: "backlog" },
  { id: 4, title: "Code Performance", status: "backlog" },
  { id: 5, title: "Material UI Update", status: "backlog" },
];

const statuses = ["backlog", "readyToDo", "inProgress", "done"];

const JiraTaskPage = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div>
      <h2>Jira Task Page</h2>
      <div className="main">
        {statuses.map((status) => (
          <div key={status} className={status}>
            <p>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task.id}>
                  <h3>{task.title}</h3>
                  <div className="button-group">
                    {status !== "backlog" && (
                      <button
                        onClick={() =>
                          moveTask(
                            task.id,
                            statuses[statuses.indexOf(status) - 1]
                          )
                        }
                      >
                        Previous
                      </button>
                    )}
                    {status !== "done" && (
                      <button
                        onClick={() =>
                          moveTask(
                            task.id,
                            statuses[statuses.indexOf(status) + 1]
                          )
                        }
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JiraTaskPage;

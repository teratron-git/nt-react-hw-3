import { useState } from "react"
import "./App.css"
import Listing from "./components/Listing"
import data from "./components/Listing/data.json"
import Stars from "./components/Stars"
import TaskSwitcher from "./components/TaskSwitcher"

const App = () => {
  const [task, setTask] = useState("1")

  const handler = (e: any) => {
    setTask(e.target.value)
  }

  return (
    <>
      <TaskSwitcher task={task} onChangeHandler={handler} />

      {task == "1" && <Stars count={5} />}

      {task == "2" && <Listing items={data} />}

      {/* {task == "3" && <>Task 3</>} */}
    </>
  )
}

export default App

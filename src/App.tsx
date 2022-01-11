import { useState } from "react"
import "./App.css"
import Listing from "./components/Listing"
import data from "./components/Listing/data.json"
import MessageHistory from "./components/MessageHistory"
import st_mes from "./components/MessageHistory/MessageHistory.module.css"
import messages from "./components/MessageHistory/messages"
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

      {task == "3" && (
        <div className={`${st_mes.body} `}>
          <div className={`${st_mes.clearfix} ${st_mes.container}`}>
            <div className={`${st_mes.chat} `}>
              <div className={`${st_mes["chat-history"]} `}>
                <MessageHistory list={messages} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App

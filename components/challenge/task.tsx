import { ClientTask } from "@/app/challenge/page"
import VocIntro from "./vocintro"
import Listening from "./listening"

interface TaskProps {
  task: ClientTask
}

const Task = ({ task }: TaskProps) => {
  return (
    <div>
      {task?.type === "VOCINTRO" && <VocIntro task={task} />}
      {task?.type === "LISTENING" && <Listening task={task} />}
    </div>
  )
}

export default Task

import { ClientTask } from "@/app/challenge/page"
import VocIntro from "./vocintro"
import Listening from "./listening"
import GapText from "./gaptext"

interface TaskProps {
  task: ClientTask
}

const Task = ({ task }: TaskProps) => {
  return (
    <div>
      {task?.type === "VOCINTRO" && <VocIntro task={task} />}
      {task?.type === "LISTENING" && <Listening task={task} />}
      {task?.type === "GAP" && <GapText task={task} />}
    </div>
  )
}

export default Task

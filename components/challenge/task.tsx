import { ClientTask } from "@/app/challenge/page"
import VocIntro from "./vocintro"

interface TaskProps {
  task: ClientTask
}

const Task = ({ task }: TaskProps) => {
  return <div>{task.type === "VOCINTRO" && <VocIntro task={task} />} </div>
}

export default Task

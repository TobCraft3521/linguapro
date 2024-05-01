import { Lesson } from "@prisma/client"
import { Separator } from "../ui/separator"

interface LessonCompProps {
  lesson: Lesson
}

const LessonComp = ({ lesson }: LessonCompProps) => {
  return (
    <div className="lesson m-8 h-[50vh]" data-lesson-id={lesson.id}>
      <div className="items-center flex my-[8px]">
        <hr className="basis-[48px] flex-grow border-t-[2px] border-0" />
        <h1 className="mx-[16px] text-center">Lesson {lesson.title}</h1>
        <hr className="basis-[48px] flex-grow border-t-[2px] h-0 my-[40px]" />
      </div>
      <div className="flex flex-1 bg-black"></div>
    </div>
  )
}

export default LessonComp

import { Lesson } from "@prisma/client"

interface LessonCompProps {
  lesson: Lesson
}

const LessonComp = ({ lesson }: LessonCompProps) => {
  return (
    <div
      className="lesson h-[100vh] bg-slate-500 m-8"
      data-lesson-id={lesson.id}
    >
      <h1>Lesson {lesson.title}</h1>
    </div>
  )
}

export default LessonComp

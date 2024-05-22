import { Button } from "../ui/button"

interface ChallengeFooterProps {
  state: "inactive" | "check" | "wrong" | "correct"
}

const ChallengeFooter = ({ state }: ChallengeFooterProps) => {
  return (
    <div className="flex h-44 w-full justify-center ">
      <div className="flex flex-col items-center justify-between border-t-2 py-12 dark:border-t-slate-500 md:flex-row md:px-32 lg:w-[1024px]">
        <div>a</div>
        <div>
          {state === "inactive" && (
            <Button variant="secondary" disabled>
              Check
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChallengeFooter

import { Button } from "../ui/button"

interface ChallengeFooterProps {
  state: "inactive" | "check" | "wrong" | "correct"
}

const ChallengeFooter = ({ state }: ChallengeFooterProps) => {
  return (
    <div className="flex h-24 w-full justify-center md:h-44 ">
      <div className="flex w-full flex-row items-center justify-between border-t-2 px-16 py-8 dark:border-t-zinc-700 md:px-32 md:py-12 lg:w-[1024px]">
        {state === "inactive" && (
          <>
            <div className="">Check</div>
            <Button variant="secondary" disabled>
              Check
            </Button>
          </>
        )}
        {state === "check" && (
          <>
            <div className="">Check</div>
            <Button variant="secondary">Check</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default ChallengeFooter

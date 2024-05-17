import ChallengeHeader from "@/components/challenge/challenge-header"
import { mostRecentLang } from "@/lib/mostRecentLang"

const Challenge = async () => {
  const mostRecentLanguage = await mostRecentLang()

  // TODO: Put elsewhere (in a client component child component)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setProgress((await getProfileProgress()) || 0)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div
      className="h-screen"
      style={{
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <ChallengeHeader mostRecentLang={mostRecentLanguage} />
    </div>
  )
}

export default Challenge

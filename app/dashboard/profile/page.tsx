"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getDisplayUserData } from "@/lib/profiles"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import { Language, Profile } from "@prisma/client"
import { DE, ES, FR, IT } from "country-flag-icons/react/3x2"
import { Loader2, User } from "lucide-react"
import { useEffect, useState } from "react"

const ProfilePage = () => {
  const { user } = useUser()
  const [userProfiles, setUserProfiles] = useState<Profile[] | undefined>([])
  const [mostRecentLanguage, setMostRecentLanguage] = useState<
    Language | undefined
  >(undefined)

  useEffect(() => {
    const setProfileData = async () => {
      const profiles = await getDisplayUserData()
      setUserProfiles(profiles.profiles)
      setMostRecentLanguage(profiles.mostRecentLanguage)
    }
    setProfileData()
  }, [])

  const formatCreatedAt = (date: Date | null | undefined) => {
    if (!date) return ""
    const month = date.toLocaleString("default", { month: "long" })
    const year = date.getFullYear()
    return `${month} ${year}`
  }

  const formattedCreatedAt = formatCreatedAt(user?.createdAt)

  const formatUpdatedAt = (date: Date | null | undefined) => {
    if (!date) return ""
    return date.toLocaleString()
  }

  const formattedUpdatedAt = formatUpdatedAt(user?.updatedAt)

  return (
    <div className="flex h-screen w-full justify-center md:h-full">
      <div className="w-full max-w-[800px] overflow-hidden rounded-t-2xl p-4">
        <ScrollArea className="h-full">
          <div className="flex h-[220px] w-full flex-col rounded-2xl border-[1.5px] bg-[#f7f7f8] p-4">
            <div className="flex w-full flex-row justify-between border-b-2 px-16 pb-2">
              <div className="flex h-[50px] flex-row items-center justify-center gap-2">
                <Avatar>
                  <AvatarImage src={user?.imageUrl}></AvatarImage>
                  <AvatarFallback>
                    <User size={32} className="p-1.5" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="text-lg font-bold leading-none">
                    {user?.fullName || (
                      <Loader2 size={16} className="animate-spin " />
                    )}
                  </div>
                  <div className="text-sm font-semibold leading-none">
                    {user && <div>@{user?.username}</div>}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Button variant="super" size="sm">
                  Share
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-row gap-8 p-8 px-16">
                {userProfiles?.map((profile) => (
                  <div className="" key={profile.id}>
                    {profile.language === Language.FR && (
                      <div className="overflow-hidden rounded-sm">
                        <FR width={36} height={24} />
                      </div>
                    )}
                    {profile.language === Language.ES && (
                      <div className="overflow-hidden rounded-sm">
                        <ES width={36} height={24} />
                      </div>
                    )}
                    {profile.language === Language.IT && (
                      <div className="overflow-hidden rounded-sm">
                        <IT width={36} height={24} />
                      </div>
                    )}
                    {profile.language === Language.DE && (
                      <div className="overflow-hidden rounded-sm">
                        <DE width={36} height={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col justify-end">
                <div className="flex flex-1 flex-row items-end gap-16 px-16 text-sm">
                  <div className="flex flex-row gap-1">
                    <div className="text-neutral-400">joined</div>
                    <div className="font-bold text-neutral-500">
                      {formattedCreatedAt || (
                        <Loader2 size={16} className="animate-spin " />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-1">
                    <div className="text-neutral-400">last active</div>
                    <div className="flex items-center font-bold text-neutral-500">
                      {formattedUpdatedAt || (
                        <Loader2 size={15} className="animate-spin " />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-4" />
          <div className="grid grid-cols-2 gap-1 gap-y-4 px-4 md:grid-cols-3 lg:grid-cols-4">
            {userProfiles?.map((profile) => (
              <div
                key={profile.id}
                className={cn(
                  "relative flex h-[340px] w-[180px] flex-col rounded-2xl border-[1.5px] bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105",
                  profile.language === mostRecentLanguage &&
                    "border-2 border-indigo-500",
                )}
                style={{ transformOrigin: "center" }}
              >
                <div className="absolute -top-4 left-4 flex items-center gap-2 rounded-sm bg-white p-3 shadow-md">
                  {profile.language === Language.FR && (
                    <div className="overflow-hidden rounded-sm">
                      <FR width={36} height={24} />
                    </div>
                  )}
                  {profile.language === Language.ES && (
                    <div className="overflow-hidden rounded-sm">
                      <ES width={36} height={24} />
                    </div>
                  )}
                  {profile.language === Language.IT && (
                    <div className="overflow-hidden rounded-sm">
                      <IT width={36} height={24} />
                    </div>
                  )}
                  {profile.language === Language.DE && (
                    <div className="overflow-hidden rounded-sm">
                      <DE width={36} height={24} />
                    </div>
                  )}
                  <span className="text-lg font-semibold">
                    {profile.language}
                  </span>
                </div>
                <div className="mt-12 flex flex-col items-center">
                  <div className="mb-4 flex flex-col items-center">
                    <div className="text-sm text-gray-500">XP</div>
                    <div className="text-2xl font-bold">{profile.xp}</div>
                  </div>
                  <div className="mb-4 flex flex-col items-center">
                    <div className="text-sm text-gray-500">Progress</div>
                    <div className="text-2xl font-bold">
                      {profile.progress}%
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-sm text-gray-500">Coins</div>
                    <div className="text-2xl font-bold">{profile.coins}</div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                  Last active:{" "}
                  {profile.updatedAt &&
                    new Date(profile.updatedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default ProfilePage

"use client"

import { onBlock, onUnblock } from "@/actions/block"
import { onFollow, onUnfollow } from "@/actions/follow"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"
import { toast } from "sonner"

interface ActionsProps {
  isFollowing: boolean
  userId: string
}

const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition()

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }
  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const followClick = isFollowing ? handleUnfollow : handleFollow

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`Blocked the user ${data.blocked.username}`))
        .catch(() => toast.error("Soemthing went wrong"))
    })
  }

  const handleUnblock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then(data => toast.success(`Unblocked the user ${data.blocked.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }


  return (
    <>
    <Button
      disabled={isPending}
      variant="primary"
      onClick={followClick}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
    <Button
      disabled={isPending}
      onClick={handleUnblock}
    >
      Block
    </Button>
    </>
  )
}

export default Actions

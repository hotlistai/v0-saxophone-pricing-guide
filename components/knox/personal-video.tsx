import { FadeIn } from "./fade-in"
import { VideoPlayer } from "./video-player"

const VIDEO_SRC =
  "https://raw.githubusercontent.com/hotlistai/anna-max-proposal/main/assets/videos/knox-anna-max-personal-video.mp4"

export function PersonalVideo() {
  return (
    <section className="px-9 md:px-[72px] pb-14 max-w-[1040px] mx-auto">
      <FadeIn>
        <VideoPlayer src={VIDEO_SRC} halfWidth />
      </FadeIn>
    </section>
  )
}

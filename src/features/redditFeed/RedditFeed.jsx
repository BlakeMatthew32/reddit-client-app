import { useSelector } from "react-redux"
import { selectRedditFeed } from "./redditFeedSlice"

const RedditFeed = () => {

  const ActiveFeedPost = useSelector(selectRedditFeed)

  return (
    <section>
      <h1>Reddit Feed</h1>

    </section>
  )
}

export default RedditFeed
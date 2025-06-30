import { useDispatch, useSelector } from "react-redux"
import { fetchRedditFeed, selectRedditFeedPosts } from "./redditFeedSlice"
import { useEffect } from "react"

const RedditFeed = () => {

  const dispatch = useDispatch()
  const ActiveFeedPosts = useSelector(selectRedditFeedPosts)

  useEffect(() => {
    dispatch(fetchRedditFeed())
  }, [])

  const postElements = ActiveFeedPosts?.map(post => {
    return (
      <div key={post.data.name}>
        <h3>{post.data.title}</h3>
        <p>{post.data.selfText}</p>
      </div>
    )
  })

  return (
    <section>
      <h1>Reddit Feed</h1>
      {postElements}
    </section>
  )
}

export default RedditFeed
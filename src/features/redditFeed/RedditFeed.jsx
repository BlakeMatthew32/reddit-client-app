import { useDispatch, useSelector } from "react-redux"
import { fetchRedditFeed, selectRedditFeedPosts } from "./redditFeedSlice"
import { useEffect } from "react"

const imageCheckRegex = /\.(png|jpg|jpeg)$/
const baseRedditUrl = 'https://www.reddit.com/'

const RedditFeed = () => {

  const dispatch = useDispatch()
  const ActiveFeedPosts = useSelector(selectRedditFeedPosts)

  useEffect(() => {
    dispatch(fetchRedditFeed())
  }, [])

  const postElements = ActiveFeedPosts?.map(post => {

    const hasImage = imageCheckRegex.test(post.data.url)

    const classes = hasImage ? 'post-tile post-tile-image' : 'post-tile'
    const subRedditLink =  baseRedditUrl + post.data.permalink

    return (
      <a href={subRedditLink} target="_blank">
        <div key={post.data.name} className={classes}>
          <div>
            <h3>{post.data.title}</h3>
            <p>{post.data.selftext}</p>
          </div>
          {hasImage && <img src={post.data.url}/>}
        </div>
      </a>
    )
  })

  return (
    <section className="posts-container">
      {postElements}
    </section>
  )
}

export default RedditFeed
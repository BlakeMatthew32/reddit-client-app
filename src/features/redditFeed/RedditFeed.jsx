import { useDispatch, useSelector } from "react-redux"
import { fetchRedditFeed, selectRedditFeedPosts, selectTopic } from "./redditFeedSlice"
import { useEffect } from "react"
import { selectSearchTerm } from "../search/searchSlice"

const imageCheckRegex = /\.(png|jpg|jpeg)$/
const baseRedditUrl = 'https://www.reddit.com/'

const RedditFeed = () => {

  const dispatch = useDispatch()
  const activeFeedPosts = useSelector(selectRedditFeedPosts)
  const activeTopic = useSelector(selectTopic)

  useEffect(() => {
    let topic = 'gaming'
    if (activeTopic) {
      topic = activeTopic
    }
    dispatch(fetchRedditFeed(topic))
  }, [activeTopic])

  const postElements = activeFeedPosts?.map(post => {

    const hasImage = imageCheckRegex.test(post.data.url)

    const classes = hasImage ? 'post-tile post-tile-image' : 'post-tile'
    const subRedditLink =  baseRedditUrl + post.data.permalink

    return (
      <a  key={post.data.name} href={subRedditLink} target="_blank">
        <div className={classes}>
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
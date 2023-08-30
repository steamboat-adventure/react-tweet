import { type EnrichedTweet } from 'react-tweet'
import { truncate } from './utils'
import { Twitter } from './icons'
import BlurImage from './blur-image'

export const TweetHeader = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <a href={tweet.user.url} target="_blank" rel="noreferrer">
        <BlurImage
          alt={tweet.user.screen_name}
          height={48}
          width={48}
          src={tweet.user.profile_image_url_https}
          className="h-10 w-10 overflow-hidden rounded-full border border-transparent transition-all ease-in-out hover:scale-105 hover:border-gray-200 hover:shadow-md"
        />
      </a>
      <div>
        <a
          href={tweet.user.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center font-semibold text-gray-900"
        >
          {truncate(tweet.user.name, 20)}
          {tweet.user.verified || tweet.user.is_blue_verified ? (
            <svg
              aria-label="Verified Account"
              className="ml-1 inline h-4 w-4 text-blue-500"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </g>
            </svg>
          ) : null}
        </a>
        <div className="flex items-center space-x-1">
          <a
            href={tweet.user.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-500 transition-all duration-75 hover:text-gray-900"
          >
            @{truncate(tweet.user.screen_name, 16)}
          </a>
          <p>·</p>
          <a
            href={tweet.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-500 transition-all duration-75 hover:text-gray-900"
          >
            {new Date(tweet.created_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </a>
        </div>
      </div>
    </div>
    <a href={tweet.url} target="_blank" rel="noreferrer">
      <span className="sr-only">Link to tweet</span>
      <Twitter className="h-5 w-5 text-[#3BA9EE] transition-all ease-in-out hover:scale-105" />
    </a>
  </div>
)

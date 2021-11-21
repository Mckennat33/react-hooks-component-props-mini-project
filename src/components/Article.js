import articleList from "./ArticleList"

function Article({ minutes, title, date="January 1, 1970", preview }) {
    return (
        <article>

            <h3>
                {title}
            </h3>

            <small>
                {date} | {minutes}
            </small>

            <p>
                {preview}
            </p>
        </article>
    )
}

export default Article
export default function TitleTextSection({title='', text}) {
    return (
        <section className="title-text-section">
            <h2 className="tts-title">{title}</h2>
            <p className="tts-text" dangerouslySetInnerHTML={{ __html: text }}/>
        </section>
    )
}
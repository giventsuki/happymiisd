export default function AudioPlayer({id, src}) {
    return (
        <div className="audio-wrapper">
            <audio id={id}
                   src={src}
                   type="audio/mp3"
                   loop
            ></audio>
        </div>
    )
}
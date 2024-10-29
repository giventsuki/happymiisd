import './VideoPlayer.css'

export default function VideoPlayer() {
    return (
        <div className="video-wrapper">

            <div className="video-content">
                <video className="video" controls>
                    <source src="./media/die-with-a-smile.MOV" type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}
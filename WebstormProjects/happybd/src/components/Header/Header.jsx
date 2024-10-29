import MyButton from "../UI/MyButton/MyButton";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import './Header.css'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
export default function Header() {
    function toggleMusic() {
        const music = document.getElementById("background-music");
        const switchMusic = document.getElementById("switch-music");
        if (music.paused) {
            music.play();
            document.getElementById("secret-message").style.display = "block";
            switchMusic.innerHTML = `Выключить <span> &#127925;</span>`

        } else {
            music.pause();
            switchMusic.innerHTML = `Включить <span> &#127925;</span>`
        }
    }
    function closeModal() {
        document.getElementById("secret-message").style.display = "none";
    }
    return (
        <div className="header">
            <ThemeSwitcher/>
            <h1>Менің сүйікті Жарқыным!</h1>
            <p>
                Ты самая особенная, и я хочу, чтобы этот день был таким же особенным,
                как и ты!
            </p>
            <div className="modal" id="secret-message">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <h2>Внизу еще будет видео и прежде чем включить его не забудь  поставить музыку на паузу</h2>
                </div>
            </div>
            <AudioPlayer id="background-music" src="/media/apocalypse.mp3"/>
            <MyButton id="switch-music" className="pink" type="button" onClick={toggleMusic}>Включить <span>&#127925;</span></MyButton>
        </div>
    )
}
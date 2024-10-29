import MyButton from "../UI/MyButton/MyButton";
import {useEffect} from "react";
import './ThemeSwithcer.css'

export default function ThemeSwitcher() {
    useEffect(() => {
        document.body.classList.add('light-theme');
    })

    function changeTheme() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('dark-theme')) {
            document.getElementById("switch-theme").style.backgroundColor = '#fff';
        } else {
            document.getElementById("switch-theme").style.backgroundColor = '#000';


        }

    }

    return (
        <MyButton id="switch-theme" className='' type="button" onClick={changeTheme}>🌙/☀️</MyButton>
    )
}
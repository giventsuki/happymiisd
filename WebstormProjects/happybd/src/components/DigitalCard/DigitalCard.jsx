import React, {useState, useEffect} from 'react';
import './DigitalCard.css';

const cardsData = [
    {
        text: `
            Сенімен мағыналы мәнді менің өмірім <br>
            Менімен жайланады сенің нәзік көңілің <br>
            Бәрімізге-біріміз тағдыр таңдаған <br>
            Жандармыз біз екі`
    },
    {
        text: `
            Шың болмайды төменсіз <br>
            Балық өледі теңізсіз <br>
            Әлем мәні жоқ кеңістік — сенсіз, сенсіз <br>
            Жаның өшеді демсіз <br>
            Менің жүрегім емсіз және әлем мәні жоқ кеңістік сенсіз, сенсіз!`
    },
    {
        text: `
            Сенен ғана,сенен ғана <br>
            Бақытты сезіндім мен сенен ғана! <br>
            Тек жанымнан алыстама!
        `
    },
    {
        text: `
            Бөліскім келмейтін, сырыма айналдың <br>
            Өзіңдей қол жетпейтін - әперем ай! <br>
            Әперем ай-ай түк қиналмай <br>
            Көздерің байлайды менен сұрамай<br>
            Жүзіңнен ғайып-ғайып болса күлкің<br>
            Әперем ай-ай түк қиналмай`
    },
    {
        text: `
            На мне розовая кофта, в розовых кроссовках<br>
            Покинул стены лофта, тебе со мной неловко<br>
            Давай возьмём по кофе, хоть нам не нужен допинг<br>
            Давай нам будет наплевать на всё`
    },
    {
        text: `
            А-а-а. Какая ты красивая <br>
            А-а-а. Зачем такая милая?<br>
            А-а-а. Случайно не влюби меня в себя <br>
            (уже)`
    }
];

export default function DigitalCard() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsExiting(true); // Начинаем анимацию выхода

            setTimeout(() => {
                setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
                setIsExiting(false); // Останавливаем анимацию
            }, 500); // Время, равное длительности анимации выхода
        }, 4000); // Меняем карточку каждые 3 секунды

        return () => clearInterval(interval);
    }, []);

    const {text} = cardsData[currentCardIndex];

    return (
        <section className="digital-letter">
            <div className="envelope">
                <div
                    className={`letter-content ${isExiting ? 'fade-out' : 'fade-in'}`}
                >
                    <p className="digital-text" dangerouslySetInnerHTML={{__html: text}}/>
                </div>
            </div>
        </section>
    );
}

import { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import './WishCard.css';

export default function WishCard({ id = '', text }) {
    const [isModalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true);
        document.body.classList.add('block');
    }

    function closeModal() {
        setModalOpen(false);
        document.body.classList.remove('block');
    }

    return (
        <>
            {isModalOpen && ( // Условный рендеринг модального окна
                <div id={id} className={`modal ${isModalOpen ? 'show' : ''}`}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2 className="wish-card-text" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                </div>
            )}
            <MyButton className="pink wish-button" type="button" onClick={openModal}>
                Открыть
            </MyButton>
        </>
    );
}

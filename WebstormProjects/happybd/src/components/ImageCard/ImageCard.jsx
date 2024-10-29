import './ImageCard.css'
export default function ImageCard({src, alt}) {
    return (
        <div className="image-card-wrapper">
            <img src={src} alt={alt} className="image-card-img"/>
        </div>
    )
}
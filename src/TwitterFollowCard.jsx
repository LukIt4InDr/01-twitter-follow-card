export function TwitterFollowCard ({ userName, name, isFollowing }) {
    const buttonClassName = isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
    
    const Follow = () => {
        console.log("Siguiendo")
    }

    return (
        <article className="tw-follow-card">
            <div className="tw-follow-card-user">
                <img src={`https://unavatar.io/${userName}`} alt="avatar iamge" className="tw-follow-card-avatar" />
                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-name">{name}</strong>
                    <span className="tw-follow-card-user-name">@{userName}</span>
                </div>
            </div>
            
            <button className={buttonClassName} onClick={Follow}>
                <strong className="tw-follow-card-button-text">{buttonText}</strong>
                <strong className="tw-follow-card-button-unfollow-text">Dejar de seguir</strong>
            </button>
        </article>
    )
}
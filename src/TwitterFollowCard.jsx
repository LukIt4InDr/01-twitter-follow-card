export function TwitterFollowCard ({ userName, name, isFollowing }) {
    return (
        <article className="tw-follow-card">
            <div className="tw-follow-card-user">
                <img src={`https://unavatar.io/${userName}`} alt="avatar iamge" className="tw-follow-card-avatar" />
                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-name">{name}</strong>
                    <span className="tw-follow-card-user-name">@{userName}</span>
                </div>
            </div>
            
            <button className="tw-follow-card-button">
                <strong>Seguir</strong>
            </button>
        </article>
    )
}
import {useState} from 'react'

export function TwitterFollowCard ({ children ,userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    //const state = useState(false)
    //const isFollowing = state[0] //Valor
    //const setIsFollowing = state[1] // Interruptor - Cómo actualizar el estado

    const handleClick = () => {
        setIsFollowing(!isFollowing) // Cambia el valor de isFollowing
    }


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />

                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infouserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'> Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
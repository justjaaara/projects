import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

const users =[
    {
        userName: 'IamJaaara',
        name: 'Felipe villa Jaramillo',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'diazcastrro',
        name: 'Simón Castro Díaz',
        isFollowing: true
    },
    {
        userName: 'Dousan87',
        name: 'Carlos Andrés',
        isFollowing: false
    }

]

export function App () {
    return(
        <section className='App'>
            {
                users.map(user =>{
                    const { userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
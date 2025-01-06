import { UserProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
import classes from './User.module.css'

const User = ({avatar_url, login, location, followers, following}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p className={classes.location}>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      <div className={classes.stats}>
        <p>Seguidores</p>
        <p className={classes.number}>{followers}</p>
      </div>
      <div className={classes.stats}>
        <p>Seguindo</p>
        <p className={classes.number}>{following}</p>
      </div>
 
    </div>
  )
}

export default User

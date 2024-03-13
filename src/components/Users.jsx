/* eslint-disable react/prop-types */


export const Users = ({ users }) => {
  const { avatar_url, login, bio, followers, following, public_repos, created_at } = users

  const date = new Date(created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <div className="cardContainer">
        <div className="cardLeft">
            <img src={avatar_url} alt={login} className="avatar"/>
            <a href={`https://www.github.com/users/${login}`} target="_blank" rel="noreferrer">{login}</a>
            <h5>{date === 'Invalid Date' ? '' : `Joined Github at ${date}`}</h5>
        </div>
        <div className="cardRight">
            <p>{bio}</p>
            <div>
                <p>Followers:</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Following:</p>
                <p>{following}</p>
            </div>
            <div>
                <p>Repos:</p>
                <p>{public_repos}</p>
            </div>
        </div>
    </div>
  )
}

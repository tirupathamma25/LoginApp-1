import './index.css'

const Message = props => {
  const {isLogin} = props
  return (
    <div>
      {isLogin ? (
        <h1 className="heading">Welcome User</h1>
      ) : (
        <h1 className="heading">Please Login</h1>
      )}
    </div>
  )
}

export default Message

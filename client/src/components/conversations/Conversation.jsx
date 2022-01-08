import "./conversation.css";

export default function Conversation() {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        // src={
        //   user?.profilePicture
        //     ? PF + user.profilePicture
        //     : PF + "person/noAvatar.png"
        // }
        alt=""
      />
      <span className="conversationName">jemyy</span>
      {/* <span className="conversationName">{user?.username}</span> */}
    </div>
  )
}

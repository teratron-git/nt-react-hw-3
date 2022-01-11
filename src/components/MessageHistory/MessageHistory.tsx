import st from "./MessageHistory.module.css"
import messages from "./messages"

type IProps = { list: typeof messages }

const MessageHistory = ({ list }: IProps) => {
  const response = (time: string, name: string, text: string) => (
    <>
      <li className={st.clearfix}>
        <div className={`${st["message-data"]} ${st["align-right"]}`}>
          <span className={`${st["message-data-time"]}`}>{time}</span> &nbsp; &nbsp;
          <span className={`${st["message-data-name"]}`}>{name}</span>
          <i className={`fa fa-circle ${st.me}`} />
        </div>
        <div className={`${st.message} ${st["other-message"]} ${st["float-right"]}`}>{text}</div>
      </li>
      <br />
    </>
  )

  const message = (time: string, name: string, text: string) => (
    <>
      <li>
        <div className={`${st["message-data"]}`}>
          <span className={`${st["message-data-name"]}`}>
            <i className={`fa fa-circle ${st.online}`} /> {name}
          </span>
          <span className={`${st["message-data-time"]}`}>{time}</span>
        </div>
        <div className={`${st.message} ${st["my-message"]}`}>{text}</div>
      </li>
      <br />
    </>
  )

  return (
    <ul style={{ listStyle: "none" }}>
      {list.map((item) =>
        item.type === "response"
          ? response(item.time, item.from.name, item?.text)
          : message(item.time, item.from.name, item?.text)
      )}
    </ul>
  )
}
export default MessageHistory

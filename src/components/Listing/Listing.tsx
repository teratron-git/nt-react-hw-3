import data from "./data.json"
import st from "./Listing.module.css"

type IProps = { items: typeof data }

const Listing = ({ items }: IProps) => {
  const reduceTitle = (text = "") => {
    const reducedText = text.length < 50 ? text : `${text.slice(0, 49)}...`

    return reducedText
  }

  const curView = (price = "", cur = "") => {
    let prettyPrice
    switch (cur) {
      case "USD":
        prettyPrice = `$${price}`
        break
      case "EUR":
        prettyPrice = `€${price}`
        break
      default:
        prettyPrice = `${price} ${cur}`
        break
    }

    return prettyPrice
  }

  const balanceView = (amount: number) => {
    let prettyBalance

    if (amount <= 10) {
      prettyBalance = "level-low"
    } else if (amount <= 20) {
      prettyBalance = "level-medium"
    } else {
      prettyBalance = "level-high"
    }

    return prettyBalance
  }

  return (
    <div className={st["item-list"]}>
      {items
        .filter((item) => item.state == "active")
        .map((item) => (
          <div className={st.item} key={item.listing_id}>
            <div className={st["item-image"]}>
              <a href={item.url}>
                <img src={item.MainImage?.url_570xN} alt="" />
              </a>
            </div>
            <div className={st["item-details"]}>
              <p className={st["item-title"]}>{reduceTitle(item.title)}</p>
              <p className={st["item-price"]}>{curView(item.price, item.currency_code)}</p>
              <p className={`${st["item-quantity"]} ${st[balanceView(item.quantity)]}`}>{item.quantity} left</p>
            </div>
          </div>
        ))}
    </div>
  )
}
export default Listing

import Star from "./Star"
import st from "./Stars.module.css"

interface IProps {
  count: number
}

const Stars = ({ count = 0 }: IProps) => {
  return (
    <div className={st.container}>
      <div className={st.stars}>
        {count >= 1 &&
          count <= 5 &&
          Array(count)
            .fill(count)
            .map((item) => <Star key={item} />)}
      </div>
    </div>
  )
}

export default Stars

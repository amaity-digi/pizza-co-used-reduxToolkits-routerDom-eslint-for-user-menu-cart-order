import { Link } from "react-router-dom"

function CartOverView() {
  return (
    <div>
        <p>
            <span>23 Pizzas</span>
            <span>$7</span>
        </p>
        <Link to="/">Open Cart &rarr;</Link>
    </div>
  )
}

export default CartOverView
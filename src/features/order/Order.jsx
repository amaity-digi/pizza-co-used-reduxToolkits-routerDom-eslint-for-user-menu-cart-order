import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiResturent";

function Order() {
  const order = useLoaderData();
  console.log("order1",order);

  const {id, status, orderPrice, priorityPrice, estimatedDelivery, customer, cart, priority} = order;
  console.log(id, status, orderPrice,priorityPrice, estimatedDelivery, customer, cart);

  return (
    <div>
      <div>
       <h2>Status!</h2>
       </div>

       <div>
        <p>Pizza Price: {orderPrice}</p>
        {priority && <p>Price Priority: formatCurrency(priorityPrice)</p>}
        <p>To pay on delivary: formatCurrency(orderPrice + priorityPrice)</p>
       </div>
    </div>
  )
}

export async function orderLoader({params}){
   const order = await getOrder(params.orderId);
   return order;
}

export default Order
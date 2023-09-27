import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiResturent";

const fakeCart = [
  {
    pizzaId: 101,
    name: "Vegetable",
    quantity: 100,
    unitPrice: 9,
    totalPrice: 21,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = fakeCart;
  
  return (
    <div>
    
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone Number</label>
          <input type="number" name="phone" required />
        </div>

        <div>
          <label>Address</label>
          <input type="text" name="address" required />
        </div>

        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <button disabled={isSubmitting}>{isSubmitting ? "Placing Order..." : "Order now"}</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request?.formData();
  const data = Object.fromEntries(formData);
  console.log("1111", data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log("first", order);
  const newOrder = await createOrder(order);
  console.log("new",newOrder);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

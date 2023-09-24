import { useNavigate, useRouteError } from "react-router-dom"

function Error() {
    const navigate = useNavigate();
    const errorMessage = useRouteError();

  return (
    <div>
        <h2>Something went wrong!</h2>
        <p>{errorMessage?.data || errorMessage?.message}</p>
        <button onClick={() => navigate(-1)}>&larr; Go Back</button>
    </div>
  )
}

export default Error
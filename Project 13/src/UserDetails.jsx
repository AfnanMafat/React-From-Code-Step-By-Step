import {useParams,Link} from 'react-router'

export default function UserDetails() {

    const paramsData = useParams();

  return (
    <>
        <h1>User Detail</h1>
        <h2>{paramsData.id}</h2>
        <Link to={"/Users"}>Back</Link>
    </>
  )
}

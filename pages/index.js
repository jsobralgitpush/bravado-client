import { Container } from "react-bootstrap"
import ListRobots from "../components/ListRobots"


export default function Home({data}) {
  return (  
   <>
    <Container className="p-5">
      <ListRobots initialScope={data}></ListRobots>
    </Container>
   </> 
  )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/robots')
  const data = await res.json()

  return {
      props: {data}, revalidate: 10,
  }
}

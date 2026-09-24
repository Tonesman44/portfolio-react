import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'

export default function NotFound() {
  return (
    <PageHead title="Wrong lobby">
      <p>That page doesn’t exist. Head back to the start and try again.</p>
      <p><Link className="btn btn--red" to="/">Back to home</Link></p>
    </PageHead>
  )
}

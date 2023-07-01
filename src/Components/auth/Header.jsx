import { Link } from 'react-router-dom'
export function Header () {
  return (
    <div className="text-center">
      <Link to={'/'} className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800 duration-150">Consultorio</Link>
    </div>
  )
}

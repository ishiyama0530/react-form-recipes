import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="rerendering">再描画について</NavLink>
        </li>
        <li>
          <NavLink to="zod">Zodを使用したForm</NavLink>
        </li>
      </ul>
    </nav>
  )
}

import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="rerendering">再描画について</NavLink>
        </li>
        <li>
          <NavLink to="zod">Zodを使用したフォーム</NavLink>
        </li>
        <li>
          <NavLink to="advanced">実践的なフォーム</NavLink>
        </li>
      </ul>
    </nav>
  )
}

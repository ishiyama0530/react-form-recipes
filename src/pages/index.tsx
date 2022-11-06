import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="rerendering">再描画について</NavLink>
        </li>
        <li>
          <NavLink to="advanced">
            フォームの関心事をカスタムフックに切り出す
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

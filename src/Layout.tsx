import { useState } from "react"
import { NavLink, NavLinkProps, Outlet } from "react-router-dom"

export default function Layout() {
  const [activeId, setActiveId] = useState("page1")
  return (
    <div>
      <nav>
        <ul>
          <LinkItem
            to="page1"
            activeId={activeId}
            onClick={() => setActiveId("page1")}
          >
            基本的な入力フォーム（useState）
          </LinkItem>
          <LinkItem
            to="page2"
            activeId={activeId}
            onClick={() => setActiveId("page2")}
          >
            再描画を抑制した入力フォーム（useRef）
          </LinkItem>
          <LinkItem
            to="page3"
            activeId={activeId}
            onClick={() => setActiveId("page3")}
          >
            React-Hook-Formを使用した入力フォーム
          </LinkItem>
          <LinkItem
            to="page4"
            activeId={activeId}
            onClick={() => setActiveId("page4")}
          >
            React-Hook-Formに関するフォームをカスタムフックに（実運用）
          </LinkItem>
        </ul>
      </nav>
      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </div>
  )
}

const LinkItem = (props: {
  to: string
  activeId: string
  onClick: NavLinkProps["onClick"]
  children: NavLinkProps["children"]
}) => (
  <li>
    <NavLink
      to={props.to}
      onClick={props.onClick}
      style={{
        fontSize: 15,
        textDecoration: "none",
        color: props.to === props.activeId ? "blue" : "grey",
      }}
      end
    >
      {props.children}
    </NavLink>
  </li>
)

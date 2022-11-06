import { useState } from "react"
import { NavLink, NavLinkProps, Outlet } from "react-router-dom"

export default function AdvancedLayout() {
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
            ReactHookFormとZodを使った実装
          </LinkItem>
          <LinkItem
            to="page2"
            activeId={activeId}
            onClick={() => setActiveId("page2")}
          >
            カスタムフックで処理を切り分ける
          </LinkItem>
          <LinkItem
            to="page3"
            activeId={activeId}
            onClick={() => setActiveId("page3")}
          >
            カスタムフックをMockに切り替える
          </LinkItem>
        </ul>
      </nav>
      <main style={{ padding: 20, backgroundColor: "#f0f0f0" }}>
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

import { useState } from "react"
import { NavLink, NavLinkProps, Outlet } from "react-router-dom"

export default function RerenderingLayout() {
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
            useState
          </LinkItem>
          <LinkItem
            to="page2"
            activeId={activeId}
            onClick={() => setActiveId("page2")}
          >
            React.memo
          </LinkItem>
          <LinkItem
            to="page3"
            activeId={activeId}
            onClick={() => setActiveId("page3")}
          >
            useCallback
          </LinkItem>
          <LinkItem
            to="page4"
            activeId={activeId}
            onClick={() => setActiveId("page4")}
          >
            useRef
          </LinkItem>
          <LinkItem
            to="page5"
            activeId={activeId}
            onClick={() => setActiveId("page5")}
          >
            React Hook Form（RHF）
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

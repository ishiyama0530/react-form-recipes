import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"

const Page1 = lazy(() => import("./pages/Page1"))
const Page2 = lazy(() => import("./pages/Page2"))
const Page3 = lazy(() => import("./pages/Page3"))
const Page4 = lazy(() => import("./pages/Page4"))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="" element={<Page1 />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)

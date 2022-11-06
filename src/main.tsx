import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdvancedLayout from "./pages/advanced/AdvancedLayout"
import RerenderingLayout from "./pages/rerendering/RerenderingLayout"
import ZodLayout from "./pages/zod/ZodLayout"

const Home = lazy(() => import("./pages"))

const RerenderingPage1 = lazy(() => import("./pages/rerendering/page1"))
const RerenderingPage2 = lazy(() => import("./pages/rerendering/page2"))
const RerenderingPage3 = lazy(() => import("./pages/rerendering/page3"))
const RerenderingPage4 = lazy(() => import("./pages/rerendering/page4"))
const RerenderingPage5 = lazy(() => import("./pages/rerendering/page5"))

const ZodPage1 = lazy(() => import("./pages/zod/page1"))
const ZodPage2 = lazy(() => import("./pages/zod/page2"))
const ZodPage3 = lazy(() => import("./pages/zod/page3"))
const ZodPage4 = lazy(() => import("./pages/zod/page4"))

const AdvancedPage1 = lazy(() => import("./pages/advanced/page1"))
const AdvancedPage2 = lazy(() => import("./pages/advanced/page2"))
const AdvancedPage3 = lazy(() => import("./pages/advanced/page3"))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="rerendering" element={<RerenderingLayout />}>
            <Route path="" element={<RerenderingPage1 />} />
            <Route path="page1" element={<RerenderingPage1 />} />
            <Route path="page2" element={<RerenderingPage2 />} />
            <Route path="page3" element={<RerenderingPage3 />} />
            <Route path="page4" element={<RerenderingPage4 />} />
            <Route path="page5" element={<RerenderingPage5 />} />
          </Route>
          <Route path="zod" element={<ZodLayout />}>
            <Route path="" element={<ZodPage1 />} />
            <Route path="page1" element={<ZodPage1 />} />
            <Route path="page2" element={<ZodPage2 />} />
            <Route path="page3" element={<ZodPage3 />} />
            <Route path="page4" element={<ZodPage4 />} />
          </Route>
          <Route path="advanced" element={<AdvancedLayout />}>
            <Route path="" element={<AdvancedPage1 />} />
            <Route path="page1" element={<AdvancedPage1 />} />
            <Route path="page2" element={<AdvancedPage2 />} />
            <Route path="page3" element={<AdvancedPage3 />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)

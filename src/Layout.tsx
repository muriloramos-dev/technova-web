import { NavBar } from "./components/NavBar"

export const Layout = () => {
  return (
    <div className="rounded-sm max-w-10/12 w-10/12 max-h-10/12 min-h-10/12 bg-background-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-3[10px_1fr_10px]">
      <div className="col-start-2 col-end-3">
        <NavBar />
      </div>
    </div>
  )
}

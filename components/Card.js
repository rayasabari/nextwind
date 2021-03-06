export default function Card({children, header}) {
  return (
    <div className="border rounded-xl shadow-sm bg-white overflow-hidden">
      <div className="p-5 border-b">
        {header}
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  )
}

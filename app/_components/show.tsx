
const Show = ({ bgColor }: { bgColor: string }) => {

  return (
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/100 p-4 md:col-span-3">
          <div style={{ backgroundColor: bgColor,color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"200px",width:"200px",position:"absolute",bottom:"20px",left:"20px",borderRadius:"10px" }}>
              Text
          </div>
      </div>
  )
}

export default Show
import { IBillboard } from "@/common.types";

interface BillboardProps {
    data: IBillboard;
}

const Billboard = ({data}: BillboardProps) => {
    if(!data){
        return <div className="text-center">No billboard</div>
      }
  return (
    <div className="p-3 mx-1 max-h-[300px] sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden object-cover bg-no-repeat" style={{backgroundImage: `url(${data?.imageUrl})`}}>
            <div className="h-full w-full flex items-center justify-center text-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl">
                    {data?.label}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billboard
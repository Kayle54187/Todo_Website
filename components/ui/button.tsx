import ButtonProps from "@/Interfaces/ButtonProps"




export default function ButtonComponent(props: ButtonProps){
    const is_icon: boolean = true
    return(
        <div className="text-center cursor-pointer rounded-md bg-gray-900 text-white p-2 flex justify-center items-center">
            {
                is_icon && <span className="mr-3">Icon</span>
            }
            <p>Click Me</p>
        </div>
    )
}
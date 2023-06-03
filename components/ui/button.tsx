import ButtonProps from "@/Interfaces/ButtonProps"


const ButtonComponent: React.FC<ButtonProps> = ({ is_icon, ButtonText, Icon, status, onClick }) => {

    const returnColor = ():string => {
        let color: string = "rgb(59, 130, 246)"

        if(status === 'Primary'){
            color = "rgb(59, 130, 246)"
        }else if(status === 'Error'){
            color = "rgb(239, 68, 68)"
        }else if(status === 'Loading'){
            color = "rgb(229, 231, 235)"
        }
        
        return color
    }

    return(
        <div onClick={onClick} className="hover:bg-gray-800 transition-colors duration-300 text-center cursor-pointer rounded-md bg-gray-900 text-white p-2 flex justify-center items-center">
            {
                is_icon && 
                <span className="mr-3">
                    {Icon && <Icon size={20} color={returnColor()}/>}
                </span>
            }
            <p>{ButtonText}</p>
        </div>
    )
}

export default ButtonComponent
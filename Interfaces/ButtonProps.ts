
export default interface ButtonProps{
    is_icon: boolean,
    Icon?: React.ElementType,
    ButtonText: string,
    status?: "Loading" | "Error" | "Primary",
    onClick: () => void
}
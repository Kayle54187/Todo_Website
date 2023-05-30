export default interface ButtonProps {
    is_icon: boolean,
    Icon: React.ReactNode,
    ButtonText: string,
    onValueChange: ()=>string
}
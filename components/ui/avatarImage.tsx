import AvatarImageProps from "@/Interfaces/AvatarImageProps"



export default function AvatarImage(props: AvatarImageProps){
    const data = {
        src: 'https://images.unsplash.com/photo-1482361046637-0226fdcfa3b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        alt: 'Girl'
    }
    return(
        <img src={data.src} className="w-10 h-10 rounded-full object-cover"/>
    )
}
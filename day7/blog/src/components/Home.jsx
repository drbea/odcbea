


export default function Home(){
    const loggedUser = sessionStorage.getItem("last_user")

    return (
        <>
            <h1>Home page {loggedUser ? (<>{loggedUser.username}</> ): (<>unregister</>)}</h1>
        </>
    )
}
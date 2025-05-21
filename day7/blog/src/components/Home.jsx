


export default function Home(){
    const loggedUser = sessionStorage.getItem("jack22@mail.gn")

    return (
        <>
            <h1>Home page {loggedUser.username}</h1>
        </>
    )
}
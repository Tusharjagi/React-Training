const InitialProps = ({name}) => {
    // console.log(na)
    return (
        <div>
            <h1>GetInitial props</h1>
            <p>{name}</p>
        </div>
    )
}

InitialProps.getInitialProps = async () => {
    // const res = await fetch('https://api.github.com/users/tusharjagi/repos')
    // const json = await res.json()
    // const project = json

    const name = 'Tushar jagi';

    return {
        name
    }
}

export default InitialProps;
const Details = ({status, premiered, network}) => {
    return <div>
        <p>Status: {status}</p>
        <p>
            Premiered {premiered} {!!network && `on ${network.name}`} {/*Will be displayed only if network.name is truthy*/}
        </p>

    </div>
}

export default Details;

export default function AgentDetails({ map }) {
    return (
        <div>
            {map && <img src={map.data.splash} width="50%" />}

        </div>
    )
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    mapid: ""
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`https://valorant-api.com/v1/maps/${context.params.mapid}`)
    const map = await res.json();
    return {
        props: { map },
    }
}
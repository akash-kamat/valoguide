import { useRouter } from "next/router"

export default function AgentDetails({ agent }) {
    const router = useRouter()
    return (
        <div>
            {agent && <p>{agent.data.description}</p>}
        </div>
    )
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    agentid: ""
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`https://valorant-api.com/v1/agents/${context.params.agentid}`)
    const agent = await res.json();
    console.log(agent)
    return {
        props: { agent },
    }
}
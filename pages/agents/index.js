import Link from "next/link";
import styles from '../../styles/Agents.module.css'
export default function Agents({ agents }) {
    return (
        <div className={styles.agent_container}>
            {agents.data.map((e, i) => {
                return (
                    <div className={styles.agent} key={i}>
                        <img className={styles.agent_icon} src={e.displayIcon} />
                        <Link className={styles.agent_title} href={`/agents/${e.uuid}`}>
                            {e.displayName}
                        </Link>
                        <div className={styles.role_container}>
                            <img className={styles.role_icon} src={e.role.displayIcon} />
                            <h3 className={styles.role_title}>{e.role.displayName}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
    const agents = await res.json();
    console.log(agents)
    return {
        props: { agents },
    }
}
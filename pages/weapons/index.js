import Link from "next/link";
export default function Weapons({ weapons }) {
    return (
        <div>
            {weapons.data.map((e, i) => {
                return (
                    <div key={i}>
                        <Link href={`/weapons/${e.uuid}`}>{e.displayName}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("https://valorant-api.com/v1/weapons")
    const weapons = await res.json();
    return {
        props: { weapons },
    }
}
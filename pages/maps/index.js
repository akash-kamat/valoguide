import Link from "next/link";

export default function Maps({ maps }) {
    return (
        <div>
            {maps.data.map((e, i) => {
                return (
                    <div key={i}>
                        <Link href={`/maps/${e.uuid}`}>{e.displayName}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("https://valorant-api.com/v1/maps")
    const maps = await res.json();
    console.log(maps)
    return {
        props: { maps },
    }
}
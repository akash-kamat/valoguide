import Link from "next/link";

export default function WeaponDetails({ weapon }) {
    return (
        <div>
            {weapon && <h1>{weapon.data.skins[0].displayName}</h1>}
        </div>
    )
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    weaponid: ""
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`https://valorant-api.com/v1/weapons/${context.params.weaponid}`)
    const weapon = await res.json();
    return {
        props: { weapon },
    }
}
export default function Ranks({ ranks }) {
    return (
        <div>
            {ranks.data[4].assetObjectName}
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("https://valorant-api.com/v1/competitivetiers")
    const ranks = await res.json();
    return {
        props: { ranks },
    }
}
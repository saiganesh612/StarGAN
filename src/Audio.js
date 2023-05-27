import Transcript from "./Transcript"

const DisplayFiles = ({ src }) => {
    return (
        <>
            <h2>{src === "soliga" ? "Soliga TTS Results" : "Lambani TTS Results"}</h2>
            <Transcript src={src} />
        </>
    )
}

export default DisplayFiles

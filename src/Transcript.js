import { SoligaPaths, LambaniPaths } from "./path"

const Transcript = ({ src }) => {
    const transcripts = src === "soliga" ? SoligaPaths.transcript : LambaniPaths.transcript
    const data = src === "soliga" ? SoligaPaths : LambaniPaths

    return (
        <div className="mb-4">
            <div className="row my-3">
                <div className="col"><h3>Original</h3></div>
                <div className="col"><h3>HiFi-GAN</h3></div>
                <div className="col"><h3>Waveglow</h3></div>
            </div>
            {
                transcripts.map((transcript, index) =>
                    <div className="mt-4" key={index}>
                        <p style={{ fontSize: "1.4em", fontWeight: "bold" }} className="m-1">{transcript}</p>
                        <div className="row">
                            <div className="col"><audio src={data.original[index]} controls /></div>
                            <div className="col"><audio src={data.hifi[index]} controls /></div>
                            <div className="col"><audio src={data.waveglow[index]} controls /></div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Transcript

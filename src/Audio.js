import { SoligaPaths, LambaniPaths } from "./path"

const DisplayFiles = ({ src }) => {
    const data = src === "soliga" ? SoligaPaths : LambaniPaths

    return (
        <>
            <h2>{src === "soliga" ? "Soliga-Kanada StarGAN Results" : "Lambani-Kanada StarGAN Results"}</h2>
            <div className="mb-4">
                <div className="row my-3">
                    <div className="col"><h3>Source</h3></div>
                    <div className="col"><h3>Target</h3></div>
                    <div className="col"><h3>Result</h3></div>
                </div>
                {
                    data.source.map((path, index) =>
                        <div className="mt-4" key={index}>
                            <div className="row">
                                <div className="col"><audio src={path} controls /></div>
                                <div className="col"><audio src={data.target[index]} controls /></div>
                                <div className="col"><audio src={data.result[index]} controls /></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default DisplayFiles

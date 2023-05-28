import { LambaniSoligaPaths, SoligaLambaniPaths, SoligaPaths, LambaniPaths } from "./path"
import DisplayFiles from "./Display"

const AudioFiles = () => {
    const componentData = [
        { data: LambaniSoligaPaths, heading: "Lambani-Soliga StarGAN Results" },
        { data: SoligaLambaniPaths, heading: "Soliga-Lambani StarGAN Results" },
        { data: LambaniPaths, heading: "Lambani-Kanada StarGAN Results" },
        { data: SoligaPaths, heading: "Soliga-Kanada StarGAN Results" }
    ]

    return (
        <>
            {componentData.map((component, index) => (
                <DisplayFiles key={index} data={component.data} heading={component.heading} />
            ))}
        </>
    )
}

export default AudioFiles

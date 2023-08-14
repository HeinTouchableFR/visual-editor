import {EditorComponentData} from "src/types";

type PreviewProps = {
    data: EditorComponentData[]
    previewUrl: string
}

export function Preview({ data, previewUrl }: PreviewProps) {
    return (
        <h1>Preview</h1>
    );
}
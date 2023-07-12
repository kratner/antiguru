interface ACastAudioProps {
    audioSource: string,
}

const ACastAudio:  React.FC<ACastAudioProps> = ( {audioSource} ) => {
    return (
        <iframe src={`${audioSource}`} frameBorder="0" width="100%" height="110px" allow="autoplay"></iframe>
    )
}

export default ACastAudio;

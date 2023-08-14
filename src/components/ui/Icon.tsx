type IconProps = {
    name: string
    size?: number
    additionalClass?: string
    path?: string
}

export default function Icon({
                                 name,
                                 size,
                                 path = 'sprite.svg',
                                 additionalClass,
                             }: IconProps) {
    const href = `/${path}#${name}`
    return (
        <svg className={`${additionalClass}`} width={size} height={size}>
            <use xlinkHref={href} />
        </svg>
    )
}

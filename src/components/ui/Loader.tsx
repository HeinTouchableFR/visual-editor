import React from "react";

type Props = {
    dots?: number
    width?: number
    strokeWidth?: number
    className?: string
}

export default function Loader({
                                   dots = 8,
                                   width = 28,
                                   strokeWidth = 4,
                                   className,
                               }: Props) {
    const buildCircles = (w: number, n: number, r: number) => {
        const circleRadius = w / 2 - r
        let dom: JSX.Element[] = []
        for (let i = 0; i < n; i++) {
            const a = (Math.PI / (n / 2)) * i
            const x = circleRadius * Math.sin(a) + w / 2
            const y = circleRadius * Math.cos(a) + w / 2
            dom.push(<circle key={i} cx={x} cy={y} r={r} fill='currentColor' />)
        }
        return dom
    }

    const offset = Math.PI * (width - strokeWidth)

    const style = {
        '--loader-width': `${width}px`,
        '--loader-offset': offset,
        '--loader-dashoffset': offset + offset / dots,
        '--loader-dashoffset50': offset + (2.5 * offset) / dots,
    } as React.CSSProperties

    return (
        <div className={`loader ${className}`} style={{ ...style }}>
            <div className={'loaderContainer'}>
                <svg
                    className={'circles'}
                    viewBox={`0 0 ${width} ${width}`}
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    {buildCircles(width, dots, strokeWidth / 2)}
                </svg>
                <svg
                    className={'halo'}
                    viewBox={`0 0 ${width} ${width}`}
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <circle
                        cx={width / 2}
                        cy={width / 2}
                        r={width / 2 - strokeWidth / 2}
                        strokeWidth={strokeWidth}
                        strokeLinecap='round'
                        stroke='currentColor'
                    />
                </svg>
            </div>
        </div>
    )
}

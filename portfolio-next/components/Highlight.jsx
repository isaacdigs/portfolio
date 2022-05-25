import Image from 'next/image';

export default function Highlight(props) {
    return (
        <div id="highlightContainer" className="flex flex-col items-center">
            <div className="relative w-12 h-12 rounded-full border border-slate-300">
                <Image
                    src={props.src}          
                    layout="fill"
                    alt={props.alt}
                    className="rounded-full"
                />
            </div>
            <p className="text-slate-600">{props.caption}</p>
        </div>
    )
}
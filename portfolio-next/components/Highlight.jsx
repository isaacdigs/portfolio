import Image from 'next/image';

export default function Highlight(props) {
    return (
        <div id="highlightContainer" className="flex flex-col items-center">
            <div className="mr-4 sm:mr-10 relative sm:w-20 sm:h-20 w-12 h-12 rounded-full border border-slate-300">
                <Image
                    src={props.src}          
                    layout="fill"
                    alt={props.alt}
                    className="rounded-full justify-self-center"
                />
            </div>
            <p className="text-slate-600 text-center mr-4 sm:mr-10 font-medium">{props.caption}</p>
        </div>
    )
}
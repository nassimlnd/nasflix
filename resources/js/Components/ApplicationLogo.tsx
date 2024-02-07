import { SVGAttributes } from 'react';

export default function ApplicationLogo({props, className} : {props?: SVGAttributes<SVGElement>, className?: string}) {
    return (
        <svg {...props} className={className}  width="72" height="120" viewBox="0 0 72 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H24V72H0V48Z" fill="#D92D20"/>
            <path d="M72 72.0001H48V48.0001H72V72.0001Z" fill="#B42318"/>
            <path d="M24 48L48 24L48 48.0001L24 72V48Z" fill="#FECDCA"/>
            <path d="M48 72.0001L24 96L24 72L48 48.0001V72.0001Z" fill="#FDA29B"/>
            <path d="M0 48L48 0L48 24L24 48H0Z" fill="#F97066"/>
            <path d="M72 72.0001L24 120L24 96L48 72.0001H72Z" fill="#F04438"/>
        </svg>

    );
}

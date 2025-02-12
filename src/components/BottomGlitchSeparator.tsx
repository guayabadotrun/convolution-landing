import glitchTop from '../assets/images/glitch-top.svg';

export default function BottomGlitchSeparator() {
    return (
        <section className="dark:bg-gray-900 rotate-180 -mt-2">
            <img src={glitchTop} className='w-full'></img>
        </section>
    )
}
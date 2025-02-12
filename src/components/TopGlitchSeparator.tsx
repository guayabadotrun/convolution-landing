import glitchTop from '../assets/images/glitch-top.svg';

export default function TopGlitchSeparator() {
    return (
        <section className="bg-white dark:bg-gray-900 md:-mt-20 mt-10">
            <img src={glitchTop} className='w-full'></img>
        </section>
    )
}
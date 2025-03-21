import { Github } from 'lucide-react';
import glitchTop from '../assets/images/glitch-top.svg';
import { Button } from './CTA/Button';

export default function OpenSource() {
    return (
        <section className="p-2 bg-white bg-cover" style={{ backgroundImage: `url(${glitchTop})` }}>
            <div className="container mx-auto mb-14">
                <div className="flex flex-col md:flex-row w-full gap-3">
                    <div className="flex flex-col gap-3 md:w-[60%] min-h-[200px] flex-grow">
                        <div className="p-10 bg-gray-200 border rounded-lg flex flex-col md:flex-row items-left md:gap-0 gap-4 justify-between">
                            <div className='flex flex-row gap-4 items-center'>
                                <Github></Github>
                                <p className='font-afacad text-lg'>Explore our Code on GitHub</p>
                            </div>
                            <div>
                                <Button variant='dark' href='https://github.com/ConvolutionSOL' target="_blank" onClick={() => console.log('click')}>Visit our GitHub</Button>
                            </div>
                        </div>
                        <div className="p-10 bg-gray-200 border rounded-lg h-full flex flex-col justify-center">
                            <h3 className='md:text-4xl text-xl md:font-light font-anek-latin font-bold'>We believe in open source.</h3>
                            <p className='text-lg my-4 font-afacad'>
                                All our code is available on GitHub for you to explore, use, and contribute to.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-[40%] min-h-[200px] flex-grow">
                        <div className="p-10 bg-gray-200 border rounded-lg relative h-full flex flex-col justify-center">
                            <h3 className='md:text-4xl text-xl md:font-light font-bold font-anek-latin'>Join the Future of AI Influencers</h3>
                            <div>
                                <p className='text-lg my-4 font-afacad'>
                                    Unlock the potential of AI-driven marketing with personalized digital ambassadors.
                                </p>
                                <Button variant='dark' href='#' onClick={() => console.log('click')}>Create now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
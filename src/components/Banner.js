import * as React from 'react';
import '../css/banner.css'
import Typewriter from 'typewriter-effect';
import myimage from '../asset/Image.png'

export default function Banner() {
    return (
        <div className='container'>
            <div className='desc'>
                <div className='name'>
                    <p className='greet1 text-color'>Hi 👋 there,</p>
                    <p className='myname text-color'>I'm <span>Anurag Chhaperwal</span></p>
                </div>
                <div className='fav'>
                    <p className='greet2 text-color'>
                        I am &nbsp;
                    </p>
                    <p className='prof'>
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Game Developer', 'Mobile Developer', 'Tutor'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </div>
            </div>
            <div className='profile'>
               <img className="proimg" src={myimage} />
            </div>
        </div>
    );
}
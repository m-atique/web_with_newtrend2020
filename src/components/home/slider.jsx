import { React, useEffect, useState } from 'react';
import './slider.css'
import useWebAnimations, { jello, slideInUp } from "@wellyshen/use-web-animations";

function Slider() {
    const data = [{
        line1:'Customized solutions',
        line2:'to meet the needs of',
        line3:'the changing market',
        a:'Revenue Cycle Management'
    },
    {
        line1:'Scalable extended',
        line2:'business office',
        line3:'services',
        a:'Staff Augmentation'
    },
    {
        line1:'Innovative and',
  
        line2:'intelligent technology',
        line3:'solutions and services',
        a:'Product Management'
    }]
    const [i,setValue]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            
            if(i<=1){
               setValue( i+1 )
            }
            else{
                setValue(0)
            }
        },3000)
    })
    
    const { ref } = useWebAnimations({ ...jello });

    return (
        <div>

            <div>
                <div>

                    <div  className='slider'>
                        <h1  ref={ref} className='slide_txt'>{data[i]['line1']}</h1>
                        <h1   ref={ref} className='slide_txt'>{data[i]['line2']}</h1>
                        <h1   ref={ref}className='slide_txt'>{data[i]['line3']}</h1>
{/* ----------------------------------------------------------------------------------------anchor */}
                        <h4   ref={ref}className='slide_anchor'> <a>{data[i]['a']}</a></h4>
                        
                    </div>
                    
                </div>
                <div>
                    <div>
                        <div className='dots'></div>
                        <div className='dots'></div>
                        <div className='dots'></div>
                    </div>
                    <div>
                        <button className='slide_btn'>Prev</button>
                        <button className='slide_btn'>Next</button>
                    </div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
}

export default Slider;
import React from 'react'
import logo from './assets/chat-2.png'
import {FaTwitter,FaGithub,FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <div>
        <div className='grid grid-cols-[1fr_2fr] place-items-center'>
            <div className='flex items-center space-0-1'>
              <img src={logo} alt='logo' />
              <span className='text-x1 font-semibold'>FeedbackHub</span>
            </div>
            <div className='grid grid-cols-[1fr_2fr_1fr_1fr]'>
             
             <div>Home</div>
             <div>Submit Feedback</div>
             <div>Admin</div>
             <div>Developer</div>

            </div>
        </div>
        <div className='grid grid-rows-3 place-items-center bg-gray-50'>
           <div className='text-semibold text-4xl mb-1'>Feedback Management System
           </div>
          <div className=' text-center  bg-gray-50'>
                   <p className='text-2xl '>Submit feedback,track progress and collaborate with our development team to <br/>improve your experience .</p>

                <div className='flex bg-gray-50 mt-4 justify-center'>


                 <button className=' bg-black hover:bg-slate-900 text-white w-40 py-2 rounded-md border border-gray-100 h'>Submit Feedback</button>
                  <button className=' bg-white text-black w-35 rounded-md   border border-black-300 '>View Status</button>
                </div>
          </div>
        </div>


       <div className='grid grid-rows-[1fr_4fr] justify-center text-center'>
        <div>
                <p className='mt-12 text-semibold text-4xl  '>Submit Your Feedback</p>
            <p className='text mt-3' >Help us improve by sharing your thoughts,suggestions or reporting issues. </p>
              </div>
              
              
                
                   <form className='grid grid-rows-5 grid-cols-2 px-4 py-4  border-gray-200 border-[1px] rounded-md'>
                    <div className=''>
                       <label className='block text-sm text-blck mb-2'>Name(optional)</label>
                         <input 
                         type="text" 
                          className='w-full h-10 text-gray-500 rounded-md border border-gray-300 px-3'  
                          placeholder="Your name"/>
                         </div>
                            
                          <div className=''>
                            <label className='block text-sm  text-black mb-2 '>Email(optional)</label>
                             <input type="email"
                              className=' w-full text-gray-500 h-10 rounded-md border border-gray-300 px-3'
                               placeholder="Your.email@example.com" />
                          </div>

                      
                          <div className='col col-span-2 '>
                            <label className='block text-sm text-left  text-black'>Feedback Type</label>
                            <select className='border border-gray-100  text-gray-500 w-full h-10 px-2' 
                                   defaultValue='disabled'>
                              <option value='bug'>Bug Report</option>
                              <option value='feature'>Feature Request </option>
                              <option value='general'>General Feedback</option>
                              <option value='improvement'>  Improvement Suggestions </option>
                            </select>
                          </div>

                            
                            <div className='col col-span-2'> 
                               <label className=' block text-sm text-left text-black mb-2'>Message*</label>
                               <textarea 
                               className=' text-gray-500 border border-gray-300 w-full h-24 px-2 py-2 resize-none'
                                row='5'
                               placeholder="please describe your feedback in detials"
                               />
                            </div>

                            <div className='col-span-2'>
                              <label className='block texet-sm text-left text-black mb-1'>Attach a Screenshot</label>
                              <input type='file'
                              accept='image'
                              
                              className='block w-full text-sm  text-gray-500 border border-gray-400'/>
                            </div>

                            <div className='col-span-2'>
                               < button className='bg-black hover:bg-slate-900 text-white w-full h-10 rounded-2xl'>Submit Feedback</button>
                            </div>
                                

                         
                 </form>
         </div>  
         <div className='grid grid-cols-[1fr_1fr_1fr_2fr]  bg-black place-items-center mt-4 '>
            <div>
            <div className='flex items-center space-0-1 not-[]: py-3'>
              <img src={logo} alt='logo' className='w-[30px] h-[30px]' />
              <span className='text-x1 font-semibold text-white'>FeedbackHub</span>
          
            </div>
            <p className='text-gray-500'> use our wonderful to  Streamline your feedback management process with our comprehensive solution to mprove your user ex.</p>
           </div>
              
             
             
                 <div>
                  <h2 className='py-3 text-white'>Quick Links</h2>
                   <ul className='text-gray-500 '>
                     <li className=' hover:text-white'>Submit Feedback</li>
                     <li className=' hover:text-white'> Track Status</li>
                     <li className=' hover:text-white'>Admin Login</li>
                     <li className=' hover:text-white'>Developer Portal</li>
                     </ul>
                      </div>

                     <div>
                      <h2 className='py-3  text-white'>Support</h2>
                  <ul className='text-gray-500  '>
                    <li className=' hover:text-white'>Help Center</li>
                    <li className=' hover:text-white'>Documentation</li>
                    <li className=' hover:text-white'>Contact Us</li>
                    <li className=' hover:text-white'>Privacy Policy</li>
                    </ul>
                    </div>
                   
                    <div className='py-3 text-white'>
                     <h2>Connect</h2>  
                     <div className='flex gap-4 py-3'>
                     <FaTwitter className='text-gray-500  hover:text-white'></FaTwitter>
                     <FaGithub className='text-gray-500 hover:text-white'></FaGithub>
                     <FaLinkedin className='text-gray-500  hover:text-white'></FaLinkedin>
                     </div>
                      </div>
                  
          
     </div>
  </div>
  );
}

export default Header

import React,{useState} from 'react';
import '../App.css';
import { MdHowToVote } from "react-icons/md";
import { FaVoteYea, FaInfoCircle } from "react-icons/fa";
import { IoIosStats, IoIosLogOut} from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Sidebar({children}) {
          const[isOpen , setIsOpen]=useState(false);
          const toggle = () =>setIsOpen(!isOpen)
          const menuItem=[
                    {
                      path:"/info",
                      name:"info",
                      icon:<FaInfoCircle />,
                    },
                    {
                      path:"/voter-registration",
                      name:"voter registration",
                      icon:<FaVoteYea />,
                    },
                    {
                      path:"/voting-area",
                      name:"Voting-Area",
                      icon:<MdHowToVote />,
                    },
                    {
                      path:"/result",
                      name:"Result",
                      icon: <IoIosStats />,
                    },
                    {
                      path:"/logout",
                      name:"Logout",
                      icon: <IoIosLogOut />,
                    }
                
                
                  ]
          return(

                    <div className='container'>
                              <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
                                        <div className="top_section">
                                                  <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                                                  <div style={{marginLeft: isOpen ? "50px" : "0px"}}  className="bars">
                                                  <IoMenu  onClick={toggle} />
                                                  </div>
                                        </div>
                                        {
                                                  menuItem.map((item,index)=>(
                                                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                                                      <div className="icon">{item.icon}</div>
                                                                      <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                                                            </NavLink>
                                                  )
                                        )
                                        }

                              </div>
                              <main>{children}</main>
                    </div>
          );
};

export default Sidebar;
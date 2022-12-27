import React, { useEffect, useState } from 'react';

const Team = () => {
    const [teams, setTeams] = useState([])

    useEffect( () =>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeams(data))
        

    }, [])
    return (
        <section>
            <div className="hero  bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Team</h1>
                        <p className=" text-3xl">Meet the React Team</p>
                        <p className="py-6 ">The React team members work full time on the core component APIs, the engine that powers React DOM and React Native, React DevTools, and the React documentation website.</p>
                    </div>
                </div>
            </div>
        
            <div className='flex flex-row justify-center'>                    
                    {
                        teams.map(team => 
                          
                              <div className=" card w-96 bg-base-100 shadow-xl m-5">
                            <figure className="px-10 pt-10">
                              <img src={team.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title">{team.name}</h2>
                              <p>{team.details}</p>
                              <div className="card-actions">
                                <button className="btn btn-primary">Meet Now</button>
                              </div>
                            </div>
                          </div>
                        
                        )
                    }
              </div>      
                
        </section>
    );
};

export default Team;
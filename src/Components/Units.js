import React from 'react';
import UnitDetail from './UnitDetail';

const Units = ({listUrl, recUrl }) =>{ 
    return(
    <div className="Units">

            {listUrl.length !== 0 ? <h1>My List</h1> : null}
            <div className="row">
                {listUrl.map(list => (
                    <UnitDetail id={list.id} key={list.id} img={list.img} title={list.title} row="mylist"/>
                ))}        
            </div>

            {recUrl.length !== 0 ? <h1>Recommendations</h1> : null}
            <div className="row">
                {recUrl.map(rec => (
                    <UnitDetail id={rec.id} key={rec.id} img={rec.img} title={rec.title} row="recommendations"/>
                ))}        
            </div>     

        {listUrl.length !== 0 ? 
            <h3 className='moivelist'>Your List Moives : {listUrl.map(list =>list.title).join(', ')}</h3>
        : null}

  </div>
);
      }

export default Units;
import React from 'react';
import myCvPdf from '../../assets/doc/cvDavidDethoor.pdf'

export default function MyCv() {

    return(
        <>
        <div>
      <embed src={myCvPdf} type="application/pdf" width="100%" height="800px"/>
    </div></>

    )
}
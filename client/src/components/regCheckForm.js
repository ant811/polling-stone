import React from 'react';


const RegCheckForm = () => {
  return (
    <div >
      <iframe
        title='registration'
        test-id="regCheckForm"
        src="https://verify.vote.org/?partner=111111&campaign=free-tools"
        width="100%"
        marginHeight="0"
        frameBorder="0"
        height="1200px" >
      </iframe>
    </div>
  )
}

export default RegCheckForm;
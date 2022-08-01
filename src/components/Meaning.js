import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../config/fonts'
export function Definition(props) {
    const data = props.data
    const [modal, setModal] = useState(false);
  const {toglemode}=props.theme;
    const handleModal = () => {
        if (modal) {
            setModal(false);
        } else (
            setModal(true)
        )
    }
    return (
        <div className={`mx-2 my-1 rounded-lg DefinationContainer bg-blue-100 p-3 ${toglemode==='dark'?'bg-slate-800':''}`}>
            <div className="titleBar flex justify-center space-x-5 items-center mb-5">
            <h1 className={` text-green-900 tracking-wider font-semibold text-lg ${toglemode==='dark'?'text-white':''}`}>Definition</h1>
                <FontAwesomeIcon className='h-6' color={`${toglemode==='dark'?'white':'gray'}`} onClick={handleModal} icon={['fa-solid', `fa-square-caret-${modal ? 'up' : 'down'}`]} />
            </div>
            {
                modal &&
                <div className="ModalContainer">
                    {
                        data.map(data => {
                            return (
                                data.definitions.map((data,index) => {
                                    return (
                                        <div key={index} className={`definition-Items flex space-x-4  text-sm my-1 ${toglemode==='dark'?'text-white':''}`}>
                                            <span className=' font-bold'>:-</span>
                                            <h1>{data.definition}</h1>
                                        </div>
                                    );
                                })
                            )
                        })
                    }

                </div>
            }

        </div>
    )
}

export function Synonyms(props) {
    const [modal, setModal] = useState(false);
    const data = props.data;
    const {toglemode}=props.theme;
    const handleModal = () => {
        if (modal) {
            setModal(false);
        } else (
            setModal(true)
        )
    }
    return (
        <div className={`mx-2 my-1 rounded-lg DefinationContainer bg-blue-100 p-3 ${toglemode==='dark'?'bg-slate-800':''}`}>
            <div className="titleBar flex justify-center space-x-5 items-center mb-5">
            <h1 className={` text-green-900 tracking-wider font-semibold text-lg ${toglemode==='dark'?'text-white':''}`}>Synonyms</h1>
                <FontAwesomeIcon className='h-6' color={`${toglemode==='dark'?'white':'gray'}`} onClick={handleModal} icon={['fa-solid', `fa-square-caret-${modal ? 'up' : 'down'}`]} />
            </div>

            {
                modal &&
                <div className="ModalContainer">
                    {
                        data.map(data => {
                            return (
                                data.definitions.map((data,index) => {
                                    return (
                                        <>
                                        {
                                            data.synonyms.length!==0 &&
                                            <div key={index} className={`definition-Items flex space-x-4  text-sm my-1 ${toglemode==='dark'?'text-white':''}`}>
                                            <span className=' font-bold'>:-</span>
                                            <h1>{data.synonyms}</h1>
                                            </div>
                                        }
                                        </>
                                    )
                                })
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export function Antonyms(props) {
    const data = props.data
    const [modal, setModal] = useState(false);
    const {toglemode}=props.theme;
    const handleModal = () => {
        if (modal) {
            setModal(false);
        } else (
            setModal(true)
        )
    }
    return (
        <div className={`mx-2 my-1 rounded-lg DefinationContainer bg-blue-100 p-3 ${toglemode==='dark'?'bg-slate-800':''}`}>
            <div className="titleBar flex justify-center space-x-5 items-center mb-4">
            <h1 className={` text-green-900 tracking-wider font-semibold text-lg ${toglemode==='dark'?'text-white':''}`}>Antonyms</h1>
                <FontAwesomeIcon className='h-6' color={`${toglemode==='dark'?'white':'gray'}`} onClick={handleModal} icon={['fa-solid', `fa-square-caret-${modal ? 'up' : 'down'}`]} />
            </div>

            {
                modal &&
                <div className="ModalContainer">
                  {
                        data.map(data => {
                            return (
                                data.definitions.map((data,index) => {
                                    return (
                                        <>
                                        {
                                            data.antonyms.length!==0 &&
                                            <div key={index} className={`definition-Items flex space-x-4  text-sm my-1 ${toglemode==='dark'?'text-white':''}`}>
                                            <span className=' font-bold'>:-</span>
                                            <h1>{data.Antonyms}</h1>
                                            </div>

                                        }
                                        </>
                                    )
                                })
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}



export function Example(props) {
    const data=props.data;
    const [modal, setModal] = useState(false);
    const {toglemode}=props.theme;
    const handleModal = () => {
        if (modal) {
            setModal(false);
        } else (
            setModal(true)
        )
    }
    return (
        <div className={`mx-2 my-1 rounded-lg DefinationContainer bg-blue-100 p-3 ${toglemode==='dark'?'bg-slate-800':''}`}>
            <div className="titleBar flex justify-center space-x-5 items-center mb-4">
                <h1 className={` text-green-900 tracking-wider font-semibold text-lg ${toglemode==='dark'?'text-white':''}`}>Example's</h1>
                <FontAwesomeIcon className='h-6' color={`${toglemode==='dark'?'white':'gray'}`} onClick={handleModal} icon={['fa-solid', `fa-square-caret-${modal ? 'up' : 'down'}`]} />
            </div>

            {
                modal &&
                <div className="ModalContainer">
                    {
                        data.map(data => {
                            return (
                                data.definitions.map((data,index) => {
                                    return (
                                        <>
                                        {
                                            data.example!==undefined &&
                                            <div key={index} className={`definition-Items flex space-x-4  text-sm my-1 ${toglemode==='dark'?'text-white':''}`}>
                                            <span className=' font-bold'>:-</span>
                                            <h1>{data.example}</h1>
                                            </div>
                                        }
                                        </>
                                    )
                                })
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
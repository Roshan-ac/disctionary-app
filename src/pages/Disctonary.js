import React, { useState,useEffect} from 'react'
import { Antonyms, Definition, Example, Synonyms } from '../components/Meaning'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Disctonary(props) {

const {toglemode}=props.data;
    const PlaywordSound = (url) => {
        var audio = new Audio(url);
        audio.play();
    }
    const customeAlert = (message) => {
        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage('');
        }, 3000);
    }

    const [word, setWord] = useState('')
    const [alertMessage, setAlertMessage] = useState('');
    const [ResponseData, setResponseData] = useState({
        isValue: false,
        meanings: null,
        phonetics: null,
        license: null,
        word: null
    })

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (word.length <= 1) {
            customeAlert('you must type some word to search');
        } else {
            await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {

            }).then(async (respnse) => {
                if (respnse.status !== 404) {
                    const jsonData = await respnse.json();
                    jsonData.forEach(Element => {
                        setResponseData({
                            isValue: true,
                            word: Element.word,
                            meanings: Element.meanings,
                            phonetics: Element.phonetics,
                            license: Element.license
                        })
                    })

                } else {
                
                }
            }).catch(err => customeAlert('!! make sure your internet connetion working properly'))
        }

    }






    return (
        <div className={`${toglemode==='dark'?'bg-slate-700':''}`}>
            <div className="form py-10 h-20">
                <form action="" className='flex justify-center space-x-5'>
                    <input onChange={(e) => setWord(e.target.value)} className={`p-2 text-black tracking-wide bg-slate-300  rounded-md ${toglemode==='dark'?'bg-slate-300':''}`} type="text" placeholder='Search word' />
                    <button type='submit' onClick={handleSubmit} className={`bg-green-500 tracking-wider border-gray-100 px-7 py-2 rounded-md ${toglemode==='dark'?'bg-blue-900 text-white':''}`}>Search</button>
                </form>
                  <div className="capitalize alertMessage items-center text-center py-4">
                    <h1 className={`font-semibold tracking-wider text-red-700 `}>{alertMessage}</h1>
                </div>
            </div>
            {
                ResponseData.isValue ?
                <div>
                    <div className="photonics mx-4 py-2 flex justify-between items-center">
                        <h1 className={`${toglemode==='dark'?'text-white':''} text-green-900 font-bold tracking-wider text-start capitalize`}>Result of {ResponseData.word}</h1>
                        <div className="photonicsData mr-1">
                            {
                                ResponseData.phonetics.map((data, index) => {
                                    return (
                                        data.audio !== '' && data.text !== undefined &&
                                        <div key={index} className='flex justify-center items-center space-x-4'>
                                            <h1 className={`${toglemode==='dark'?'text-white':''}`}>{data.text}</h1>
                                            <FontAwesomeIcon color={`${toglemode==='dark'?'white':''}`} onClick={() => PlaywordSound(data.audio)} icon={['fa-solid', 'fa-volume-high']} />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <Definition data={ResponseData.meanings} theme={{toglemode}} />
                    <Synonyms data={ResponseData.meanings} theme={{toglemode}} />
                    <Antonyms data={ResponseData.meanings} theme={{toglemode}} />
                    <Example data={ResponseData.meanings} theme={{toglemode}}/>
                </div>:
                <div className="emptybox items-center justify-center flex h-40">
                    <h1 className={`font-bold tracking-widest text-center ${toglemode==='dark'?'text-white':''}`}>Noting to show Search above</h1>
                </div>


            }


        </div >
    )
}

export default Disctonary










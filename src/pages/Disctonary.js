import React, { useState, useEffect } from 'react'
import { Antonyms, Definition, Example, Meaning, Synonyms } from '../components/Meaning'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Disctonary() {
    const PlaywordSound= (url)=>{
        var audio = new Audio(url);
        audio.play();
    }
    const [word, setWord] = useState('')
    const [intialMessage, setIntialMessage] = useState('Search a word to find Meaning')
    const [fetchError, setFetchError] = useState(true)
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
            alert('You must to type something to search')
        } else {
            await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {

            }).then(async (respnse) => {
                if (respnse.status !== 404) {
                    setFetchError(false);
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
                    setFetchError(true)
                    setIntialMessage('No match found')
                }
            }).catch(err => alert(err))
        }

    }





    return (
        <div className='Container'>
            <div className="form mt-10 h-20 flex justify-center">
                <form action="" className='flex-col space-x-5'>
                    <input onChange={(e) => setWord(e.target.value)} className='p-2 text-black tracking-wide bg-slate-300 rounded-md' type="text" placeholder='Search word' />
                    <button type='submit' onClick={handleSubmit} className='bg-green-500 tracking-wider border-gray-100 px-7 text-black py-2 rounded-md'>Search</button>
                </form>
            </div>
            {

                ResponseData.isValue &&
                <div>
                    <div className="photonics mx-4 py-2 flex justify-between items-center">
                        <h1 className=" text-green-900 font-bold tracking-wider text-start capitalize">Result of {ResponseData.word}</h1>
                        <div className="photonicsData mr-1">
                            {
                                ResponseData.phonetics.map((data,index)=>{
                                    return(
                                        data.audio!=='' && data.text!==undefined &&
                                        <div key={index} className='flex justify-center items-center space-x-4'>
                                        <h1>{data.text}</h1>
                                        <FontAwesomeIcon onClick={()=>PlaywordSound(data.audio)}  icon={['fa-solid' ,'fa-volume-high']}/>
                                        </div> 
                                    )
                                })
                            }

                        </div>
                    </div>
                    <Definition data={ResponseData.meanings} />
                    <Synonyms data={ResponseData.meanings} />
                    <Antonyms data={ResponseData.meanings} />
                    <Example data={ResponseData.meanings} />
                </div>

            }
        </div >
    )
}

export default Disctonary





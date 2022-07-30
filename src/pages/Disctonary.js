import { data } from 'autoprefixer'
import React, { useState, useEffect } from 'react'

function Disctonary() {

    const [word, setWord] = useState('')
    const [fetchError, setFetchError] = useState(false)
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
                    setFetchError(false)
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
                }
            }).catch(err => alert(err))
        }

    }





    return (
        <div className='Container'>
            <div className="form mt-10 h-20 flex justify-center">
                <form action="" className='flex-col space-x-5'>
                    <input onChange={(e) => setWord(e.target.value)} className='p-2 text-white bg-slate-700 rounded-md' type="text" placeholder='Search word' />
                    <button type='submit' onClick={handleSubmit} className='bg-green-900 border-gray-100 px-7 text-white py-2 rounded-md'>Search</button>
                </form>
            </div>

            <div className="contentBox min-h-screen bg-slate-900 md:p-8 p-4">
                {ResponseData.isValue &&
                    <div className="resultData md:flex">
                        <div className="md:p-5 responsedata md:w-3/5 text-gray-400">
                            <div className="title flex justify-between md:flex-col">
                                <h3 className='underline underline-offset-4  font-bold uppercase tracking-widest text-lg mb-5'>Meanings</h3>
                                <h3 className=' mr-10 text-lg md:mx-6'>{ResponseData.word}</h3>
                            </div>
                            {
                                ResponseData.meanings.map((data, index) => {

                                    return (
                                        <div className="meaningsData">
                                            <h3 className='m-2 uppercase font-bol text-red-300 tracking-wider'>( {data.partOfSpeech} )</h3>
                                            <h1 className='text-blue-300 underline-offset-4 m-2 capitalize underline'>Definitions</h1>
                                            {
                                                data.definitions.map(((data, index) => {

                                                    return (
                                                        <div className="definitions flex space-x-4 mx-4">
                                                            <h1 className=' font-bold'>:-</h1>
                                                            <h1 className='text-yellow-500'>{data.definition}</h1>
                                                        </div>
                                                    )
                                                }))
                                            }


                                            {
                                                data.definitions.map((data => {
                                                    return (
                                                        <div className="Synonyms w-3/4">
                                                            {
                                                                data.synonyms.length != 0 &&
                                                                <div className='flex items-center'>
                                                                    <h1 className={`text-blue-400 underline-offset-4 m-2 capitalize underline `}>Synonyms</h1>
                                                                    <h1 className='flex justify-around space-x-2  capitalize underline text-yellow-200'>
                                                                        <span>:</span>
                                                                        {
                                                                            data.synonyms.map(data => {
                                                                                return (
                                                                                    <span className=''>
                                                                                        {data}
                                                                                    </span>
                                                                                )
                                                                            })
                                                                        }
                                                                    </h1>

                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                }))
                                            }

                                            {
                                                data.definitions.map((data => {
                                                    return (
                                                        <div className="Antonyms">
                                                            {
                                                                data.antonyms.length !== 0 &&
                                                                <div className='flex  items-center'>
                                                                    <h1 className={`text-blue-400 underline-offset-4 m-2 capitalize underline `}>Antonyms</h1>
                                                                    <h1 className='flex justify-around space-x-2  capitalize underline text-yellow-200'>
                                                                        <span>:</span>
                                                                        {
                                                                            data.antonyms.map(data => {
                                                                                return (
                                                                                    <span className=''>
                                                                                        {data}
                                                                                    </span>
                                                                                )
                                                                            })
                                                                        }
                                                                    </h1>
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                }))
                                            }


                                            <div className="Example">
                                                <h1 className={`text-blue-400 underline-offset-4 m-2 capitalize underline `}>Example</h1>
                                                {
                                                    data.definitions.map((data => {
                                                        return (

                                                            data.example &&
                                                            <div className='flex  items-center mx-6'>
                                                                <h1 className='flex justify-around space-x-2  capitalize text-yellow-100'>
                                                                    <span>:-</span>

                                                                    <span className=''>
                                                                        {data.example}
                                                                    </span>

                                                                </h1>
                                                            </div>

                                                        )
                                                    }))
                                                }
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="md:p-5 pt-5 responsedata text-gray-400">
                            <h3 className='underline underline-offset-4 font-bold uppercase tracking-widest text-lg'>Photonics</h3>
                            <div className="resultContainer flex">
                                {
                                    ResponseData.phonetics.map((data) => {
                                        return (
                                            <div className=' space-y-3 p-2'>
                                                {
                                                    data.audio !== '' && data.text !== undefined &&
                                                    <>
                                                    <h4 className='text-yellow-300'>{data.text}</h4>
                                                    <audio
                                                        className='bg-slate-900'
                                                        src={data.audio}
                                                        style={{ width: 50, height: 20 }}
                                                        controls
                                                        >
                                                    </audio>
                                                        </>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="license flex space-x-5 py-10">
                                <h1 className='text-md uppercase text-red-300'>( Api's By ) :</h1>
                                <div className='text-white flex space-x-4'>
                                    <h1 className=' text-purple-400'>{ResponseData.license.name}</h1>
                                    <a className='underline underline-offset-4 text-blue-400' target="_blank" href={ResponseData.license.url}>Link To Visit</a>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div >
    )
}

export default Disctonary





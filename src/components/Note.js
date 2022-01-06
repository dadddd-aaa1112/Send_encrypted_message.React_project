//http://localhost:3000/note/nyuc5l3lupqgvgnaivu0v62d
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import env from "../env.json";

const Note = () => {
    let {noteUrl} = useParams()
    const [noteText, setNoteText] = useState('')
    const [lineClass, setLineClass] = useState('hide')
    const [formClass, setFormClass] = useState('hide')
    const [errorClass, setErrorClass] = useState('hide')

    useEffect(() => {
        if (noteUrl !== undefined) {
            fetch(env.urlBackend, {
                method: "POST",
                headers: {},
                body: JSON.stringify({
                    'url': noteUrl
                })

            })
                .then(response => response.json())
                .then(response => {

                    if (response.result) {
                        setNoteText(response.note)
                        setLineClass('')
                        setFormClass('hide')
                        setErrorClass('hide')
                    } else if (!response.result) {
                        setLineClass('hide')
                        setFormClass('hide')
                        setErrorClass('')
                    }
                })
        }
        else {
            setLineClass('hide')
            setFormClass('')
            setErrorClass('hide')
        }
    }, [])

    const getNote = (event) => {
        event.preventDefault()
        let url = event.target.elements.url.value;
        url = url.trim()
        if (url === '') {
            alert('заполните поля')
            return false
        }
        noteUrl = url
        window.location.href = env.url + '/' + url
    }

    const searchNote = () => {
        window.location.href = env.url
    }

    return (
        <div>

            <div className={lineClass}>
                <h4>Note</h4>
            </div>
            <div>{noteText}</div>
            <div>
                <button className="btn btn-light mt-4" onClick={searchNote}>Смотреть еще один note</button>
            </div>
            <div className={errorClass}>
                <p>Произошла ошибка.Такой хэш не найден</p>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <label className="mt-4" htmlFor="url">Введите заметку</label>
                    <input type="text" name="url" id="url"
                           className="form-control mt-2"/>
                    <button type="submit" className="btn btn-outline-light mt-4">Искать Note</button>
                </form>
            </div>

        </div>
    )
}

export default Note
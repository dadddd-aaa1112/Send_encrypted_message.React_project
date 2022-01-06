import React, {useState} from 'react'
import env from '../env.json'

const Create = () => {

    const [url, setUrl] = useState('')
    const [lineClass, setLineClass] = useState('hide')
    const [formClass, setFormClass] = useState('')

    const sendData = (obj) => {
        setFormClass('hide')
        setLineClass('')
        fetch(env.urlBackend, {
            method: "POST",
            headers: {},
            body: JSON.stringify(obj)

        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.result) {
                    setUrl(env.url+"/"+response.url)
                }
       })
    }


    const loadDataFromForm = (event) => {
        event.preventDefault()
        let note = event.target.elements.note.value
        note = note.trim()
        if (note === '') {
            alert('заполните поля')
            return false
        }
        sendData({"note": note})
    }

    return (
        <>


            <form onSubmit={loadDataFromForm} className={formClass}>
                <div className="">
                <h5>Страница для введения записи</h5>
                <textarea rows="3" className="form-control mt-4" name="note" id="note" placeholder="Введите заметку"/>
                <button className="btn btn-outline-light mt-4" type="submit">Создать</button>
                </div>
            </form>


                <div className={lineClass}>
                    <div>{url}</div>
                    <div>
                        <button className="btn btn-outline-dark"  onClick={() =>window.location.reload()}>Создать новую заметку</button>
                    </div>
                </div>


        </>
    )
}

export default Create
import React from 'react'

export default function Questions(props) {
    return (
        <div className='container-fluid'>
            <div className='col-md-5 m-auto'>
                <div className='mt-3'>
                    <div className='card text-left'>
                        <div className='card-body'>
                            <form onSubmit={props.submit}>
                                <div className='form-group'>
                                    <label htmlFor=''>
                                        {" "}
                                        <b>3.</b>What are you currently doing?
                                    </label>
                                    <br />
                                    <input
                                        type="radio"
                                        id='programmer'
                                        value='programmer'
                                        name="q1"
                                        autoComplete="off"
                                    />
                                    <label htmlFor='programmer'>Programmer</label>
                                    <br />
                                    <input
                                        type="radio"
                                        id='student'
                                        value='student'
                                        name="q1"
                                        autoComplete="off"
                                    />
                                    <label htmlFor='student'>Student</label>
                                    <br />
                                    <input
                                        type="radio"
                                        id='teacher'
                                        value='teacher'
                                        name="q1"
                                        autoComplete="off"
                                    />
                                    <label htmlFor='teacher'>Techaer</label>
                                    <br />
                                    <input type="radio" id="other" value='other' name="q1" autoComplete="off" />
                                    <label htmlFor=''>Other</label>
                                    <br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        disabled
                                        name='other'
                                        autoComplete='off'
                                        placeholder='Type here if not listed'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor=''>
                                        {" "}
                                        <b>4.</b> please rate our course
                                    </label>
                                    <br />
                                    <input
                                        type="radio"
                                        id='poor'
                                        name="q2"
                                        value='poor'
                                        autoComplete="off"
                                    />
                                    <label htmlFor='poor'>Poor</label>
                                    <br />
                                    <input
                                        type="radio"
                                        id='good'
                                        value='good'
                                        name="q2"
                                        autoComplete="off"
                                    />
                                    <label htmlFor='good'>Good</label>
                                    <br />
                                    <input
                                        type="radio"
                                        id='execellent'
                                        value='execellent'
                                        name="q2"
                                        autoComplete="off"
                                    />
                                    <label htmlFor='execellent'>Execellent</label>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor=''>
                                        {" "}
                                        <b>5.</b> Write your review here. {""}
                                    </label>
                                    <textarea className='form-control' name="q3"></textarea>
                                </div>
                                <button type='submit' className='btn btn-primary'>
                                    Save
                                </button>
                            </form>
                            <center>
                                <span className='badge badge-pill disabled'>1</span>
                                <span className='badge badge-pill badge-primary'>2</span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

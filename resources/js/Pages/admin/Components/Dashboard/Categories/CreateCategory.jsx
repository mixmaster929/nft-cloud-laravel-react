import { useForm } from '@inertiajs/inertia-react'
import React, { useState } from 'react'

export default function CreateCategory({close}) {

    const {data, setData, post, reset, errors} = useForm({ name: '', active: '1' });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('categories.store'), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    const [activeState, setActive] = useState('1');
    
    const onChangeActive = (e) => {
        setActive(e.target.value)
        setData({...data, active: e.target.value});
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label">Category Name:</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                            {errors && <div className='text-danger mt-1'>{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="active" className="col-form-label">Active:</label>
                            <div>
                                <input type="radio" onChange={onChangeActive} value="1" checked={activeState === '1'} /><label className="col-form-label">Yes:</label>
                                <input type="radio" onChange={onChangeActive} value="0"  checked={activeState === '0'}/><label className="col-form-label">No:</label>
                            </div>
                            {errors && <div className='text-danger mt-1'>{errors.active}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Save</button>
                </div>
            </form>
        </>

    )
}

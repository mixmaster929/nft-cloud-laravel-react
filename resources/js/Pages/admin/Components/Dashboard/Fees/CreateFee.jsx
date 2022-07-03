import { useForm } from '@inertiajs/inertia-react'
import React, { useState } from 'react'

export default function CreateFee({close}) {

    const {data, setData, post, reset, errors} = useForm({ name: '', type: '', percentage: '' });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('fees.store'), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label">Fee Name:</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                            {errors && <div className='text-danger mt-1'>{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="type" className="col-form-label">Fee Type:</label>
                            <input type="text" className="form-control" name='type' value={data.type} onChange={onChange} id="type"/>
                            {errors && <div className='text-danger mt-1'>{errors.type}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="percentage" className="col-form-label">Fee Percentage %:</label>
                            <input type="text" className="form-control" name='percentage' value={data.percentage} onChange={onChange} id="percentage"/>
                            {errors && <div className='text-danger mt-1'>{errors.percentage}</div>}
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

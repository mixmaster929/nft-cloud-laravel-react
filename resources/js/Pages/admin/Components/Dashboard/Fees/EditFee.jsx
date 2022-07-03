import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'

export default function EditFee({close, model}) {

    const {data, setData, put, reset, errors} = useForm({ name: model.name, type: model.type, percentage: model.percentage });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('fees.update', model.id), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }
    
    useEffect(() => {
        setData({...data,
            name: model.name, type: model.type, percentage: model.percentage
        });
    }, [model]);
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label">Name:</label>
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
                    <button type="submit" className="btn bg-gradient-primary">Update</button>
                </div>
            </form>
        </>

    )
}

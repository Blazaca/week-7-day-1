import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseSynth_name } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface SynthFormProps {
    id?:string;
    data?:{}
}

interface SynthState {
    name: string;
    price: string;
}

export const SynthForm = (props:SynthFormProps) => {

    const dispatch = useDispatch();
    let { synthData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<SynthState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(synthData)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseSynth_name(data.name))
            console.log('please work')
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="synth_name">Synth Name</label>
                    <Input {...register('synth_name')} name="synth_name" placeholder='synth_name' />
                </div>
                <div>
                    <label htmlFor="category">Catagory</label>
                    <Input {...register('category')} name="category" placeholder="category"/>
                </div>
                <div>
                    <label htmlFor="file_type">File Type</label>
                    <Input {...register('file_type')} name="file_type" placeholder="file type"/>
                </div>
                <div>
                    <label htmlFor="midi_ports">Midi Ports</label>
                    <Input {...register('midi_ports')} name="midi_ports" placeholder="Midi Ports"/>
                </div>
                <div>
                    <label htmlFor="synthesis_type">Synthesis Type</label>
                    <Input {...register('synthesis_type')} name="synthesis_type" placeholder="Synthesis Type"/>
                </div>
                <div>
                    <label htmlFor="voices">Voices</label>
                    <Input {...register('voices')} name="voices" placeholder="voices"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
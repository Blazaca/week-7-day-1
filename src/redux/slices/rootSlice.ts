import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        category: "pad",
        description: "Sweet Pads smooth",
        file_type: ".xml",
        midi_ports: "2",
        synth_name: "Ultra Stab",
        synthesis_type: "Subtractive",
        voices: "2"
    },
    reducers: {
        chooseSynth_name: (state, action) => { state.synth_name = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseSynth_name } = rootSlice.actions;
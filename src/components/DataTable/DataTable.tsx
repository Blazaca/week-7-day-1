import React, {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams, GridSelectionModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core'; 
import { SynthForm } from '../../components/SynthForm';

interface gridData{
  data:{
    id?:string;
  }
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'synth_name',
      headerName: 'Synth Name',
      width: 170,
      editable: true,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      editable: true,
    },
    {
      field: 'file_type',
      headerName: 'File Type',
      width: 140,
      editable: true,
    },
    {
      field: 'midi_ports',
      headerName: 'Midi Ports',
      width: 140,
      editable: true,
    },
    {
      field: 'voices',
      headerName: 'Voices',
      width: 130,
      editable: true,
    },
    {
      field: 'synthesis_type',
      headerName: 'Synthesis Type',
      width: 174,
      editable: true,
    }
  ];

  export const DataTable =  () => {
  
    let { synthData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}})

    const [selectionModel, setSelectionModel] = useState<any>([])

  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      server_calls.delete(`${selectionModel}`)
      getData()
    }
  
    console.log(gridData) // a list of id's from checked rows
  
      return (
          <div style={{ height: 400, width: '100%' }}>
            <h2>Synths In Inventory</h2>
            <DataGrid 
            rows={synthData} 
            columns={columns} 
            pageSize={5} 
            checkboxSelection 
            onSelectionModelChange ={ (item) => {
              setSelectionModel(item)
            }}
            {...synthData}
          />

  
          <Button onClick={handleOpen}>Update</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
  
            {/*Dialog Pop Up begin */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update A Synth</DialogTitle>
            <DialogContent>
              <DialogContentText>Synth id: {selectionModel}</DialogContentText>
                <SynthForm id={selectionModel}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>
          </div>
        );
  }
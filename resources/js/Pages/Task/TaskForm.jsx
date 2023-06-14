import BasicButton from "@/Components/BasicButton";
import ResponsiveAppBar from "./Partials/Navbar";
import { Typography } from "@mui/material";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BasicSelect from "@/Components/BasicSelect";

const AppLayout = (props) => {
    console.log(props)
    const [judul,setJudul] = useState(props.id? props.task.judul : '')
    const [deskripsi,setDeskripsi] = useState(props.id? props.task.deskripsi : '')
    const [status,setStatus] = useState(props.id? props.task.status : props.statuses[0].status)
    const {data,setData,put,post} = useForm({
        judul : judul,
        deskripsi : deskripsi,
        status : status,
    })

    const handleJudul = (event) => {
        setJudul(event.target.value),
        setData('judul', event.target.value)
    }
    const handleDeskripsi = (event) => {
        setDeskripsi(event.target.value)
        setData('deskripsi', event.target.value)
    }
    const handleStatus = (status) => {
        setStatus(status)
        setData('status', status)
    }


    const submit = () => {
        if(props.id){
            put(route('tasks.update', {id: props.id}))
        } else {
            post(route('tasks.store'))
        }
    }
    return (<>
        <ResponsiveAppBar/>
        <div
            style={{margin: '0 auto',padding:'100px 50px 50px 50px', display:'flex', justifyContent:'center',alignItems: 'center' , width:'40%'}}
            
        >
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-5/5 p-6 text-left">
                    <h1 className="text-2xl font-medium mb-8">Masukkan Data Tugas</h1>
                    <form onSubmit={submit} className="w-full">
                        <input 
                            required
                            type="text" 
                            className="w-full border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-4"
                            placeholder="Judul"
                            value={judul}
                            onChange={handleJudul}
                        />
                        <textarea 
                            required
                            className="w-full border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg  mb-4" 
                            placeholder="Deskripsi"
                            value={deskripsi}
                            onChange={handleDeskripsi}
                        />
                        <div className="mb-5 w-10">
                            <BasicSelect
                                title="Status"
                                datas={props.statuses}
                                default={status}
                                onChange={handleStatus}
                            />
                        </div>
                        
                        <button type="submit" className="h-[40px] w-2/5 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#7286E8] duration-500 ease-in-out"><AddRoundedIcon/>
                        <span>{props.id? "Update Tugas" : "Tambah Tugas"}</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>)
};

export default AppLayout;

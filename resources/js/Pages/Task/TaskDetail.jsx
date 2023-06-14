import BasicButton from "@/Components/BasicButton";
import ResponsiveAppBar from "./Partials/Navbar";
import { Typography } from "@mui/material";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BasicSelect from "@/Components/BasicSelect";

const AppLayout = (props) => {
    return (<>
        <ResponsiveAppBar/>
        <div
            style={{margin: '0 auto',padding:'100px 50px 50px 50px', display:'flex', justifyContent:'center',alignItems: 'center' , width:'40%'}}
            
        >
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-5/5 p-6 text-left">
                    <h1 className="text-2xl font-medium mb-8">Masukkan Data Tugas</h1>
                        <input 
                            disabled
                            type="text" 
                            className="w-full border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-4"
                            placeholder="Judul"
                            value={props.task.judul}
                        />
                        <textarea 
                            disabled
                            className="w-full border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg  mb-4" 
                            placeholder="Deskripsi"
                            value={props.task.deskripsi}
                        />
                        <div className="mb-5 w-10">
                            <Typography variant="h6">Status:</Typography>
                            <span>
                                <Typography variant="body1">{props.task.status.charAt(0).toUpperCase() + props.task.status.slice(1)}</Typography>
                            </span>
                        </div>
                </div>
            </div>
        </div>
    </>)
};

export default AppLayout;

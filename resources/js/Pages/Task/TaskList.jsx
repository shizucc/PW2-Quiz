import TableTask from './Partials/TableTask'
import ResponsiveAppBar from './Partials/Navbar'
import BasicButton from '@/Components/BasicButton';

const AppLayout = (props) => {
    const addTask = () => {
        console.log("Menambah Tugas")
        window.location.href = route('tasks.create')
    }
    return(<>
         <ResponsiveAppBar/>
            <div style={{padding: '50px 0px 0px 50px', margin:'50px 50px 50px 50px'}}>
            <BasicButton
                title={"Tambah Tugas"}
                buttonClicked={addTask}
            />
            <TableTask
                datas={props.tasks}
                route_for_show={'tasks.show'}
                data_for_select={props.stasuses}
                route_for_edit={'tasks.edit'}
                route_for_update={'tasks.update'}
                route_for_delete={'tasks.destroy'}
                message_where_delete={'Apakah anda yakin akan menghapus ini ?'}
                >
            </TableTask>
            </div>
    
    </>)
}
export default AppLayout;
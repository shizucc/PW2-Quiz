import TableTask from './Partials/TableTask'

const AppLayout = (props) => {
    return <div style={{
        padding: '50px 0px 0px 50px'
    }}>
            <p>Hello Dunia</p>
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
    </div>;
};

export default AppLayout;

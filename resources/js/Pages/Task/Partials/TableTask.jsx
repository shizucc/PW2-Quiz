import React from "react";
import Table from "./Table";

function App(props) {
    
  let datas = []

  
  props.datas.forEach(col => {
    datas.push({
      'id' : col.id,
      'judul' : col.judul.charAt(0).toUpperCase() + col.judul.slice(1),
      'deskripsi' : col.deskripsi,
      'status' : col.status
    })
  });




  const columns =  [
      {
        Header: "Judul",
        accessor: "judul",
      },
      {
        Header: "Deskripsi",
        accessor: "deskripsi",
      },
    ]


  const data = datas
  
  return (
    <>
      <div>
        <Table 
        signature={'task'}
        columns={columns} 
        data={data}
        data_for_select={props.data_for_select}  
        route_for_show={props.route_for_show}
        route_for_update={props.route_for_update}
        route_for_edit={props.route_for_edit}
        route_for_delete={props.route_for_delete}
        message_where_delete = {props.message_where_delete}
        />
      </div>
    </>
  );
}

export default App;
import React from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import dayjs from "dayjs";

export default function TodoGrid({todos, gridRef}) {
    const colDefs = [{
        field: "date",
        filter: true,
        floatingFilter: true,
        }, {field: "description", filter: true, floatingFilter: true}, {
        field: "priority",
        filter: true,
        floatingFilter: true
    }];

    return <div className="ag-theme-material" style={{width: 700, height: 500}}>
        <AgGridReact
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            rowData={todos}
            columnDefs={colDefs}
            rowSelection="single"
            animateRows={true}
        />
    </div>;
}

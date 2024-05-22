import React from "react";
import { Adaptable, AdaptableOptions } from "@adaptabletools/adaptable-react-aggrid";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { GridOptions, Module } from "@ag-grid-community/core";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
import { columnDefs, defaultColDef } from "./ColumnDefs";
import { rowData, WebFramework } from "./RowData";

const adaptableOptions: AdaptableOptions = {
  userName: "BugReport",
  adaptableId: "BugReport",
  primaryKey: "id",
};

const gridOptions: GridOptions<WebFramework> = {
  rowData,
  columnDefs,
  defaultColDef,
};

const modules: Module[] = [ClientSideRowModelModule, MenuModule, StatusBarModule, RowGroupingModule];

export const App: React.FC = () => {
  return (
    <Adaptable.Provider adaptableOptions={adaptableOptions} gridOptions={gridOptions} modules={modules}>
      <Adaptable.UI />
      <div style={{ flex: 1 }} className="ag-theme-balham">
        <Adaptable.AgGridReact />
      </div>
    </Adaptable.Provider>
  );
};

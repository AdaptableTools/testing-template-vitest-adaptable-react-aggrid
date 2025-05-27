import React from 'react';
import { Adaptable, AdaptableOptions } from '@adaptabletools/adaptable-react-aggrid';
import { AllEnterpriseModule, GridOptions, Module, themeQuartz } from 'ag-grid-enterprise';

import { columnDefs, defaultColDef } from './ColumnDefs';
import { rowData, WebFramework } from './RowData';

const adaptableOptions: AdaptableOptions = {
  userName: 'BugReport',
  adaptableId: 'BugReport',
  primaryKey: 'id',
  initialState: {
    Dashboard: {
      Tabs: [{ Name: 'Demo', Toolbars: ['Layout'] }],
    },
    Theme: { CurrentTheme: 'dark' },
    Layout: {
      CurrentLayout: 'Pivot Cols Layout',
      Layouts: [
        {
          Name: 'Grouped Layout',
          RowGroupedColumns: ['language', 'license'],
          TableColumns: [
            'name',
            'github_stars',
            'language',
            'github_watchers',
            'updated_at',
            'license',
            'description',
            'created_at',
          ],
        },
        {
          Name: 'Standard Layout',
          TableColumns: [
            'name',
            'github_stars',
            'language',
            'github_watchers',
            'updated_at',
            'description',
            'created_at',
          ],
        },
      ],
    },
  },
};

const gridOptions: GridOptions<WebFramework> = {
  theme: themeQuartz,
  rowData,
  columnDefs,
  defaultColDef,
};

const modules: Module[] = [AllEnterpriseModule];

export const App: React.FC = () => {
  return (
    <Adaptable.Provider adaptableOptions={adaptableOptions} gridOptions={gridOptions} modules={modules}>
      <Adaptable.UI />
      <div style={{ flex: 1 }}>
        <Adaptable.AgGridReact />
      </div>
    </Adaptable.Provider>
  );
};

import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  getKeyValue,
  User,
} from '@nextui-org/react';
import { DeleteIcon } from './DeleteIcon.jsx';

const rows = [
  {
    key: '1',
    starttime: '9:15 AM',
    endtime: '3:30 PM',
    delete: '',
  },
  {
    key: '2',
    starttime: '9:15 AM',
    endtime: '3:30 PM',
    delete: '',
  },
  {
    key: '3',
    starttime: '9:15 AM',
    endtime: '3:30 PM',
    delete: '',
  },
  {
    key: '4',
    starttime: '9:15 AM',
    endtime: '3:30 PM',
    delete: '',
  },
];

const columns = [
  {
    key: 'starttime',
    label: 'Start Time',
  },
  {
    key: 'endtime',
    label: 'End Time',
  },
  {
    key: 'delete',
    label: 'Delete',
  },
];
type User = (typeof rows)[0];

export default function App() {
  const getKeyValue = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'delete':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

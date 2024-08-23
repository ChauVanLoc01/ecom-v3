import { ColumnDef, flexRender, getCoreRowModel, TableOptions, useReactTable } from '@tanstack/react-table'
import { TableBody, TableCell, TableHead, TableHeader, Table as TableLib, TableRow } from '../Shadcn/table'
import { cn } from 'src/utils/utils.ts'

type TableProps<T> = {
    data: T[]
    columns: ColumnDef<T>[]
    tableMaxHeight?: string
    className?: string
    onMouseOverInTableRow?: (orderId: string) => () => void
    isBill?: boolean
} & Omit<TableOptions<T>, 'getCoreRowModel'>

const Table = function <T extends { id: string }>({
    columns,
    data,
    className,
    tableMaxHeight,
    onMouseOverInTableRow,
    isBill
}: TableProps<T>) {
    const table = useReactTable<T>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <TableLib className={cn(className)} maxHeight={tableMaxHeight ?? 'auto'}>
            <TableHeader
                className={cn('bg-gray-100 sticky top-0', {
                    'border-2 border-gray-400 bg-white': isBill
                })}
            >
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header, idx) => {
                            return (
                                <TableHead
                                    key={`table_header_${idx}`}
                                    className={cn({
                                        'border-2 border-gray-400 text-black': isBill
                                    })}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody className={cn()}>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row, idx) => (
                        <TableRow
                            onMouseOver={onMouseOverInTableRow && onMouseOverInTableRow(row.original.id)}
                            className='border-none'
                            key={`table_row_${idx}`}
                            data-state={row.getIsSelected() && 'selected'}
                        >
                            {row.getVisibleCells().map((cell, col_idx) => (
                                <TableCell
                                    key={`table_row_${idx}_col_${col_idx}`}
                                    className={cn({
                                        'border-2 border-gray-400': isBill
                                    })}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className='h-24 text-center'>
                            Không có dữ liệu
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </TableLib>
    )
}

export default Table

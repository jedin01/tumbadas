import React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import {
  HiOutlinePencilSquare,
  HiOutlineEye,
  HiOutlineTrash,
} from "react-icons/hi2";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

interface DataTableProps {
  columns: GridColDef[];
  rows: object[];
  slug?: string;
  includeActionColumn?: boolean;
  onView?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => Promise<void>;
  showViewButton?: boolean;
  showEditButton?: boolean;
  showDeleteButton?: boolean;
  confirmDeleteMessage?: string;
  deleteEndpoint?: (id: number) => string;
  queryKeyToInvalidate?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  rows,
  slug,
  includeActionColumn = false,
  onView,
  onEdit,
  onDelete,
  showViewButton = true,
  showEditButton = true,
  showDeleteButton = true,
  confirmDeleteMessage = "Tem certeza que deseja eliminar este item?",
  deleteEndpoint = (id) => `http://localhost:8000/api/${slug}/${id}`,
  queryKeyToInvalidate = "allproducts",
}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleView = (id: number) => {
    if (onView) return onView(id);
    if (slug) navigate(`/${slug}/${id}`);
  };

  const handleEdit = (id: number) => {
    if (onEdit) return onEdit(id);
    if (slug) navigate(`/${slug}/${id}/editar`);
  };

  const handleDelete = async (id: number) => {
    if (onDelete) {
      return await onDelete(id);
    }

    const confirmed = window.confirm(confirmDeleteMessage);
    if (!confirmed) return;

    try {
      const res = await fetch(deleteEndpoint(id), {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Erro ao eliminar.");

      toast.success("Eliminado com sucesso!");
      queryClient.invalidateQueries([queryKeyToInvalidate]);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao eliminar!");
    }
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Ação",
    minWidth: 200,
    flex: 1,
    renderCell: (params) => {
      return (
        <div className="flex items-center gap-2">
          {showViewButton && (
            <button
              onClick={() => handleView(params.row.id)}
              className="btn btn-square btn-ghost text-blue-500 hover:text-blue-700"
            >
              <HiOutlineEye />
            </button>
          )}
          {showEditButton && (
            <button
              onClick={() => handleEdit(params.row.id)}
              className="btn btn-square btn-ghost text-green-500 hover:text-green-700"
            >
              <HiOutlinePencilSquare />
            </button>
          )}
          {showDeleteButton && (
            <button
              onClick={() => handleDelete(params.row.id)}
              className="btn btn-square btn-ghost text-red-500 hover:text-red-700"
            >
              <HiOutlineTrash />
            </button>
          )}
        </div>
      );
    },
  };

  const finalColumns = includeActionColumn
    ? [...columns, actionColumn]
    : columns;

  return (
    <div className="w-full bg-base-100 text-base-content">
      <DataGrid
        className="dataGrid p-0 xl:p-3 w-full bg-base-100 text-white"
        rows={rows}
        columns={finalColumns}
        getRowHeight={() => "auto"}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        getRowId={(row) => (row as any).id}
      />
    </div>
  );
};

export default DataTable;

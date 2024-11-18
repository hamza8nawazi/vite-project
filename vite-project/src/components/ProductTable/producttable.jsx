
import ProductRow from './productrow'
import "./table.css"
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

const ProductTable = ({ products }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5; 

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

 
  const paginatedProducts = products.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={products.length} // Total number of products (10)
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage} // Fixed to 5 rows per page
        rowsPerPageOptions={[]} // Hide rows per page dropdown
      />
    </Paper>
  );
};

export default ProductTable;

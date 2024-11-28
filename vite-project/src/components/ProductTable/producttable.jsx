import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import './table.css';

const ProductTable = ({ products }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/');
  };

  const paginatedProducts = products.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      <div style={{ textAlign: 'right', margin: '10px' }}>
        <button
          onClick={handleLogout}
          style={{
            padding: '10px 15px',
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>

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
                  <TableCell>
                    <Link to={`/product/${product.id}`} style={{ color: 'blue', cursor: 'pointer' }}>
                      {product.title}
                    </Link>
                  </TableCell>
                  <TableCell>{product.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={products.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]}
        />
      </Paper>
    </div>
  );
};

export default ProductTable;


import React from "react";
import Table from "react-bootstrap/Table";
import { IPosts } from "../models";
import sortArrow from './img/arrowSort.svg'

import './table.css'




function TablePosts({ filteredPosts, onSort, sortBy }: {filteredPosts: IPosts[], onSort: (body: string) => void, sortBy:{ iter: string, order: 'asc' | 'desc' } } ) {

const renderSortArrow = (currentPath: string) => {
  if(sortBy.iter === currentPath) {
    if(sortBy.order === 'asc'){
      return <img className="sortArrowDown" alt="sortArrow" src={sortArrow}></img>
    }else if (sortBy.order === 'desc'){
      return <img  alt="sortArrow" src={sortArrow}></img>
    } 
  }return null

}
  return (
    <div className="table_wrapper">
      <Table bordered hover>
        <thead>
          <tr className="table_header">
            <th onClick={() => onSort('id')}>ID {renderSortArrow('id')}</th>
            <th onClick={() => onSort('title')}>Заголовок {renderSortArrow('title')}</th>
            <th onClick={() => onSort('body')}>Описание {renderSortArrow('body')}</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post:IPosts) => (
            <tr key={post.id}>
              <td style={{width: '110px', textAlign: 'center', verticalAlign: 'middle', fontSize: '13px'}}>{post.id}</td>
              <td style={{width: '529px',  verticalAlign: 'middle'}}>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
     
        </tbody>
      </Table>
    </div>
  );
}

export default TablePosts;

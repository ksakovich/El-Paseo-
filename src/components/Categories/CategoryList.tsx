import React from "react";
import "./CategoryList.css";

interface CategoryListProps {
  categoryitems: { id: number; text: string }[];
}

const CategoryList: React.FC<CategoryListProps> = (props) => {
  return (
    <aside className="col-md-3">
      <div className="card-body">
        <ul className="list-menu">
          {props.categoryitems.map((category) => (
            //<li key={category.id}>{category.text}</li>
            <li>
              <a href="key={category.id}">{category.text} </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategoryList;

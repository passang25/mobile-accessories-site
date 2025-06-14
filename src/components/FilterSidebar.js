import React from 'react';

export default function FilterSidebar({ categories, selectedCategory, onCategorySelect }) {
  return (
    <aside className="bg-white p-4 shadow rounded-lg">
      <h4 className="font-bold mb-2">Categories</h4>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onCategorySelect(cat)}
            className={`cursor-pointer mb-1 hover:text-indigo-600 ${selectedCategory === cat ? 'font-semibold text-indigo-600' : ''}`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

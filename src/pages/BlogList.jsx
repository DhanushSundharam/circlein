import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './Blog.css';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';

const BlogList = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' or 'oldest'
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = ['All', 'Company', 'Publication', 'Milestone', 'Release'];

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    // SEO
    document.title = "CircleInd Blog | Updates, Research & Driver Trust";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Read the latest news, updates, and research from CircleInd. Learn how we hire professional drivers, improve safety, and build trust in Gobichettipalayam.";

    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) setIsFilterOpen(false);
      if (sortRef.current && !sortRef.current.contains(event.target)) setIsSortOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter
  let displayBlogs = filterCategory === 'All' 
    ? [...blogs] 
    : blogs.filter(b => b.category === filterCategory);

  // Sort
  displayBlogs.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="blog-index-page">
      <div className="blog-container">
        <header className="blog-index-header">
          <h1>Blog</h1>
        </header>
        
        <div className="blog-controls-wrapper">
          <div className="blog-tabs"></div>
          
          <div className="blog-filters">
            <div className="dropdown-container" ref={sortRef}>
              <button className="blog-filter-btn" onClick={() => { setIsSortOpen(!isSortOpen); setIsFilterOpen(false); }}>
                Sort: {sortOrder === 'newest' ? 'Newest' : 'Oldest'} <ChevronDown size={14} />
              </button>
              {isSortOpen && (
                <div className="dropdown-menu">
                  <button 
                    className={`dropdown-item ${sortOrder === 'newest' ? 'active' : ''}`}
                    onClick={() => { setSortOrder('newest'); setIsSortOpen(false); }}
                  >
                    Newest First
                  </button>
                  <button 
                    className={`dropdown-item ${sortOrder === 'oldest' ? 'active' : ''}`}
                    onClick={() => { setSortOrder('oldest'); setIsSortOpen(false); }}
                  >
                    Oldest First
                  </button>
                </div>
              )}
            </div>

            <div className="blog-view-toggles">
              <button className="view-toggle"><LayoutGrid size={16} /></button>
              <button className="view-toggle active"><List size={16} /></button>
            </div>
          </div>
        </div>

        <div className="blog-list">
          {displayBlogs.map(blog => (
            <Link to={`/blog/${blog.slug}`} key={blog.id} className="blog-list-item">
              <div className="blog-meta-col">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <div className="blog-content-col">
                <h2>{blog.title}</h2>
                <p>{blog.summary}</p>
              </div>
            </Link>
          ))}
          {displayBlogs.length === 0 && (
            <div style={{padding: '40px 0', color: '#666'}}>No blogs found for this category.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
